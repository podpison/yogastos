import { InformationCardType } from '../../../redux/reducers/static';
import cn from 'classnames';

type Props = {
  className?: string
  children?: React.ReactNode
} & InformationCardType

const gap = 'gap-2 sm:gap-3 sm:p-4 lg:gap-4'

export const InformationCard: React.FC<Props> = ({ img, heading, description, createdAt, className, children }) => {
  let dateToShow = new Date(createdAt * 1000).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return <div
    className={cn(`flexCol shadow-pinkShadow flex-1 h-full p-3 bg-white text-darkBlue rounded-2xl ${gap}`,
      className
    )}
  >
    <img className="w-full h-max rounded-lg" src={img} alt='news' />
    <div className={`${gap} h-full grid grid-rows-[max-content_1fr_max-content]`}>
      <h6 className="">{heading}</h6>
      <p className="text1 line-clamp-5">{description}</p>
      {children}
      <time className="block mt-auto text-grey text-sm sm:text-base">{dateToShow}</time>
    </div>
  </div>
};