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
    <div className="flex w-full">
      <div
        className="
          flex
          flex-row
          bg-slate-100
          w-full
          h-[70px]
          p-4
          px-10
          text-4xl
          text-black
          font-semibold
          "
        >
          <Link href={"/"}>
        JJFYE
        </Link>
      </div>
      <div
        className="
          flex
          flex-row
          gap-x-10
          bg-slate-100
          w-full
          h-[70px]
          p-4
          px-10
          text-xl
          text-black
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
  )
}

export default Tabs