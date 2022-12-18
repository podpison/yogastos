import { Hero } from "./Hero";
import { Prices } from './../../ui/prices/Prices';
import { ChooseBestSolution } from './ChooseBestSolution';
import { useScrollTop } from "../../../hooks/useScrollTop";

export const PricingPage: React.FC = () => {
  useScrollTop();

  return <main>
    <Hero />
    <Prices className="mt-28 sm:mt-32 md:mt-36 lg:mt-48 xl:mt-60" />
    <ChooseBestSolution />
  </main>
};