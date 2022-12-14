import { Link, useParams } from "react-router-dom";
import { formatDate } from "../../../../helpers/formatDate";
import { BlogItemContentType } from "../../../../redux/reducers/static";
import { FullBg } from "../../../ui/FullBg";
import { NotFoundPage } from "../../notFound/NotFoundPage";
import { fakeItems } from "../BlogPage";
import cn from 'classnames';
import { RecentItems } from './RecentItems';
import arrowLeft from './../../../../assets/img/icons8-arrowLeft.png';
import { useLayoutEffect } from "react";

const isContentItemString = (i: BlogItemContentType): i is string => {
  return typeof i === 'string';
}

export const BlogPageItem: React.FC = () => {
  let { bid } = useParams();

  let currentItem = fakeItems.find(i => i.id === Number(bid));
  let dateToShow = formatDate(currentItem?.createdAt)
  let content = currentItem?.content.map((i, index) => {
    if (isContentItemString(i)) {
      return <p className="text1 text-justify" key={index}>{i}</p>
    } else {
      return <div className={cn('grid gap-x-6 grid-cols-1', i.position === 'right' ? 'lg:grid-cols-[1fr_40%]' : 'lg:grid-cols-[40%_1fr]')} key={index}>
        {i.position === 'left' && <div className='mr-auto rounded-2xl w-full' style={{ backgroundImage: `url(${i.src})` }} />}
        <p className="text1 text-justify">{i.text}</p>
        {i.position === 'right' && <div className='ml-auto rounded-2xl w-full' style={{ backgroundImage: `url(${i.src})` }} />}
      </div>
    }
  })

  useLayoutEffect(() => {
    if (currentItem) {
      setTimeout(() => {
        window.scrollTo({ top: 10, behavior: 'smooth' })
      }, 20)
    }
  }, [])

  if (!currentItem) return <NotFoundPage />

  return <main className="relative pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-28">
    <FullBg />
    <div className='text-center'>
      <h2 className='text-darkBlue'>Yogi Blog Post</h2>
      <p className='text1 mt-2 sm:mt-5'>Shop, stream, bank and browse the web design & dev. by an industry-leader for all your devices.</p>
    </div>
    <div className="bg-white rounded-2xl shadow-pinkShadow p-2 mt-16 sm:mt-20 sm:p-3 md:p-4 md:mt-24 lg:p-5 lg:mt-28">
      <img className='w-full max-h-[600px] object-cover rounded-2xl' src={currentItem?.img} alt='blog post' />
    </div>
    <div className="text-darkBlue grid grid-cols-1 mt-5 gap-7 sm:mt-6 sm:gap-10 md:mt-10 md:gap-14 lg:grid-cols-[1fr_30%]">
      <div className="">
        <Link className="text1 flex items-center gap-x-2 cursor-pointer w-fit transition-colors border-b-2 border-transparent hover:border-darkBlue" to='/blog'>
          <img src={arrowLeft} alt='arrow left' />
          <p className="">Go Back</p>
        </Link>
        <time className="text1 block mt-4 sm:mt-7 md:mt-9">{dateToShow}</time>
        <h2 className='mt-4'>{currentItem?.heading}</h2>
        <div className="flexCol gap-y-4 mt-6 sm:gap-y-7 sm:mt-10 lg:mt-12">
          {content}
        </div>
      </div>
      <RecentItems />
    </div>
  </main>
};