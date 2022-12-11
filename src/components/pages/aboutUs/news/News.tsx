import { useSelector } from "react-redux";
import { useStaticItems } from "../../../../hooks/useStaticItems";
import { selectNewsItems } from "../../../../redux/selectors";
import { FullBg } from "../../../ui/FullBg";
import { Item } from "./Item";

export const News: React.FC = () => {
  useStaticItems('news');

  let items = [...useSelector(selectNewsItems)].sort((a, b) => a.createdAt - b.createdAt); //date sort
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <section className='relative mt-10 pt-7 pb-14 sm:mt-15 sm:pt-10 md:pb-16 lg:mt-20 lg:pt-14 lg:pb-20 xl:pb-28'>
    <FullBg />
    <h2 className='text-center text-darkBlue'>What’s happening at Yogi?</h2>
    <div className="grid grid-cols-1 items-start gap-5 mt-10 sm:grid-cols-2 sm:mt-15 sm:gap-7 lg:mt-20 lg:gap-10 lg:grid-cols-3 ">
      {Items}
    </div>
  </section>
};