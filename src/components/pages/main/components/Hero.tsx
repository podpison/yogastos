import { Button } from '../../../ui/Button';
import hero from './../../../../assets/img/pages/main/hero.webp';
import { HeroBase } from '../../../ui/HeroBase';

export const Hero: React.FC = () => {
  return <HeroBase
    heading='Keeping It All Together'
    description='Enjoy special design, development & advertising offers from Google, Microsoft Advertising, and other leading sites to help grow your business, - Start Today.'
    heroImg={hero}
  >
    <div className='flexCol gap-y-2 sm:flex-row sm:items-center sm:gap-x-5'>
      <Button className='bg-orange' arrow xsmWFit>Try for free</Button>
      <p className='title2 text-orange'>* No credit card required</p>
    </div>
  </HeroBase>
};