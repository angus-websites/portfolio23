import {useApiData} from "~/composables/useApiData";
import {PageData} from "~/types/PageData";

export function usePageSetup(){
    const { fetchItem, getFullUrl } = useApiData();

    async function getPageTitle (): Promise<{pageData: any, pageError: any}> {

        const route = useRoute()

        // Attempt to fetch page data
        const { data: pageData, error: pageError } = await fetchItem<PageData>(`/pages/${route.name}`);

        if (pageData.value) {
            return pageData.value.title
        }


    }

    function dummyFunction() {
        const title = getPageTitle()
        useHead({
            title: title
        })
    }

    return {
        getPageTitle,
        dummyFunction
    };

}
