import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import {Project} from "~/types/Project";
import {useApiData} from "~/composables/useApiData";
const { fetchData } = useApiData();
export default defineSitemapEventHandler(async () => {
    const { data: projects} = await fetchData<Project[]>('/projects');

    if (!projects.value) {
        return []
    }
    else{
        return [
            // map URLS as needed
            ...projects.value.map(p => asSitemapUrl({
                loc: p.slug,
            }))
        ]
    }

})