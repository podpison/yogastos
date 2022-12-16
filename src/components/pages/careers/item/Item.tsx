import { CareerItemType } from "../../../../redux/reducers/static";
import { Button } from "../../../ui/Button";
import { InformationCard } from "../../../ui/informationCard/InformationCard";
import { Subitem } from "./Subitem";

export const Item: React.FC<CareerItemType> = ({ createdAt, img, name, preview, id }) => {
  let { goodToHave, jobDescription, perks, requirements, responsibilities } = preview;

  return <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr] lg:grid-cols-[30%_1fr]">
    <InformationCard
      createdAt={createdAt}
      heading={name}
      img={img}
      id={id}
      isChildrenToBottom
    >
      <p className='w-full flex items-center text-white rounded-2xl shadow-pinkShadow py-4 px-12 justify-center bg-orange lg:py-6'>New</p>
    </InformationCard>
    <div className="flexCol bg-white rounded-2xl shadow-pinkShadow gap-y-5 p-4">
      <Subitem description={jobDescription} heading="Job Description" />
      <Subitem description={responsibilities} heading="Responsibilities" />
      <Subitem description={requirements} heading="Requirements" />
      <Subitem description={goodToHave} heading="Good to have" />
      <Subitem description={perks} heading="Perks" />
      <Button className="ml-auto" xsmWFit isDarkBlue>Read more</Button>
    </div>
  </div>
};