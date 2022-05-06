import { DocumentNode } from 'graphql';

import { useQuery } from '@apollo/client';

import { ISelectOptions } from '../types/types';

export interface useDataToSelectorConverterProps {
  entity: string;
  query: DocumentNode;
  labelFieldName?: string;
  idFieldName?: string;
  skipQuery?: boolean;
  onComplete?: (data: ISelectOptions[]) => void;
}

export function useDataToSelectorConverter(
  props: useDataToSelectorConverterProps
) {
  const {
    entity,
    query,
    labelFieldName = 'name',
    idFieldName = 'id',
    skipQuery = false,
    onComplete,
  } = props;

  const selectOptions: ISelectOptions[] = [];

  const { data, loading, error } = useQuery(query, {
    pollInterval: 500,
    skip: skipQuery,
  });

  if (data) {
    data[entity]?.forEach((item) => {
      const option: ISelectOptions = {
        label: item[labelFieldName],
        value: item[idFieldName],
        data: item,
      };
      selectOptions.push(option);
      return selectOptions;
    });
  }

  if (onComplete && !skipQuery) {
    onComplete(selectOptions);
  }

  return {
    selectOptions,
    loading,
    error,
  };
}
