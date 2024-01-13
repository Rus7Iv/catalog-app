import { Text, Stack } from '@fluentui/react';
import './styles.css';

const HomePage = () => {
  return (
    <Stack horizontalAlign="center" verticalAlign="center" className="homePage">
      <Text variant="xxLarge">Добро пожаловать на наш сайт!</Text>
      <Text variant="large">Здесь вы найдете лучшие товары по лучшим ценам.</Text>
    </Stack>
  );
};

export default HomePage;
