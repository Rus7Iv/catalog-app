import { Link } from 'react-router-dom';
import './styles.css';

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <h1>Данной страницы не существует</h1>
      <Link to="/" className='home-link'>Перейти на главную страницу</Link>
    </div>
  );
};

export default ErrorPage;
