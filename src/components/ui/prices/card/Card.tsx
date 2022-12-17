import { PriceItemType } from "../../../../redux/reducers/static";
import { Button } from "../../Button";
import { Advantage } from "./Advantage";

type Props = {

} & PriceItemType

export const Card: React.FC<Props> = ({ advantages, description, name, price }) => {
  const Advantages = advantages.map((a, index) => <Advantage name={a} key={index} />)

  return <div className="flexCol text-center h-fit bg-white shadow-pinkShadow px-3 py-5 rounded-2xl sm:last:mt-[-125px] lg:last:mt-[-180px] lg:px-12 xl:last:mt-0">
    <h6><span className="text-darkBlue">${price}</span><small className='text-base lg:text-xl'>/hr</small></h6>
    <h5 className="mt-3 text-orange lg:mt-5">{name}</h5>
    <p className="mt-5">{description}</p>
    <div className="w-full h-0.5 bg-[#F2F2F2] my-5" />
    <div className="flex justify-center">
      <ul className="flexCol items-flex-start gap-3 lg:gap-5">
        {Advantages}
      </ul>
    </div>
    <Button className='mt-7 py-4 px-6 w-full justify-center lg:py-7'>Buy now</Button>
  </div>
};