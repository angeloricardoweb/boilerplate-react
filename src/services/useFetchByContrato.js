import useSWR from "swr";
import { api } from "./axios";

export function useFetchByContrato(url) {
  const { data, error } = useSWR(url, async (url) => {
    const response = await api.get(
      `https://api-temp.vercel.app/api/bredi-team${url}`
    );
    return response.data;
  });

  return { data, error };
}
