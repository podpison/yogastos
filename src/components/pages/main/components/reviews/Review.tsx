import { ReviewsItemType } from '../../../../../redux/reducers/static';
import { Stars } from './Stars';

type Props = {
  
} & ReviewsItemType

export const Review: React.FC<Props> = ({ description, heading, stars, user }) => {
  return <div className="flexCol gap-4 text-center justify-center shadow-pinkShadow rounded-2xl sm:last:col-span-2 xl:last:col-auto px-3 py-6 lg:gap-7 lg:py-10 lg:px-5">
    <strong className="text-2xl font-semibold text-darkBlue">{heading}</strong>
    <p className="text-lg px-6">"{description}"</p>
    <Stars count={stars} />
    <small className="text-[15px] text-darkBlue2">By {user}</small>
  </div>
};