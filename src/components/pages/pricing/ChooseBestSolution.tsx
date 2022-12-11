import { Button } from "../../ui/Button";
import img1 from './../../../assets/img/pages/price/chooseBestSolution.webp';
import { FullBg } from './../../ui/FullBg';
import decor1 from './../../../assets/img/pages/price/decor/1.webp';

export const ChooseBestSolution: React.FC = () => {
  return <section className="relative mt-20 py-4 sm:py-6 sm:mt-24 md:py-8 md:mt-28 lg:mt-32 lg:pb-32 xl:pb-36 xl:pt-9 xl:mt-36">
    <FullBg />
    <img className="absolute right-0 top-0 h-[95%] -z-10" src={decor1} alt='decor 1' />
    <p className="bigText lg:w-3/4">Not sure which solution is best for you?</p>
    <div className="flexCol gap-y-10 sm:gap-y-14 lg:flex-row lg:gap-x-6">
      <div className="flexCol gap-y-5 sm:gap-y-8 lg:gap-y-12">
        <div className="bg-grey w-2/5 h-0.5 mt-5 sm:mt-8 lg:mt-12" />
        <p className="text1 max-lg:text-justify">Don`t worry, we can help match you to your perfect brand & product solution in just 30 seconds.</p>
        <Button className="" xsmWFit>Help Me Choose</Button>
      </div>
      <img src={img1} alt='we`re helping to find the best solution' />
    </div>
  </section>
};