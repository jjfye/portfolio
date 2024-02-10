"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import ContentDisplay from "./ContentDisplay";
import { routes, Route } from "@/config/routes";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { twMerge } from "tailwind-merge";


const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<Route | null>(null);

  const handleSelectItem = (item: Route) => {
    setSelectedItem(item);
  };

  return (
    <div className={twMerge(`
      flex
      h-full
    `,
      "h-[calc(100%-80px)]"
    )}>
      <div
        className="
            hidden
            md:flex
            flex-col
            gap-y-2
            bg-black
            h-[500px]
            w-[450px]
            overflow-y-scroll
            no-scrollbar
            "
      >
        <Box>
          <div className="
          flex
          flex-col
          gap-y-4
          px-8
          text-center
          "
          >
            {routes.map((item) => (
              <SidebarItem
                key={item.label}
                {...item}
                active={selectedItem?.label === item.label}
                onClick={() => handleSelectItem(item)}
              />
            ))}
          </div>
        </Box>
      </div>
      <main className="hidden md:flex w-full h-full px-4">
        <ContentDisplay selectedItem={selectedItem} routes={routes} />
      </main>
    </div>
  );
}

export default Sidebar;