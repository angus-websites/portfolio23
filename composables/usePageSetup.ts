import {useApiData} from "~/composables/useApiData";
import {PageData} from "~/types/PageData";

export function usePageSetup(){
    const { fetchItem, getFullUrl } = useApiData();

    async function setupPageHead (defaultTitle: string, defaultDescription: string): Promise<{pageData: any, pageError: any}> {

        const route = useRoute()

        // Attempt to fetch page data
        const { data: pageData, error: pageError } = await fetchItem<PageData>(`/pages/${route.name}`);

        const onPageData = (data) => {
            /**
             * Set up SEO meta tags
             */

                // Construct meta image url
            const metaImageUrl = data.meta?.image ? getFullUrl(data.meta.image.url) : null;

            // Set SEO meta tags
            useSeoMeta({
                ogTitle: checkBlankString(data.meta.title, defaultTitle),
                ogDescription: checkBlankString(data.meta.description, defaultDescription),
                ogImage: metaImageUrl,
            });

            // Set standard meta tags
            useHead({
                title: defaultTitle,
                meta: [
                    { name: 'title', content: checkBlankString(data.meta?.title ?? "", defaultTitle) },
                    { name: 'description', content: checkBlankString(data.meta?.description ?? "", defaultDescription) }
                ],
            });
        };

        if (pageData.value && !pageError) {
            onPageData(pageData.value);
        } else {

            // If page data is not found, set up default tags
            useHead({
                title: defaultTitle,
                meta: [
                    { name: 'title', content: defaultDescription},
                    { name: 'description', content: defaultDescription }
                ]
            });
        }

        return {
            pageData,
            pageError
        }
    }

    return {
        setupPageHead,
    };

}
