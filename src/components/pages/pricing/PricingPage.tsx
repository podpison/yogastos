import { Hero } from "./Hero";
import { Prices } from './../../ui/prices/Prices';
import { ChooseBestSolution } from './ChooseBestSolution';

export const PricingPage: React.FC = () => {
  return <main>
    <Hero />
    <Prices className="mt-28 sm:mt-32 md:mt-36 lg:mt-48 xl:mt-60" />
    <ChooseBestSolution />
  </main>
};