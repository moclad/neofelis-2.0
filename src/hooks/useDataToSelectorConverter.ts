import { DocumentNode } from 'graphql';

import { useQuery } from '@apollo/client';

import { ISelectOptions } from '../types/types';

export interface useDataToSelectorConverterProps {
  entity: string;
  query: DocumentNode;
  labelFieldName?: string;
  idFieldName?: string;
  skipQuery?: boolean;
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
  } = props;

  const selectOptions: ISelectOptions[] = [];

  const { data, loading, error } = useQuery(query, {
    pollInterval: 500,
    skip: skipQuery,
  });

  if (data) {
    data[entity]?.map((item) => {
      const option: ISelectOptions = {
        label: item[labelFieldName],
        value: item[idFieldName],
      };
      selectOptions.push(option);
    });
  }

  return {
    selectOptions,
    loading,
    error,
  };
}
