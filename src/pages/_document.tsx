/* eslint-disable @next/next/no-document-import-in-page */
import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { resetServerContext } from 'react-beautiful-dnd';

import i18n from '@/config/i18next';
import { AVAILABLE_LANGUAGES } from '@/constants/i18n';
import theme from '@/theme';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    console.log('_document.getInitialProps');
    resetServerContext();
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      };
      // eslint-disable-next-line no-empty
    } finally {
    }
  }

  render() {
    console.log('_document');
    return (
      <Html
        lang={i18n.language}
        dir={
          AVAILABLE_LANGUAGES.find(({ key }) => key === i18n.language)?.dir ??
          'ltr'
        }
      >
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
