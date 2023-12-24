import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
const runtimeConfig = useRuntimeConfig()

type ApiResult = {
    docs: {
        slug: string;
    }[]

}

export default defineSitemapEventHandler(async () => {

    const apiBaseUrl = runtimeConfig.public.apiBaseUrl


    const projects = await $fetch<ApiResult>(`${apiBaseUrl}/api/projects`).catch(
        () => null
    )

    if (!projects || !projects?.docs) {
        return []
    }

    return [
        ...projects.docs.map(p => asSitemapUrl({
            loc: `projects/${p.slug}`,
        }))
    ]
})