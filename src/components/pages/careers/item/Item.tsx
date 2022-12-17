import { CareerItemType } from "../../../../redux/reducers/static";
import { Button } from "../../../ui/Button";
import { InformationCard } from "../../../ui/informationCard/InformationCard";
import { Subitem } from "./Subitem";
import { useRef, useState, useEffect } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export const Item: React.FC<CareerItemType> = ({ createdAt, heading, preview, id }) => {
  let { goodToHave, jobDescription, perks, requirements, responsibilities, img } = preview;

  const [infoHeight, setInfoHeight] = useState(0);
  let infoRef = useRef<HTMLDivElement | null>(null);
  let infoHeightClass = infoHeight ? `${infoHeight}px` : 'none'

  useEffect(() => {
    let height = infoRef.current
    if (height && window.innerWidth >= 1024) {
      setInfoHeight(height.clientHeight)
    }
  }, [infoRef.current])


  return <div className="grid grid-cols-1 gap-4 md:grid-cols-[40%_1fr] lg:grid-cols-[30%_1fr]">
    <InformationCard
      className={cn(`grid [&>img]:object-cover [&>img]:h-full [&>div]:pb-0 [&>div>h6]:line-clamp-4 lg:grid-rows-[57%_40%]`)}
      style={{maxHeight: infoHeightClass}}
      createdAt={createdAt}
      heading={heading}
      img={img}
      id={id}
      isChildrenToBottom
    >
      <p className='w-full flex items-center text-white rounded-2xl shadow-pinkShadow py-4 px-12 justify-center bg-orange lg:py-6'>New</p>
    </InformationCard>
    <div ref={infoRef} className="flexCol bg-white rounded-2xl h-fit shadow-pinkShadow gap-y-5 p-4">
      <Subitem description={jobDescription} heading="Job Description" />
      <Subitem description={responsibilities} heading="Responsibilities" />
      <Subitem description={requirements} heading="Requirements" />
      <Subitem description={goodToHave} heading="Good to have" />
      <Subitem description={perks} heading="Perks" />
      <Link to={`${id}`}>
        <Button className="ml-auto" xsmWFit isDarkBlue>Read more</Button>
      </Link>
    </div>
  </div>
};