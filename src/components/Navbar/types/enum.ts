// export const items = [
//   {
//     key: 'home',
//     text: 'Главная',
//     iconProps: { iconName: 'Home' },
//   },
//   {
//     key: 'products',
//     text: 'Товары',
//     iconProps: { iconName: 'Shop' },
//   },
//   {
//     key: 'cart',
//     text: 'Корзина',
//     iconProps: { iconName: 'ShoppingCart' },
//   },
// ];


import { useNavigate } from 'react-router-dom';

export const useItems = () => {
  const navigate = useNavigate();

  return [
    {
      key: 'home',
      text: 'Главная',
      iconProps: { iconName: 'Home' },
      onClick: () => navigate('/')
    },
    {
      key: 'products',
      text: 'Товары',
      iconProps: { iconName: 'Shop' },
      onClick: () => navigate('/products')
    },
    {
      key: 'cart',
      text: 'Корзина',
      iconProps: { iconName: 'ShoppingCart' },
      onClick: () => navigate('/cart')
    },
  ];
};
