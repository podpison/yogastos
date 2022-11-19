import { Link } from "react-router-dom";
import cn from 'classnames';

type Props = {
  heading: string
  items: string[]
  className?: string
}

export const Column: React.FC<Props> = ({ heading, items, className }) => {
  let Items = items.map((i, index) => <Link className="text-orange" to={`/${i}`} key={index}>{i}</Link>)

  return <div className={cn(className)}>
    <h3 className="text-darkBlue font-semibold">{heading}</h3>
    <div className="flexCol font-semibold text-lg gap-y-1 mt-4 xl:gap-y-4 xl:mt-9">
      {Items}
    </div>
  </div>
};