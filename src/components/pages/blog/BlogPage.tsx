import { useState } from "react";
import { Button } from "../../ui/Button";
import { FullBg } from "../../ui/FullBg";
import { InformationCard } from "../../ui/informationCard/InformationCard";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectBlogItems } from "../../../redux/selectors";
import { Pagination } from "../../ui/Pagination";
import { getItemsPortion } from "../../../helpers/getItemsPortion";
import { useScrollTop } from './../../../hooks/useScrollTop';
import { Skeleton } from "../../ui/Skeleton";

const itemsPerPortion = 6;

export const BlogPage: React.FC = () => {
  useScrollTop();
  const [currentPortion, setCurrentPortion] = useState(0);
  let items = useSelector(selectBlogItems)

  let itemsPortion = getItemsPortion(items, currentPortion, itemsPerPortion);
  let Items = itemsPortion.map((i, index) => {
    return <Link to={`${i.id}`} key={index} >
      <InformationCard className='cursor-pointer transition-transform hover:scale-105' {...i} />
    </Link>
  });

  let LastPost = <InformationCard className="grid grid-cols-1 mt-16 h-fit [&>img]:h-full [&>div]:grid-rows-[max-content_1fr_max-content_max-content] [&>img]:object-cover [&>div>p]:line-clamp-[10] sm:mt-20 md:mt-24 md:grid-cols-2 lg:mt-28 lg:grid-cols-[55%_1fr]" {...items[items.length - 1]} isBigHeading key='0'>
    <Link to={`${items.at(-1)?.id}`}>
      <Button className="mt-auto" xsmWFit arrow>Read More</Button>
    </Link>
  </InformationCard>
  let lastPostItemToArray = items.length ? [LastPost] : [];

  return <main className="relative pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-28">
    <FullBg />
    <div className='text-center'>
      <h2 className='text-darkBlue'>Yogi Blog</h2>
      <p className='text1 mt-2 sm:mt-5'>Shop, stream, bank and browse the web design & dev. by an industry-leader for all your devices.</p>
    </div>
    <Skeleton count={1} items={lastPostItemToArray} />
    <div className="mainPageGridContainer">
      <Skeleton count={itemsPerPortion} items={Items} />
    </div>
    <Pagination itemsLength={items.length} currentPortion={currentPortion} setCurrentPortion={setCurrentPortion} itemsPerPortion={itemsPerPortion} />
  </main>
};