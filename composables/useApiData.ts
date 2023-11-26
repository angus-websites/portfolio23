import { useFetch, useRuntimeConfig } from 'nuxt/app';

export function useApiData<T = any>(endpoint: string) {
    const config = useRuntimeConfig();
    const apiBaseUrl = config.public.apiBaseUrl;

    const { data, error, pending } = useFetch(`${apiBaseUrl}${endpoint}`, {
        transform: (response: any) => response.docs ? response.docs : []
    });

    return { data, error, pending };
}