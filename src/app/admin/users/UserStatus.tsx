import { useTranslation } from 'react-i18next';
import { FiCheck, FiX } from 'react-icons/fi';

import { Icon } from '@/components/Icons';
import { Badge, Box } from '@chakra-ui/react';

export const UserStatus = ({ isActivated = false, ...rest }) => {
  const { t } = useTranslation('users');
  return isActivated ? (
    <Badge size="sm" colorScheme="success" {...rest}>
      <Box as="span" display={{ base: 'none', md: 'block' }}>
        {t('users:data.status.activated')}
      </Box>
      <Icon icon={FiCheck} aria-label={t('users:data.status.activated')} display={{ base: 'inline-flex', md: 'none' }} />
    </Badge>
  ) : (
    <Badge size="sm" colorScheme="warning" {...rest}>
      <Box as="span" display={{ base: 'none', md: 'block' }}>
        {t('users:data.status.deactivated')}
      </Box>
      <Icon icon={FiX} aria-label={t('users:data.status.deactivated')} display={{ base: 'inline-flex', md: 'none' }} />
    </Badge>
  );
};
