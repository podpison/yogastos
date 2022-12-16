import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { InformationCardType } from '../../../redux/reducers/static';
import { formatDate } from './../../../helpers/formatDate';

type Props = {
  items: InformationCardType[]
}

export const RecentItems: React.FC<Props> = ({ items }) => {
  let { id } = useParams();
  const { pathname } = useLocation();
  
  let toBase = pathname.split('/')[1];
  let filtredItems = items.filter(i => i.id !== Number(id)).slice(-5);
  let Items = filtredItems.map((i, index) => {
    let dateToShow = formatDate(i.createdAt)

    return <Link
      className='flexCol gap-y-2 px-3 py-2 transition-colors rounded-2xl cursor-pointer hover:bg-gray-50 first:pt-5 last:pb-5 sm:py-5 sm:px-7 md:px-8 lg:px-10'
      to={`/${toBase}/${i.id}`}
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