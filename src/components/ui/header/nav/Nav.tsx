import { Item } from "./item/Item";
import cn from 'classnames';

type Props = {
  className: string
  onClick?: () => void
}

export const navItems = [
  {
    name: 'Pricing',
    link: 'pricing'
  },
  {
    name: 'About Us',
    link: 'aboutUs'
  },
  {
    name: 'Contact us',
    link: 'contactUs'
  },
  {
    name: 'Blog',
    link: 'blog'
  },
  {
    name: 'Careers',
    link: 'careers'
  },
];

export const Nav: React.FC<Props> = ({ className, onClick }) => {
  const Items = navItems.map((i, index) => <Item onClick={onClick} {...i} key={index} />)

  return <nav className={cn('flex title gap-x-6 lg:gap-x-9 xl:gap-x-12', className)}>
    {Items}
  </nav>
};