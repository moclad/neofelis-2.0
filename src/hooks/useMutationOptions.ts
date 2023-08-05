import { useTranslation } from 'react-i18next';

import { useToastError, useToastSuccess } from '@/components/Toast';
import { ApolloError } from '@apollo/client';

export interface UseMutationOptionProps {
  successMessage?: string;
  errorMessage?: string;
}

export const useMutationOptions = (props: UseMutationOptionProps = {}) => {
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();
  const { t } = useTranslation('common');

  const {
    successMessage = 'common:feedbacks.saveSuccess.title',
    errorMessage = 'common:feedbacks.saveError.title',
  } = props;

  const mutationOptions = {
    onError: (error: ApolloError) => {
      toastError({
        title: t(errorMessage, ''),
        description: error.message,
      });
    },
    onCompleted: () => {
      toastSuccess({
        title: t(successMessage, ''),
      });
    },
  };

  return { mutationOptions };
};
