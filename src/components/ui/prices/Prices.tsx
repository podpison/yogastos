import { Card } from './card/Card';
import { useSelector } from 'react-redux';
import { selectPriceItems } from '../../../redux/selectors';
import { FullBg } from '../FullBg';
import cn from 'classnames';
import { Skeleton } from '../Skeleton';

type Props = {
  className: string
}

export const Prices: React.FC<Props> = ({ className }) => {
  let cards = [...useSelector(selectPriceItems)];
  let cardsInTheRightOrder = cards.sort((a, b) => Number(a.price) - Number(b.price));
  let Cards = cardsInTheRightOrder.map((c, index) => <Card {...c} key={index} />)

  return <section className={cn(className)}>
    <div className="relative text-center py-4 sm:py-7 lg:py-11">
      <FullBg />
      <h2 className="text-darkBlue">Our pricing</h2>
      <p className="textJustify text1 mt-2 sm:mt-4 lg:mt-6">Shop, stream, bank and browse the web design & dev. by an industry-leader for all your devices.</p>
    </div>
    <div className='mainPageGridContainer'>
      <Skeleton items={Cards} />
    </div>
  </section>
};