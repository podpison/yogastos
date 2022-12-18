import facebook from './../../../assets/img/ui/footer/facebook.svg';
import twitter from './../../../assets/img/ui/footer/twitter.svg';
import instagram from './../../../assets/img/ui/footer/instagram.svg';
import youtube from './../../../assets/img/ui/footer/youtube.svg';
import { Column } from './Colum';
import { SocialNetowrk } from './SocialNetwork';
import { navItems } from '../header/nav/Nav';

const ContactColumnItems = [
  {
    name: 'Terms of Use',
    link: 'https://policies.google.com/terms?hl=en-US'
  },
  {
    name: 'Privacy Policy',
    link: 'https://policies.google.com/privacy?hl=en-US'
  },
  {
    name: 'F.A.Q',
    link: 'https://policies.google.com/faq?hl=en-US'
  }
];

export const Footer: React.FC = () => {
  let currentYear = new Date().getFullYear();

  return <footer className='flexCol gap-y-8 py-10 sm:flex-row sm:justify-between'>
    <div className='flex flex-wrap gap-y-4 max-sm:justify-between'>
      <Column heading='Company' items={navItems} />
      <Column className='sm:ml-20 md:ml-32 lg:ml-40 xl:ml-52' heading='Contact' items={ContactColumnItems} isOutside />
    </div>
    <div className='flex flex-wrap gap-y-3 justify-between items-end sm:flex-col-reverse'>
      <p className='text-lg text-darkBlue font-bold'>{currentYear} Yogi.com</p>
      <nav className='flex gap-x-3 md:gap-x-5 lg:gap-x-7'>
        <SocialNetowrk src={facebook} href='https://www.facebook.com/' alt='facebook' />
        <SocialNetowrk src={twitter} href='https://twitter.com/' alt='twitter' />
        <SocialNetowrk src={instagram} href='https://www.instagram.com/' alt='instagram' />
        <SocialNetowrk src={youtube} href='https://www.youtube.com/' alt='youtube' />
      </nav>
    </div>
  </footer>
};