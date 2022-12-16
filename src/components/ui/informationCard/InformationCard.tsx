import { InformationCardType } from '../../../redux/reducers/static';
import cn from 'classnames';
import { formatDate } from '../../../helpers/formatDate';

type Props = {
  className?: string
  children?: React.ReactNode
  isBigHeading?: boolean
  description?: string
  isChildrenToBottom?: boolean
} & Omit<InformationCardType, 'description'>

const gap = 'gap-2 sm:gap-3 sm:p-4 lg:gap-4'

export const InformationCard: React.FC<Props> = ({ img, heading, description, createdAt, className, children, isBigHeading, isChildrenToBottom }) => {
  let dateToShow = formatDate(createdAt)

  return <div
    className={cn(`flexCol shadow-pinkShadow flex-1 h-full p-3 bg-white text-darkBlue rounded-2xl ${gap}`,
      className
    )}
  >
    <img className="w-full h-max rounded-lg" src={img} alt='news' />
    <div className={`${gap} h-full grid grid-rows-[max-content_1fr_max-content]`}>
      {isBigHeading ? <h4 className="text-start line-clamp-2">{heading}</h4> : <h6 className="text-start line-clamp-2">{heading}</h6>}
      {description && <p className="text1 line-clamp-5 text-start">{description}</p>}
      {!isChildrenToBottom && children}
      <time className="block mt-auto text-grey text-sm sm:text-base">{dateToShow}</time>
      {isChildrenToBottom && children}
    </div>
  </div>
};