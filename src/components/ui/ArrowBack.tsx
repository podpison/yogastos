import { Link } from 'react-router-dom';
import arrowLeft from './../../assets/img/icons8-arrowLeft.png';

type Props = {
  to: string
}

export const ArrowBack: React.FC<Props> = ({ to }) => {
  return <Link className="text1 flex items-center gap-x-2 cursor-pointer w-fit transition-colors border-b-2 border-transparent hover:border-darkBlue" to={to}>
    <img src={arrowLeft} alt='arrow left' />
    <p className="">Go Back</p>
  </Link>
};