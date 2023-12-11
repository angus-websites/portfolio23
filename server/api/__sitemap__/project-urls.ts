import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
    // fetch data directly in the correct type
    const projects = await $fetch(process.env.API_BASE_URL+'/api/projects')
    return [
        ...projects.docs.map(p => asSitemapUrl({
            loc: `projects/${p.slug}`,
        }))
    ]
})