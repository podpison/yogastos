import { formatDate } from '../../../../helpers/formatDate';
import { fakeItems } from './../BlogPage';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const RecentItems: React.FC = () => {
  let { bid } = useParams();

  let items = fakeItems.filter(i => i.id !== Number(bid)).slice(-5);
  let Items = items.map((i, index) => {
    let dateToShow = formatDate(i?.createdAt)

    return <Link
      className='flexCol gap-y-2 px-3 py-2 transition-colors rounded-2xl cursor-pointer hover:bg-gray-50 first:pt-5 last:pb-5 sm:py-5 sm:px-7 md:px-8 lg:px-10'
      to={`/blog/${i.id}`}
      key={index}
    >
      <time className='text1'>{dateToShow}</time>
      <p className='text1 font-bold'>{i.heading}</p>
    </Link>
  })

  return <div className='flexCol bg-white shadow-pinkShadow h-fit rounded-2xl'>
    {Items}
  </div>
};