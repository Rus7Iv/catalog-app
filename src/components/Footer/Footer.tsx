import { Stack, Text } from '@fluentui/react';
import './styles/Footer.styles.css';
import { Organisation, Year } from './types/constants';

const Footer = () => {
  return (
    <Stack horizontalAlign="center" verticalAlign="center" className="footer">
      <Text variant="medium">{Year} {Organisation}</Text>
    </Stack>
  );
};

export default Footer;
