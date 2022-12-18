import { useStaticItems } from '../../../../../hooks/useStaticItems';
import { FullBg } from './../../../../ui/FullBg';
import { Review } from './Review';
import { useSelector } from 'react-redux';
import { selectReviewItems } from '../../../../../redux/selectors';
import { Skeleton } from '../../../../ui/Skeleton';

export const Reviews: React.FC = () => {
  useStaticItems('reviews');

  let reviews = useSelector(selectReviewItems);
  let Reviews = reviews.map((r, index) => <Review {...r} key={index} />);

  return <section className='mt-24 md:mt-28 lg:mt-32 xl:mt-36'>
    <div className='relative py-6 text-center'>
      <FullBg />
      <h2 className='text-darkBlue'>Our Happy Customers</h2>
    </div>
    <div className='mainPageGridContainer'>
      <Skeleton items={Reviews} />
    </div>
  </section>
};