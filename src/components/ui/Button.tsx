import cn from 'classnames';
import arrowRight from './../../assets/img/ui/button/arrowRight.png';

type Props = {
  children: React.ReactNode
  className?: string
  isDarkBlue?: boolean
  arrow?: boolean
}

export const Button: React.FC<Props> = ({ children, className, isDarkBlue, arrow }) => {
  let classes = 'w-fit flex items-center rounded-2xl transition-colors py-4 px-12 justify-center max-[400px]:w-full lg:py-6' + ' ';

  if (isDarkBlue) {  
    classes = classes + 'bg-darkBlue text-white'
  } else {
    classes = classes + 'bg-orange hover:bg-orangeHover'
  }

  return <button className={cn(classes, className)}>
    {children}
    {arrow && <span><img className='w-[20px] ml-1' src={arrowRight} alt='arrow right' /></span>}
  </button>
};