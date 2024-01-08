"use client";
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react'
import TabItem from './TabItem';
import Link from 'next/link';
interface TabsProps {
  children: React.ReactNode
}
const Tabs: React.FC<TabsProps> = ({
  children
}) => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      label: "Home",
      active: pathname === "/",
      href: "/",
    },
    {
      label: "About",
      active: pathname === "/about",
      href: "/about",
    },
    {
      label: "Projects",
      active: pathname === "/projects",
      href: "/projects",
    },
    {
      label: "Contact",
      active: pathname === "/contact",
      href: "/contact",
    }
  ], [pathname]);

  return (
    <div className="flex flex-col w-full h-screen">
      <div
        className="
          flex
          flex-row
          bg-black
          w-full
          h-[70px]
          p-4
          px-10
          text-4xl
          text-neutral-400
          fixed
          font-semibold
          "
        >
          <Link href={"/"} className="hover:text-green-300 transition">
            JJFYE
          </Link>
          <div
            className="
              flex
              flex-row
              gap-x-10
              w-full
              text-xl
              justify-end
            "
          >
            {routes.map((item) => (
              <TabItem
                key={item.label}
                {...item}
              />
            ))}
          </div>
        </div>
        <main className="flex w-full h-full py-10 items-center justify-center text-5xl">
          {children}
        </main>
      </div>
  )
}

export default Tabs