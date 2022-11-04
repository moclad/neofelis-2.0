import { DocumentNode } from 'graphql';

import { useQuery } from '@apollo/client';

import { ISelectOptions } from '../types/types';

export interface useDataToSelectorConverterProps<T> {
  entity: string;
  query: DocumentNode;
  labelFieldName?: string;
  idFieldName?: string;
  skipQuery?: boolean;
  onComplete?: (data: ISelectOptions<T>[]) => void;
}

export function useDataToSelectorConverter<T>(props: useDataToSelectorConverterProps<T>) {
  const { entity, query, labelFieldName = 'name', idFieldName = 'id', skipQuery = false, onComplete } = props;

  const selectOptions: ISelectOptions<T>[] = [];

  const { data, loading, error } = useQuery(query, {
    pollInterval: 500,
    skip: skipQuery,
  });

  if (data) {
    data[entity]?.forEach((item: any) => {
      const option: ISelectOptions<T> = {
        label: item[labelFieldName],
        value: item[idFieldName],
        data: item,
      };
      selectOptions.push(option);
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
