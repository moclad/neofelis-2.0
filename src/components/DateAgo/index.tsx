import dayjs from 'dayjs';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { forwardRef, Tooltip, TooltipProps } from '@chakra-ui/react';

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

const getDelay = (diff: number) => {
  if (diff <= ONE_MINUTE) return ONE_SECOND * 10;
  if (diff <= ONE_HOUR) return ONE_MINUTE;
  if (diff <= ONE_DAY) return ONE_MINUTE * 15;
  return ONE_HOUR;
};

export interface DateAgoProps extends Omit<TooltipProps, 'children'> {
  date?: string | Date | dayjs.Dayjs;
  format?: string;
  locale?: string;
}

export const DateAgo: FC<React.PropsWithChildren<DateAgoProps>> = forwardRef(function DateAgo({ date = new Date(), format, ...rest }, ref) {
  const { t } = useTranslation('components');
  const [, setForceUpdate] = useState(0);
  const dayjsDate = dayjs(date);

  useEffect(() => {
    if (date) {
      const diff = dayjs().diff(dayjs(date));

      const timeout = setTimeout(() => {
        setForceUpdate((x) => x + 1);
      }, getDelay(diff));
      return () => clearTimeout(timeout);
    }
  }, [date]);

  if (!date) {
    return null;
  }

  return (
    <Tooltip ref={ref} label={dayjsDate.format(format ?? t('dateAgo.format'))} placement="top-start" {...rest}>
      {dayjsDate.fromNow()}
    </Tooltip>
  );
});
