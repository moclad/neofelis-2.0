import { useTranslation } from 'react-i18next';

import { useToastError, useToastSuccess } from '@/components/Toast';

export interface useMutationOptionProps {
  successMessage?: string;
  errorMessage?: string;
}

export const useMutationOptions = (props: useMutationOptionProps = {}) => {
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();
  const { t } = useTranslation('common');

  const {
    successMessage = 'common:feedbacks.saveSuccess.title',
    errorMessage = 'common:feedbacks.saveError.title',
  } = props;

  const mutationOptions = {
    onError: (error) => {
      toastError({
        title: t(errorMessage),
        description: error.message,
      });
    },
    onCompleted: () => {
      toastSuccess({
        title: t(successMessage),
      });
    },
  };

  return { mutationOptions };
};
