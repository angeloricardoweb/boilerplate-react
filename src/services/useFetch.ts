import useSWR from 'swr';
import { api } from './axios';

/**
 * @param url - url da requisição
 * @param T - tipo do valor retornado
 */
export function useFetch<T>(url: string) {
  const { data, error, isLoading } = useSWR<T, Error>(url, async (url) => {
    const response = await api.get(url);
    return response.data;
  });

  return { data, error, isLoading };
}

