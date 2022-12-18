import { Button } from "../../../../ui/Button";
import { FullBg } from "../../../../ui/FullBg";
import img1 from './../../../../../assets/img/pages/main/abotUs/1.webp';
import img2 from './../../../../../assets/img/pages/main/abotUs/2.webp';
import img3 from './../../../../../assets/img/pages/main/abotUs/3.webp';
import img4 from './../../../../../assets/img/pages/main/abotUs/4.webp';
import decor1 from './../../../../../assets/img/decor/1.svg';
import decor2 from './../../../../../assets/img/pages/main/decor/1.svg';
import { TryForFree } from "./TryForFree";
import { Link } from "react-router-dom";

export const AboutUs: React.FC = () => {
  return <section className="relative mt-28 py-14 md:mt-32 md:py-16 lg:mt-36 lg:py-20 xl:mt-44 xl:py-28">
    <FullBg />
    <div className="relative grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
      <div className="lg:my-auto">
        <h2 className="text-darkBlue leading-tight">Global leader in Design & Development</h2>
        <p className="mt-4 text-lg text-justify sm:text-left">The company`s comprehensive security portfolio includes leading endpoint protection and a number of specialized security solutions and services to fight sophisticated and evolving digital threats. Over 400 million users are protected by Yogi technologies and we help 250,000 corporate clients protect what matters most to them.</p>
        <Link to='/aboutUs'>
          <Button className="bg-orange mt-6" arrow xsmWFit>Learn more</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 w-full ml-auto sm:grid-cols-2 sm:gap-y-8 xl:gap-10">
        <img className="w-full ml-auto sm:w-auto" src={img1} alt='man is working' />
        <img className='w-full ml-auto mt-auto sm:w-auto sm:mt-10 lg:mt-12' src={img2} alt='people are sittimg' />
        <div className="relative w-full ml-auto sm:w-auto lg:-mt-10">
          <img className="w-full" src={img3} alt='people are working' />
          <img className="absolute -z-10 sm:bottom-10 max-sm:hidden sm:-left-10 md:bottom-16 lg:-bottom-5 xl:bottom-3" src={decor1} alt='decor 1' />
        </div>
        <img className='w-full ml-auto mt-auto sm:w-auto sm:mt-10 lg:mt-0' src={img4} alt='hands' />
        <img className="absolute right-0 -z-20 lg:top-2/4 lg:-translate-y-1/2 h-[90%]" src={decor2} alt='decor 2' />
      </div>
    </div>
    <TryForFree />
  </section>
};