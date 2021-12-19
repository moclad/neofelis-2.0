import { useTranslation } from 'react-i18next';

import { useToastError, useToastSuccess } from '../components';

export interface useMutationOptionProps {
  successMessage?: string;
  errorMessage?: string;
}

export const useMutationOptions = (props: useMutationOptionProps = {}) => {
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();
  const { t } = useTranslation();

  const {
    successMessage = 'common:feedbacks.createdSuccess.title',
    errorMessage = 'common:feedbacks.createdError.title',
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
