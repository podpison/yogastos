import { Link } from "react-router-dom";
import { Button } from "../../../../ui/Button";

export const TryForFree: React.FC = () => {
  return <div className='componentsMargin rounded-3xl bg-orange px-1 py-10 sm:px-4 sm:py-14 md:py-18 lg:py-20 xl:py-22'>
    <div className='flexCol items-center gap-y-3 text-white sm:gap-y-5 md:gap-y-6 lg:max-w-[80%] lg:mx-auto xl:max-w-[75%]'>
      <h2 className='text-center'>Digital Branding & Product Design Services by a Global Leader.</h2>
      <p className='textJustify text1'>With our advanced technology, you can enjoy a safe and private Internet experience without compromising the performance of your computer and mobile devices. </p>
      <Link to='/contactUs?try=true'>
        <Button className="bg-white text-black hover:bg-white hover:bg-[rgba(255,_255,_255,_0.9)]" xsmWFit>Try for free</Button>
      </Link>
    </div>
  </div>
};