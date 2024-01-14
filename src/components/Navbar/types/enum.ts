import { useNavigate } from 'react-router-dom';

export const useItems = () => {
  const navigate = useNavigate();

  return [
    {
      key: 'home',
      text: 'Главная',
      onClick: () => navigate('/')
    },
    {
      key: 'products',
      text: 'Товары',
      onClick: () => navigate('/products')
    },
    {
      key: 'cart',
      text: 'Корзина',
      onClick: () => navigate('/cart')
    },
  ];
};
