import { CareerItemContentType } from "../../../../redux/reducers/static";
import cn from 'classnames';

type Props = {
  disableDots?: boolean
} & CareerItemContentType

export const Item: React.FC<Props> = ({ heading, items, disableDots = false }) => {
  let Items = items.map((i, index) => <li className='text1' key={index}>{i}</li>);

  return <div className=''>
    <h5 className='text-start'>{heading}</h5>
    <ul className={cn('flexCol mt-7 gap-y-1', !disableDots && 'list-disc pl-6')}>
      {Items}
    </ul>
  </div>
};