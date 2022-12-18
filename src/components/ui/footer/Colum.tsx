import { Link } from "react-router-dom";
import cn from 'classnames';
import { navItems } from "../header/nav/Nav";

type Props = {
  heading: string
  items: typeof navItems
  className?: string
  isOutside?: boolean //the isOutside props means that the link is going to lead to another website
}

export const Column: React.FC<Props> = ({ heading, items, className, isOutside }) => {
  let Items = items.map((i, index) => {
    if (isOutside) {
      return <a className="text-orange transition-colors hover:text-orangeHover" href={`${i.link}`} target='_blank' rel='noreferrer' key={index}>{i.name}</a>
    }

    return <Link className="text-orange transition-colors hover:text-orangeHover" to={`/${i.link}`} key={index}>{i.name}</Link>
  })

  return <div className={cn(className)}>
    <h3 className="text-darkBlue font-semibold text-start">{heading}</h3>
    <div className="flexCol font-semibold text-lg gap-y-1 mt-4 xl:gap-y-4 xl:mt-9">
      {Items}
    </div>
  </div>
};