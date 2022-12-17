import { Link, useParams } from "react-router-dom";
import { NotFoundPage } from "../notFound/NotFoundPage";
import cn from 'classnames';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { BlogItemContentType } from "../../../redux/reducers/static";
import { formatDate } from './../../../helpers/formatDate';
import { InformationPageBase } from './../../ui/informationPageBase/InformationPageBase';
import arrowLeft from './../../../assets/img/icons8-arrowLeft.png';
import { selectBlogItems } from "../../../redux/selectors";
import { ArrowBack } from "../../ui/ArrowBack";
import { InformationItemPageBase } from "../../ui/InformationItemPageBase";

const isContentItemString = (i: BlogItemContentType): i is string => {
  return typeof i === 'string';
}

const textImgClasses = 'rounded-2xl w-full bg-no-repeat bg-[length:100%] min-h-[200px] sm:min-h-[350px] lg:min-h-full'

export const BlogPageItem: React.FC = () => {
  let { id } = useParams();
  let items = useSelector(selectBlogItems)

  let currentItem = items.find(i => i.id === Number(id));
  let dateToShow = formatDate(currentItem?.createdAt)
  let content = currentItem?.content.map((i, index) => {
    if (isContentItemString(i)) {
      return <p className="text1 text-justify" key={index}>{i}</p>
    } else {
      return <div className={cn('grid gap-x-6 gap-y-3 grid-cols-1', i.position === 'right' ? 'lg:grid-cols-[1fr_40%]' : 'lg:grid-cols-[40%_1fr]')} key={index}>
        {i.position === 'left' && <div className={`${textImgClasses} mr-auto`} style={{ backgroundImage: `url(${i.src})` }} />}
        <p className="text1 text-justify">{i.text}</p>
        {i.position === 'right' && <div className={`${textImgClasses} ml-auto`} style={{ backgroundImage: `url(${i.src})` }} />}
      </div>
    }
  })

  return <InformationPageBase
    heading="Yogi Blog Post"
    headingDescription="Shop, stream, bank and browse the web design & dev. by an industry-leader for all your devices."
    isNotFoundPage={!currentItem}
    hero={currentItem?.img}
    recentItems={items}
  >
    <InformationItemPageBase
      to="/blog"
      dateToShow={dateToShow}
      heading={currentItem?.heading}
    >
      {content}
    </InformationItemPageBase>
  </InformationPageBase>
};