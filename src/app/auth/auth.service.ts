import Axios from 'axios';
import { useMutation, UseMutationOptions, useQuery } from 'react-query';

export const useLogin = (
  config: UseMutationOptions<any, unknown, { email: string }> = {}
) => {
  console.log('mutate login');
  return useMutation(
    ({ email }) => {
      console.log(email);
      return Axios.post('/authenticate', { email });
    },
    {
      ...config,
      onSuccess: (data, ...rest) => {
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
