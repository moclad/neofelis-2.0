import { transparentize } from '@chakra-ui/theme-tools';

import { colors } from './colors';

const createOutline = (colorScheme = 'gray') => {
  const color = transparentize(`${colorScheme}.500`, 0.3)({ colors });
  return `0 0 0 3px ${color}`;
}

export const shadows = {
  outline: createOutline('brand'),
  'outline-brand': createOutline('brand'),
  'outline-gray': createOutline('gray'),
  'outline-success': createOutline('success'),
  'outline-warning': createOutline('warning'),
  'outline-error': createOutline('error'),
};
