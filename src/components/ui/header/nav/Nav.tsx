import { Item } from "./item/Item";
import cn from 'classnames';

type Props = {
  className: string
}

const items = [
  {
    name: 'Pricing',
    link: 'pricing'
  },
  {
    name: 'About Us',
    link: 'aboutUs'
  },
  {
    name: 'Contact',
    link: 'contact'
  },
];

export const Nav: React.FC<Props> = ({ className }) => {
  const Items = items.map((i, index) => <Item {...i} key={index} />)

  return <nav className={cn('flex title gap-x-6 lg:gap-x-9 xl:gap-x-12', className)}>
    {Items}
  </nav>
};