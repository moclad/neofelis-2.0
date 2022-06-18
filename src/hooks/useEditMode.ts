import * as React from 'react';

import { useControllableProp, useId } from '@chakra-ui/react';

export interface UseEditModeProps<P> {
  isEditing?: boolean;
  defaultIsEditing?: boolean;
  dataContext?: P;
  onFinish?(): void;
  onEdit?(values: object): void;
  id?: string;
}

export function useEditMode<T, P>(props: UseEditModeProps<P> = {}) {
  const {
    onFinish: onFinishProp,
    onEdit: onEditProp,
    isEditing: isEditingProp,
    dataContext: dataContextProp,
    id: idProp,
  } = props;

  const [isEditingState, setIsEditing] = React.useState(
    props.defaultIsEditing || false
  );
  const [isControlled, isEditing] = useControllableProp(
    isEditingProp,
    isEditingState
  );

  const [dataContext, setDataContext] = React.useState(dataContextProp);
  const [dataKey, setDataKey] = React.useState<T>();

  const id = useId(idProp, 'editMode');

  const onFinish = React.useCallback(() => {
    if (!isControlled) {
      setIsEditing(false);
      setDataContext(null);
      setDataKey(null);
    }
    onFinishProp?.();
  }, [isControlled, onFinishProp]);

  const onEdit = React.useCallback(
    (id, values) => {
      if (!isControlled) {
        setIsEditing(true);
        setDataContext(values);
        setDataKey(id);
      }
      onEditProp?.(values);
    },
    [dataContext, isControlled, onEditProp]
  );

  const onToggle = React.useCallback(
    (id, values) => {
      if (isEditing) {
        onFinish();
      } else {
        onEdit(id, values);
      }
    },
    [isEditing, onEdit, onFinish]
  );

  return {
    isEditing: !!isEditing,
    onEdit,
    onFinish,
    onToggle,
    isControlled,
    dataContext,
    dataKey,
    getEditModeProps: (props: any = {}) => ({
      ...props,
      hidden: !isEditing,
      id,
    }),
  };
}

export type UseEditModeReturn = ReturnType<typeof useEditMode>;
