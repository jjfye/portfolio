// BurgerMenu.tsx
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { tabs } from '@/config/routes';
import TabItem from './TabItem';
import { Squash as Hamburger, Squash } from 'hamburger-react'
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const BurgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const activeRoutes = tabs.map(route => ({
    ...route,
    active: pathname === route.href,
  }));

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative">
      <button
        className="md:hidden p-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Hamburger toggled={isMenuOpen}/>
      </button>
          <div className={twMerge(
            "top-full w-[210px] absolute duration-500 transition ease-in-out rounded-lg right-[10%] bg-neutral-900 z-20 md:hidden",
            isMenuOpen ? "p-2 opacity-100" : "opacity-0"
          )}>  
           {isMenuOpen && 
          activeRoutes.map((item) => (
            <TabItem key={item.label} {...item} onClick={handleCloseMenu} />
          ))}
          </div>
    </div>
  );
};

export default BurgerMenu;
