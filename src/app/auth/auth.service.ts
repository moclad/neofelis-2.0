import Axios, { AxiosError } from 'axios';

import { useAuthContext } from '@/app/auth/AuthContext';
import { useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query';

export const useLogin = (
  config: UseMutationOptions<
    { id_token: string },
    AxiosError<any>,
    { email: string }
  > = {}
) => {
  const { updateToken } = useAuthContext();
  return useMutation(
    ({ email }) => {
      return Axios.post('/authenticate', { email });
    },
    {
      ...config,
      onSuccess: (data, ...rest) => {
        updateToken(data.id_token);
        if (config.onSuccess) {
          config.onSuccess(data, ...rest);
        }
      },
    }
  );
};

export const useProvidersList = () => {
  const result = useQuery(
    ['auth-providers'],
    (): Promise<any[]> => Axios.get('/auth/providers')
  );

  return {
    providers: result.data,
    ...result,
  };
};
