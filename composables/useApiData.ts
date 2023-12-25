import { useFetch, useRuntimeConfig } from 'nuxt/app';

export function useApiData<T = any>() {

    const config = useRuntimeConfig();
    const apiBaseUrl = config.public.apiBaseUrl;

    /**
     * Get the full URL for an asset
     */
    function getFullUrl<T = any>(assetPath: string): string {
        if (!assetPath) {
            return '/assets/images/placeholder.svg';
        }
        if (assetPath.startsWith('http://') || assetPath.startsWith('https://')) {
            return assetPath;
        }
        return `${apiBaseUrl}${assetPath.startsWith('/') ? '' : '/'}${assetPath}`;
    }

    /**
     * Fetch a collection of data from the API
     */
    async function fetchData<T = any>(endpoint: string) {
        const url = `${apiBaseUrl}/api${endpoint}`
        const {data, error, pending} = await useFetch<T>(url, {
            transform: (response: any) => response.docs ? response.docs : []
        });

        return {data, error, pending};
    }

    /**
     * Fetch a single item of data from the API
     */
    async function fetchItem<T = any>(endpoint: string) {
        const url = `${apiBaseUrl}/api${endpoint}`
        const {data, error, pending} = await useFetch<T>(url);
        return {data, error, pending};
    }

    return { getFullUrl, fetchData, fetchItem };
}
