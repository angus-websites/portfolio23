import {useApiData} from "~/composables/useApiData";
import {PageData} from "~/types/PageData";
import {useUtils} from "~/composables/useUtils";

export function usePageSetup(){
    const { fetchItem, getFullUrl } = useApiData();
    const { checkBlankString } = useUtils();

    async function fetchPageData (): Promise<{pageData: any, pageError: any}> {

        const route = useRoute()

        // Attempt to fetch page data
        const { data: pageData, error: pageError } = await fetchItem<PageData>(`/pages/${route.name}`);

        return {pageData, pageError}
    }

    function setupPageHead(pageData, defaultTitle: string, defaultDescription: string) {

        const title = checkBlankString(pageData.title, defaultTitle);
        const description = checkBlankString(pageData.meta?.description ?? "", defaultDescription);
        const metaImageUrl = pageData.meta?.image ? getFullUrl(pageData.meta.image.url) : null;

        // Set SEO meta tags
        useSeoMeta({
            ogTitle: checkBlankString(pageData.meta.title, title),
            ogDescription: description,
            ogImage: metaImageUrl,
        });

        // Set standard meta tags
        useHead({
            title: title,
            meta: [
                { name: 'title', content: checkBlankString(pageData.meta?.title ?? "", defaultTitle) },
                { name: 'description', content: description }
            ],
        });

    }

    return {
        setupPageHead,
        fetchPageData
    };

}
