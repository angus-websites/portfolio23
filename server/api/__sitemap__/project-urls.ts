import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

type ApiResult = {
    docs: {
        slug: string;
    }[]

}

export default defineSitemapEventHandler(async () => {

    const apiBaseUrl = process.env.API_BASE_URL

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