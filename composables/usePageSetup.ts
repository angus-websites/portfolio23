import {useApiData} from "~/composables/useApiData";
import {PageData} from "~/types/PageData";

export function usePageSetup(){
    const { fetchItem, getFullUrl } = useApiData();

    async function fetchPageData (): Promise<{pageData: any, pageError: any}> {

        const route = useRoute()

        // Attempt to fetch page data
        const { data: pageData, error: pageError } = await fetchItem<PageData>(`/pages/${route.name}`);

        return {pageData, pageError}
    }

    function setupPageHead(pageData, defaultTitle: string, defaultDescription: string) {

        const title = pageData.title || defaultTitle;

        useHead({
            title: title,

        });



    }

    return {
        setupPageHead,
        fetchPageData
    };

}
