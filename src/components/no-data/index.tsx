import React from 'react';
import { useTranslation } from 'react-i18next';

import { useDarkMode } from '@/hooks/useDarkMode';
import { Box, Center, chakra, HTMLChakraProps, Text, ThemingProps, useTheme } from '@chakra-ui/react';

export const NoData = ({ colorScheme = 'gray', ...rest }: HTMLChakraProps<'svg'> & { colorScheme?: ThemingProps['colorScheme'] }) => {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const { colorModeValue } = useDarkMode();

  const getColor = (alphaLight: string, alphaDark: string) => {
    return theme.colors[colorScheme][colorModeValue(alphaLight, alphaDark)];
  };

  return (
    <Box>
      <Center>
        <chakra.svg width="64" height="41" viewBox="0 0 64 41" fill="none" {...rest}>
          <g transform="translate(0 1)" fill="none" fillRule="evenodd">
            <ellipse fill={getColor('200', '400')} cx="32" cy="33" rx="32" ry="7" />
            <g stroke={getColor('300', '400')} fillRule="nonzero">
              <path
                fill={getColor('50', '400')}
                d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
              />
              <path
                d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                fill={getColor('200', '300')}
              />
            </g>
          </g>{' '}
        </chakra.svg>
      </Center>
      <Center>
        <Text pt={1} fontSize="sm" color={getColor('300', '300')}>
          {t('common:feedbacks.noData')}
        </Text>
      </Center>
    </Box>
  );
};
