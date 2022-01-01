import dayjs from 'dayjs';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface PanelContainerProps {
  date?: string | Date | dayjs.Dayjs;
}

export const PanelContainer: FC<PanelContainerProps> = (props) => {
  const { date } = props;

  const { t } = useTranslation();

  return <></>;
};
