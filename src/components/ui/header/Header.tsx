import burger from './../../../assets/img/ui/header/burger.png'; //Menu Rounded icon by Icons8
import { MobileMenu } from './MobileMenu';
import { useState, useLayoutEffect } from 'react';
import { Nav } from './nav/Nav';
import { Logo } from './Logo';
import { useRef } from 'react';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [innerWidth, setInnerWidth] = useState<number | undefined>(undefined);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerStatus = () => setIsBurgerOpen(prev => !prev);

  useLayoutEffect(() => {
    headerRef.current && setInnerWidth(headerRef.current.getBoundingClientRect().width);
  }, [headerRef]);

  return <header className='min-h-[68px] relative z-50' ref={headerRef}>
    <div className='container flex justify-between items-center fixed bg-white py-2 xl:max-w-7xl lg:px-1.5' style={{ width: innerWidth }}>
      <Logo />
      <img className='cursor-pointer md:hidden' onClick={handleBurgerStatus} src={burger} alt='burger' />
      <Nav className='hidden md:flex' />
      {isBurgerOpen && <MobileMenu isOpen={isBurgerOpen} closeBurger={handleBurgerStatus} />}
    </div>
  </header>
};