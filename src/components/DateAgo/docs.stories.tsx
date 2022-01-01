import dayjs from 'dayjs';
import React from 'react';

import { VStack } from '@chakra-ui/react';

import { DateAgo } from './index';

export default {
  title: 'Components/DateAgo',
  component: DateAgo,
  argTypes: {
    date: Date(),
    format: 'dddd, DD MMMM YYYY, hh:mm a',
  },
};

const Template = ({ format, date }) => {
  return (
    <VStack>
      <DateAgo format={format} date={date} />
      <DateAgo date={new Date()} />
      <DateAgo date={dayjs()} />
    </VStack>
  );
};

export const Default = Template.bind({});
Default.args = {
  date: Date(),
  format: 'dddd, DD MMMM YYYY, hh:mm a',
};
