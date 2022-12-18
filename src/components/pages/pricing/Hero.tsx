import { HeroBase } from '../../ui/HeroBase';
import hero from './../../../assets/img/pages/price/hero.webp';

export const Hero: React.FC = () => {
  return <HeroBase
    heading='Keeping It All Together'
    description='Enjoy special design, development & advertising offers from Google, Microsoft Advertising, and other leading sites to help grow your business, - Start Today.'
    heroImg={hero}
    isChildrenToBottom={false}
  >
    <p className='bg-orange w-fit text-white font-bold rounded-[10px] py-2.5 px-4 sm:text-lg md:py-3.5 md:px-8 min-lg:text-justify xl:px-14'>Monthly Assistance - Get up to 40% off</p>
  </HeroBase>
};