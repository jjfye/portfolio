"use client";
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react'
import { tabs } from '@/config/routes';
import TabItem from './TabItem';
import Link from 'next/link';
interface TabsProps {
  children: React.ReactNode
}
const Tabs: React.FC<TabsProps> = ({
  children
}) => {
  const pathname = usePathname();

  const activeRoutes = tabs.map(route => ({
    ...route,
    active: pathname === route.href,
  }));

  return (
    <div className="flex flex-col w-full">
      <div
        className="
          flex
          flex-row
          bg-black
          w-full
          h-[70px]
          p-4
          px-10
          text-neutral-400
          fixed
          font-semibold
          text-xl
          z-10
          "
        >
          <Link href={"/"} className="hover:text-green-300 transition text-2xl">
            JJFYE
          </Link>
          <div
            className="
              hidden
              md:flex
              gap-x-10
              w-full
              justify-end
            "
          >
            {activeRoutes.map((item) => (
              <TabItem
                key={item.label}
                {...item}
              />
            ))}
          </div>
        </div>
        <main className="pt-[70px] flex w-full min-h-[calc(100vh-70px)] items-center justify-center overflow-hidden">
          {children}
        </main>
      </div>
  )
}

export default Tabs