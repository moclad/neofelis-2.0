import { useState } from 'react';

import { DayPicker } from './index';

export default {
  title: 'Components/Daypicker',
};
export const Default = () => {
  const [selectedDay, setSelectedDay] = useState();
  return (
    <DayPicker
      value={selectedDay}
      onChange={(day) => {
        setSelectedDay(day);
      }}
    />
  );
};
