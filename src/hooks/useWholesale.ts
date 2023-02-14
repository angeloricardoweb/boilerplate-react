import useSWR from 'swr';
import Cookies from 'js-cookie';
import { api } from '../services/axios';

interface IWholesale {
  quantidade_minima: number;
  valor: number;
  error: boolean;
  isValidating: boolean;
}

export function useWholeSale() {
  const { data, error, isValidating } = useSWR('/atacado', async (url) => {
    const response = await api.get(url, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    return response.data;
  });

  const dataWholesale: IWholesale = {
    quantidade_minima: data?.data.quantidade_minima,
    valor: data?.data.valor,
    error,
    isValidating,
  };

  return dataWholesale;
}
