import { useFetch, useRuntimeConfig } from 'nuxt/app';

export function useApiData(endpoint: string) {
    const config = useRuntimeConfig();
    const apiBaseUrl = config.public.apiBaseUrl;
    const { data, error, pending } = useFetch(`${apiBaseUrl}${endpoint}`);

    return { data, error, pending };
}
