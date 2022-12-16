import { useEffect } from "react";
import { FullBg } from './../FullBg';
import { NotFoundPage } from './../../pages/notFound/NotFoundPage';
import { RecentItems } from "./RecentItems";
import { InformationCardType } from "../../../redux/reducers/static";
import cn from 'classnames';

type Props = {
  heading: string
  headingDescription: string
  isNotFoundPage?: boolean
  hero: string | undefined
  children: React.ReactNode
  recentItems?: InformationCardType[]
  heroSign?: string
}

export const InformationPageBase: React.FC<Props> = ({ heading, headingDescription, hero, isNotFoundPage, children, recentItems, heroSign }) => {

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('body')?.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }, 20)
  }, []);

  if (isNotFoundPage) return <NotFoundPage />

  return <main className="relative pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-28">
    <FullBg />
    <div className='text-center'>
      <h2 className='text-darkBlue'>{heading}</h2>
      <p className='text1 mt-2 sm:mt-5'>{headingDescription}</p>
    </div>
    <div className="relative bg-white rounded-2xl shadow-pinkShadow p-2 mt-16 sm:mt-20 sm:p-3 md:p-4 md:mt-24 lg:p-5 lg:mt-28">
      <img className='w-full max-h-[600px] object-cover rounded-2xl' src={hero} alt='hero' />
      <h4 className="absolute bottom-[8%] left-[5%] text-white w-min max-w-[200px]">{heroSign}</h4>
    </div>
    <div className={cn("text-darkBlue grid grid-cols-1 mt-5 gap-7 sm:mt-6 sm:gap-10 md:mt-10 md:gap-14", recentItems && 'lg:grid-cols-[1fr_30%]')}>
      {children}
      {recentItems && <RecentItems items={recentItems} />}
    </div>
  </main>
};