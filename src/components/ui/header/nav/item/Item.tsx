import './item.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  name: string
  link: string
}

export const Item: React.FC<Props> = ({ name, link }) => {
  return <NavLink
    className={({ isActive }) => cn('nav__nav-item relative transition-colors group hover:text-orange', isActive && 'nav__nav-item_active')}
    to={link}
  >
    {name}
    <div className='nav__underline absolute left-1/2 transform transition-colors -translate-x-2/4 bg-transparent h-0.5 w-4/6 group-hover:bg-orange' />
  </NavLink>
};