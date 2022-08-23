import { mode, StyleFunctionProps, Styles } from '@chakra-ui/theme-tools';

import * as externals from './externals';

const externalsStyles = (props: StyleFunctionProps) =>
  Object.values(externals).reduce(
    (acc, cur) => ({
      ...acc,
      ...(typeof cur === 'function' ? cur(props) : cur),
    }),
    {}
  );

export const styles: Styles = {
  global: (props) => ({
    html: {
      bg: 'gray.800',
    },
    body: {
      bg: mode('gray.50', 'gray.800')(props),
      WebkitTapHighlightColor: 'transparent',
    },
    '#chakra-toast-portal > *': {
      pt: 'safe-top',
      pl: 'safe-left',
      pr: 'safe-right',
      pb: 'safe-bottom',
    },
    '#nprogress': {
      pointerEvents: 'none',
    },
    '#nprogress .bar': {
      background: 'green.200',
      position: 'fixed',
      zIndex: '1031',
      top: 5,
      left: 0,
      width: '100%',
      height: '2px',
    },
    ...externalsStyles(props),
  }),
};
