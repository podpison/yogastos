import starImg from './../../../../../assets/img/pages/main/star.svg';
import disabledStarImg from './../../../../../assets/img/pages/main/disabledStar.svg';

type Props = {
  count: number
}

export const Stars: React.FC<Props> = ({ count }) => {
  //@ts-ignore
  let countArray = Array.apply(null, {length: count}).map(Number.call, Number);
  let Stars = countArray.map((i, index) => <img key={index} src={starImg} alt='star' />);
  //@ts-ignore
  let disabledStarsArray = Array.apply(null, {length: 5 - count}).map(Number.call, Number);
  let DisabledStars = disabledStarsArray.map((i, index) => <img key={index} src={disabledStarImg} alt='disabled star' />)

  return <div className='flex justify-center gap-1'>
    {Stars}
    {DisabledStars}
  </div>
};