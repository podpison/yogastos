import { Prices } from "../../ui/prices/Prices";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Customers } from "./components/customers/Customers";
import { Hero } from "./components/Hero";
import { Reviews } from "./components/reviews/Reviews";

export const MainPage: React.FC = () => {
  return <main>
    <Hero />
    <Customers />
    <Prices className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32" />
    <Reviews />
    <AboutUs />
  </main>
};