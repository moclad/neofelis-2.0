import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronDown, FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import { useAccount } from '@/app/account/account.service';
import { ClassificationNav } from '@/app/classification/ClassificationNav';
import { Page, PageBottomBar, PageContent } from '@/app/layout';
import { ActionsButton, ConfirmMenuItem } from '@/components';
import {
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tag,
  TagLabel,
  Wrap,
  WrapItem
} from '@chakra-ui/react';

export const PageLabels = () => {
  const { t } = useTranslation();
  const { loading, data } = useAccount();

  return (
    <Page nav={<ClassificationNav />}>
      <PageContent
        loading={loading}
        title={t('classification:labels.title')}
        actions={[
          <Button leftIcon={<FiPlus />} variant="@primary">
            {t('classification:labels.actions.create')}
          </Button>,
        ]}
      >
        <Wrap spacing="8px">
          {[
            'test',
            'test1',
            'alsdjk asd',
            '1',
            'beno1',
            'beno2',
            'beno3',
            'beno4',
            'beno5',
            'beno6',
            'beno7',
            'beno8',
            'beno9',
            'beno10  ',
            '11',
            'beno11',
            'beno12',
            'beno13',
            'beno14',
            'beno15',
            'beno16',
            'beno17',
            'beno18',
            'beno19',
            'beno110  ',
          ].map((label) => (
            <WrapItem key={label}>
              <Tag size={'md'} variant="outline">
                <TagLabel>{label}</TagLabel>
                <Menu isLazy>
                  <MenuButton as={ActionsButton} size="sm" ml="8px" />
                  <MenuList>
                    <MenuItem icon={<FiEdit />}>
                      {t('classification:labels.actions.edit')}
                    </MenuItem>
                    <MenuDivider />
                    <ConfirmMenuItem
                      icon={<FiTrash2 />}
                      onClick={() => {
                        alert('Action');
                      }}
                    >
                      {t('classification:labels.actions.delete')}
                    </ConfirmMenuItem>
                  </MenuList>
                </Menu>
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </PageContent>
    </Page>
  );
};
