import cn from 'classnames';
import arrowRight from './../../assets/img/ui/button/arrowRight.png';

type Props = {
  children: React.ReactNode
  className?: string
  isDarkBlue?: boolean
  arrow?: boolean
  disabled?: boolean
  xsmWFit?: boolean
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, className, isDarkBlue, arrow, disabled, xsmWFit, type, onClick }) => {
  let classes = cn('w-full flex items-center rounded-2xl transition-colors py-4 px-12 justify-center lg:py-6',
    xsmWFit && 'xsm:w-fit'
  ) + ' ';

  if (isDarkBlue) {
    classes = classes + 'bg-darkBlue text-white hover:bg-darkBlue2'
  } else {
    classes = classes + 'bg-orange hover:bg-orangeHover'
  }

  return <button className={cn(classes, className)} disabled={disabled} type={type} onClick={onClick}>
    {children}
    {arrow && <span><img className='w-[20px] ml-1' src={arrowRight} alt='arrow right' /></span>}
  </button>
};