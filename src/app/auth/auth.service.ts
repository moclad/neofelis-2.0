import Axios from 'axios';
import { useMutation, UseMutationOptions, useQuery } from 'react-query';

import { useAuthContext } from '@/app/auth/AuthContext';

export const useLogin = (
  config: UseMutationOptions<
    any,
    unknown,
    { username: string; password: string }
  > = {}
) => {
  const { updateToken } = useAuthContext();
  return useMutation(
    ({ username, password }) =>
      Axios.post('/authenticate', { username, password }),
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
