import useSWR from 'swr';
import { api } from './axios';


/** 
 * @param url - url do contrato 
 * @param T - tipo do valor retornado
*/
export function useFetchByContrato<T>(url: string) {
  const { data, error, isLoading } = useSWR<T, Error>(url, async (url) => {
    const response = await api.get(
      `https://api-temp.vercel.app/api/bredi-team${url}`
    );
    return response.data;
  });

  return { data, error, isLoading };
}

