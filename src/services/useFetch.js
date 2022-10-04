import useSWR from 'swr'
import { api } from './axios'

export function useFetch(url) {
  const { data, error } = useSWR(url, async (url) => {
    const response = await api.get(url)
    return response.data
  })

  return { data, error }
}
