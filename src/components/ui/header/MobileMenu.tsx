import { Nav } from "./nav/Nav";
import closeImg from './../../../assets/img/ui/header/close.png'; //Close icon by Icons8
import { Logo } from "./Logo";
import { useRef, useEffect } from 'react';

type Props = {
  isOpen: boolean
  closeBurger: () => void
}

export const MobileMenu: React.FC<Props> = ({ isOpen, closeBurger }) => {
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      if (isOpen && e.target === shadowRef.current) {
        closeBurger();
      };
    };

    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, [isOpen, shadowRef]);

  return <div className="flex flex-col items-center absolute w-[calc(100%_+_8px)] ml-[-4px] bg-white mt-[-8px] py-2 min-h-[178px] top-2 md:hidden">
    <div className='absolute h-[110vh] w-[110vw] bg-[rgba(0,_0,_0,_0.5)] -z-10 top-0 -ml-2' />
    <img className="absolute top-5 right-1 cursor-pointer" onClick={closeBurger} src={closeImg} alt='close' />
    <Logo />
    <Nav className="[&>ul]:mt-5 [&>ul]:gap-y-1 [&>ul]:flex-col" />
  </div>
};