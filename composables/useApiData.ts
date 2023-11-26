import { useFetch, useRuntimeConfig } from 'nuxt/app';

export function useApiData<T = any>() {
    const config = useRuntimeConfig();
    const apiBaseUrl = config.public.apiBaseUrl;

    /**
     * Get the full URL for an asset
     */
    function getFullUrl<T = any>(assetPath: string): string {
        if (assetPath.startsWith('http://') || assetPath.startsWith('https://')) {
            return assetPath;
        }
        return `${apiBaseUrl}${assetPath.startsWith('/') ? '' : '/'}${assetPath}`;
    }

    /**
     * Fetch data from the API
     */
    function fetchData<T = any>(endpoint: string) {
        const { data, error, pending } = useFetch<T>(getFullUrl(endpoint), {
            transform: (response: any) => response.docs ? response.docs : []
        });

        return { data, error, pending };
    }

    return { getFullUrl, fetchData };
}
