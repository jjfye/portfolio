"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi"
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { twMerge } from "tailwind-merge";



const Sidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      label: "Spotify Clone",
      active: pathname === "/search",
      href: "https://github.com/jjfye/Sbotify",
    },
    {
      label: "Strava Bot",
      active: pathname === "/search",
      href: "https://github.com/jjfye/runBot",
    },
    {
      label: "Rubik's Cube Solver",
      active: pathname === "/search",
      href: "https://github.com/jjfye/Rubik-s-Cube-Solver",
    },
    {
      label: "Discord Bot",
      active: pathname === "/search",
      href: "/search",
    },
    {
      label: "Mobile Chat App",
      active: pathname === "/search",
      href: "/search",
    },
    {
      label: "Tournament Generator",
      active: pathname === "/search",
      href: "/",
    },
    {
      label: "Pong",
      active: pathname === "/search",
      href: "/search",
    },
    {
      label: "Book Shop",
      active: pathname === "/search",
      href: "/search",
    },
    {
      label: "2D Game",
      active: pathname === "/search",
      href: "/search",
    },
    {
      label: "Flappy Bird",
      active: pathname === "/search",
      href: "/search",
    },
    {
      label: "Rhythm Game",
      active: pathname === "/search",
      href: "/search",
    },
  ], [pathname]);

  return (
    <div className={twMerge(`
      flex
      h-full
    `,
      "h-[calc(100%-80px)]"
    )}>
      <div
        className="
            md:flex
            flex-col
            gap-y-2
            bg-black
            h-[500px]
            w-[450px]
            p-2
            overflow-y-scroll
            no-scrollbar
            "
      >
        <Box>
          <div className="
          flex
          flex-col
          gap-y-2
          px-5
          py-4
          text-center
          "
          >
            {routes.map((item) => (
              <SidebarItem
                key={item.label}
                {...item}
              />
            ))}

          </div>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
      </main>
    </div>
  );
}

export default Sidebar;