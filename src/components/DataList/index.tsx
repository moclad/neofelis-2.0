import React, { FC, useContext, useEffect, useRef, useState } from 'react';

import {
  Pagination,
  PaginationButtonFirstPage,
  PaginationButtonLastPage,
  PaginationButtonNextPage,
  PaginationButtonPrevPage,
  PaginationInfo
} from '@/components/Pagination';
import { useDarkMode } from '@/hooks/useDarkMode';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Box,
  Flex,
  FlexProps,
  useBreakpointValue
} from '@chakra-ui/react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type DataListColumns = Record<string, DataListCellProps>;
type DataListContextValue = {
  setColumns: React.Dispatch<React.SetStateAction<DataListColumns>>;
  columns: DataListColumns;
  isHover: boolean;
};
type DataListHeaderContextValue = boolean;

export const DataListContext = React.createContext<DataListContextValue>(
  {} as any
);
export const DataListHeaderContext =
  React.createContext<DataListHeaderContextValue>(false);

export interface DataListCellProps extends FlexProps {
  colName?: string;
  colWidth?: string | number | Record<string, string | number>;
  isVisible?: boolean | boolean[] | Record<string, boolean>;
}

export const DataListCell = ({
  children,
  colName,
  colWidth = 1,
  isVisible = true,
  ...rest
}: DataListCellProps) => {
  const { columns, setColumns } = useContext(DataListContext);
  const isInHeader = useContext(DataListHeaderContext);
  const restRef = useRef<any>();
  restRef.current = rest;

  useEffect(() => {
    if (isInHeader && colName) {
      setColumns((prevColumns) => ({
        ...prevColumns,
        [colName]: { colWidth, isVisible, ...restRef.current },
      }));
    }
  }, [isInHeader, colName, colWidth, isVisible, setColumns]);

  const headerProps = !isInHeader ? columns?.[colName ?? ''] ?? {} : {};
  const {
    isVisible: _isVisible = true,
    colWidth: _colWidth = true,
    ...cellProps
  } = {
    colWidth,
    isVisible,
    ...headerProps,
    ...rest,
  };

  const showCell = useBreakpointValue(
    typeof _isVisible === 'object' ? _isVisible : { base: _isVisible }
  );

  const cellWidth =
    useBreakpointValue(
      typeof _colWidth === 'object' ? _colWidth : { base: _colWidth }
    ) ?? 0;

  if (!showCell) return null;

  const isWidthUnitless = /^[0-9.]+$/.test(String(cellWidth));

  return (
    <Flex
      direction="column"
      minW={!isWidthUnitless ? String(cellWidth) : 0}
      flexBasis={
        isWidthUnitless ? `${Number(cellWidth) * 100}%` : String(cellWidth)
      }
      py="2"
      px="3"
      align="flex-start"
      justifyContent="center"
      {...cellProps}
    >
      {children}
    </Flex>
  );
};

export const DataListAccordion = ({ ...rest }) => {
  return <AccordionItem border="none" {...rest} />;
};

export const DataListAccordionButton = ({ ...rest }) => {
  return (
    <AccordionButton
      role="group"
      p="0"
      textAlign="left"
      _focusVisible={{ outline: 'none' }}
      _hover={{}}
      {...rest}
    />
  );
};

export const DataListAccordionIcon = ({ ...rest }) => {
  return (
    <AccordionIcon
      borderRadius="full"
      _groupFocusVisible={{ boxShadow: 'outline' }}
      {...rest}
    />
  );
};

export const DataListAccordionPanel = ({ ...rest }) => {
  const { colorModeValue } = useDarkMode();
  return (
    <AccordionPanel
      boxShadow="inner"
      px="4"
      py="3"
      bg={colorModeValue('gray.50', 'blackAlpha.400')}
      {...rest}
    />
  );
};

export interface DataListRowProps extends FlexProps {
  isVisible?: boolean | boolean[] | Record<string, boolean>;
  isDisabled?: boolean;
}

export const DataListRow: FC<React.PropsWithChildren<DataListRowProps>> = ({
  isVisible = true,
  isDisabled = false,
  ...rest
}) => {
  const { colorModeValue } = useDarkMode();
  const { isHover } = useContext(DataListContext);
  const showRow = useBreakpointValue(
    typeof isVisible === 'object' ? isVisible : { base: isVisible }
  );
  const disabledProps: any = isDisabled
    ? {
        bg: colorModeValue('gray.50', 'whiteAlpha.50'),
        pointerEvents: 'none',
        _hover: {},
        _focusVisible: {},
        'aria-disabled': true,
        opacity: '1 !important',
        css: {
          '> *': {
            opacity: 0.3,
          },
        },
      }
    : {};
  return (
    <Flex
      display={!showRow ? 'none' : null}
      position="relative"
      borderBottom="1px solid"
      borderBottomColor={colorModeValue('gray.100', 'gray.900')}
      transition="0.2s"
      _hover={
        isHover ? { bg: colorModeValue('gray.50', 'blackAlpha.200') } : null
      }
      {...disabledProps}
      {...rest}
    />
  );
};

export type DataListHeaderProps = DataListRowProps

export const DataListHeader: FC<
  React.PropsWithChildren<DataListHeaderProps>
> = ({ ...rest }) => {
  const { colorModeValue } = useDarkMode();
  return (
    <DataListHeaderContext.Provider value={true}>
      <DataListRow
        bg={colorModeValue('gray.100', 'blackAlpha.400')}
        fontSize="sm"
        fontWeight="bold"
        color={colorModeValue('gray.600', 'gray.300')}
        border="none"
        _hover={{}}
        {...rest}
      />
    </DataListHeaderContext.Provider>
  );
};

export interface DataListPaginationRowProps extends DataListRowProps {
  isVisible?: boolean | boolean[] | Record<string, boolean>;
  isDisabled?: boolean;
  isLoadingPage?: boolean;
  setPage: (p: number) => void;
  page: number;
  pageSize?: number;
  totalItems?: number;
}

export const DataListPaginationFooter: FC<
  React.PropsWithChildren<DataListPaginationRowProps>
> = ({ isLoadingPage, setPage, page, pageSize = 15, totalItems, ...rest }) => {
  return (
    <DataListFooter {...rest}>
      <Pagination
        isLoadingPage={isLoadingPage}
        setPage={setPage}
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
      >
        <PaginationButtonFirstPage />
        <PaginationButtonPrevPage />
        <PaginationInfo flex="1" />
        <PaginationButtonNextPage />
        <PaginationButtonLastPage />
      </Pagination>
    </DataListFooter>
  );
};

export type DataListFooterProps = DataListRowProps

export const DataListFooter: FC<
  React.PropsWithChildren<DataListFooterProps>
> = ({ ...rest }) => {
  const { colorModeValue } = useDarkMode();
  return (
    <Box mt="auto">
      <Flex
        bg={colorModeValue('white', 'blackAlpha.50')}
        fontSize="sm"
        color={colorModeValue('gray.600', 'gray.300')}
        mt="-1px"
        borderTop="1px solid"
        borderTopColor={colorModeValue('gray.100', 'gray.900')}
        p="2"
        align="center"
        {...rest}
      />
    </Box>
  );
};

export interface DataListProps extends AccordionProps {
  isHover?: boolean;
}

export const DataList: FC<React.PropsWithChildren<DataListProps>> = ({
  allowMultiple = false,
  allowToggle = false,
  isHover = true,
  ...rest
}) => {
  const { colorModeValue } = useDarkMode();
  const [columns, setColumns] = useState<DataListColumns>({});
  const [listRef]: any = useAutoAnimate<HTMLDivElement>();

  return (
    <DataListContext.Provider
      value={{
        setColumns,
        columns,
        isHover,
      }}
    >
      <Accordion
        display="flex"
        flexDirection="column"
        bg={colorModeValue('white', 'blackAlpha.400')}
        position="relative"
        boxShadow="md"
        borderRadius="md"
        overflowX="auto"
        overflowY="hidden"
        minH="10rem"
        allowMultiple={allowMultiple && !allowToggle}
        allowToggle={allowToggle}
        ref={listRef}
        {...rest}
      />
    </DataListContext.Provider>
  );
};
