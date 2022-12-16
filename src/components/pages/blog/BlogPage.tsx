import { useState } from "react";
import { Button } from "../../ui/Button";
import { FullBg } from "../../ui/FullBg";
import { InformationCard } from "../../ui/informationCard/InformationCard";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectBlogItems } from "../../../redux/selectors";

const itemsPerPortion = 6;

export const BlogPage: React.FC = () => {
  const [currentPortion, setCurrentPortion] = useState(0);
  let items = useSelector(selectBlogItems)

  let itemsPortion = items.slice(0, (currentPortion + 1) * itemsPerPortion);
  let Items = itemsPortion.map((i, index) => {
    return <Link to={`${i.id}`} key={index} >
      <InformationCard className='cursor-pointer transition-transform hover:scale-105' {...i} />
    </Link>
  });
  let isOnlyOnePortion = Math.floor(items.length / itemsPerPortion) === 0
  let isLastPortion = currentPortion === Math.floor(items.length / itemsPerPortion);

  return <main className="relative pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-28">
    <FullBg />
    <div className='text-center'>
      <h2 className='text-darkBlue'>Yogi Blog</h2>
      <p className='text1 mt-2 sm:mt-5'>Shop, stream, bank and browse the web design & dev. by an industry-leader for all your devices.</p>
    </div>
    <InformationCard className="grid grid-cols-1 mt-16 h-fit [&>img]:h-full [&>div]:grid-rows-[max-content_1fr_max-content_max-content] [&>img]:object-cover [&>div>p]:line-clamp-[10] sm:mt-20 md:mt-24 md:grid-cols-2 lg:mt-28 lg:grid-cols-[55%_1fr]" {...items[items.length - 1]} isBigHeading>
      <Link to={`${items.at(-1)?.id}`}>
        <Button className="mt-auto" xsmWFit arrow>Read More</Button>
      </Link>
    </InformationCard>
    <div className="mainPageGridContainer">
      {Items}
    </div>
    {((!isLastPortion && !isOnlyOnePortion) && !isOnlyOnePortion) && <Button
      className="mt-16 mx-auto sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36"
      onClick={() => setCurrentPortion(prev => prev + 1)}
      xsmWFit
    >
      Load More
    </Button>}
  </main>
};