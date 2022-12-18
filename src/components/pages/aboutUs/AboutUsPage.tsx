import { Hero } from "./Hero";
import { News } from "./news/News";
import { useScrollTop } from './../../../hooks/useScrollTop';

export const AboutUsPage: React.FC = () => {
  useScrollTop();

  return <main>
    <Hero />
    <News />
  </main>
};