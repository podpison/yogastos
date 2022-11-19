import meta from './../../../assets/img/ui/footer/meta.svg';
import twitter from './../../../assets/img/ui/footer/twitter.svg';
import instagram from './../../../assets/img/ui/footer/instagram.svg';
import youtube from './../../../assets/img/ui/footer/youtube.svg';
import { Column } from './Colum';
import { SocialNetowrk } from './SocialNetwork';

const companyColumnItems = ['About Us', 'Partners', 'Blog', 'Careers'];
const ContactColumnItems = ['Terms of Use', 'Privacy Policy', 'F.A.Q.'];

export const Footer: React.FC = () => {
  let currentYear = new Date().getFullYear();

  return <footer className='flexCol gap-y-8 py-10 sm:flex-row sm:justify-between'>
    <div className='flex flex-wrap gap-y-4 max-sm:justify-between'>
      <Column heading='Company' items={companyColumnItems} />
      <Column className='sm:ml-20 md:ml-32 lg:ml-40 xl:ml-52' heading='Contact' items={ContactColumnItems} />
    </div>
    <div className='flex flex-wrap gap-y-3 justify-between items-end sm:flex-col-reverse'>
      <p className='text-lg text-darkBlue font-bold'>{currentYear} Yogi.com</p>
      <nav className='flex gap-x-3 md:gap-x-5 lg:gap-x-7'>
        <SocialNetowrk src={meta} href='https://www.facebook.com/' alt='meta' />
        <SocialNetowrk src={twitter} href='https://twitter.com/' alt='twitter' />
        <SocialNetowrk src={instagram} href='https://www.instagram.com/' alt='instagram' />
        <SocialNetowrk src={youtube} href='https://www.youtube.com/' alt='youtube' />
      </nav>
    </div>
  </footer>
};