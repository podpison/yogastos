import { Button } from '../../ui/Button';
import { HeroBase } from './../../ui/HeroBase';
import hero from './../../../assets/img/pages/aboutUs/hero.webp';

export const Hero: React.FC = () => {
  return <HeroBase
    heading='About Yogi'
    description='We free and empower consumers and families to confidently enjoy life online.'
    heroImg={hero}
    decor
  >
    <Button>Corporate Fact Sheet</Button>
  </HeroBase>
};