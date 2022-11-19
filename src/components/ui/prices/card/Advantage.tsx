import acceptImg from './../../../../assets/img/ui/button/accept.svg';

type Props = {
  name: React.ReactNode
}

export const Advantage: React.FC<Props> = ({ name }) => {
  return <li className="flex items-center gap-3 lg:gap-5">
    <div className="flex items-center w-[30px] h-[30px] bg-darkBlue rounded-full lg:w-[40px] lg:h-[40px]">
      <img className='m-auto w-3/5 lg:h-full' src={acceptImg} alt='accept' />
    </div>
    <p className="text-darkBlue tracking-normal text-lg font-medium lg:text-xl whitespace-nowrap">{name}</p>
  </li>
};