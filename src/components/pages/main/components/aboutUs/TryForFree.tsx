import { Button } from "../../../../ui/Button";

export const TryForFree: React.FC = () => {
  return <div className='componentsMargin rounded-3xl bg-orange px-1 py-10 sm:px-4 sm:py-14 md:py-18 lg:py-20 xl:py-22'>
    <div className='flexCol gap-y-5 text-white sm:gap-y-7 sm:items-center md:gap-y-10 lg:max-w-[80%] lg:mx-auto xl:max-w-[75%]'>
      <h2 className='leading-tight sm:text-center'>Digital Branding & Product Design Services by a Global Leader.</h2>
      <p className='textJustify'>With our advanced technology, you can enjoy a safe and private Internet experience without compromising the performance of your computer and mobile devices. </p>
      <Button className="bg-white text-black hover:bg-white hover:bg-[rgba(255,_255,_255,_0.9)]">Try for free</Button>
    </div>
  </div>
};