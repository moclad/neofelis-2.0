import React from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';
import {
  Box,
  ChakraComponent,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatProps
} from '@chakra-ui/react';

interface PanelStatProps {
  key: string;
  loading?: boolean;
  label: string;
  value?: number;
  arrowType?: 'increase' | 'decrease';
  helperText?: string;
  dataGrid: any;
}

export const PanelStat: ChakraComponent<'div', PanelStatProps> = ({
  key,
  loading,
  label = null,
  value = null,
  arrowType = 'increase',
  helperText = null,
  dataGrid,
}: PanelStatProps) => {
  const { colorModeValue } = useDarkMode();

  return (
    <Stat
      key={key}
      className={'widget'}
      bg={colorModeValue('white', 'gray.700')}
      shadow="lg"
      rounded="md"
      data-grid={dataGrid}
    >
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
      <StatHelpText>
        <StatArrow type={arrowType} />
        {helperText}
      </StatHelpText>
    </Stat>
  );
};
