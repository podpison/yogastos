import { Link } from 'react-router-dom';
import logo from './../../../assets/img/logo.svg';

export const Logo: React.FC = () => {
  return <Link className='transition-opacity hover:opacity-90' to='/'>
    <img className="w-fit" src={logo} alt='logo' />
  </Link>
};