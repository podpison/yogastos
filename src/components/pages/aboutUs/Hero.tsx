import { Button } from '../../ui/Button';
import { HeroBase } from './../../ui/HeroBase';
import hero from './../../../assets/img/pages/aboutUs/hero.webp';
import { HashLink } from 'react-router-hash-link';

export const Hero: React.FC = () => {
  return <HeroBase
    heading='About Yogi'
    description='We free and empower consumers and families to confidently enjoy life online.'
    heroImg={hero}
    decor
  >
    <HashLink
      to="#news"
      smooth
    >
      <Button xsmWFit>Corporate Fact Sheet</Button>
    </HashLink>
  </HeroBase>
};