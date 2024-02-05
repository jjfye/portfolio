"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import ContentDisplay from "./ContentDisplay";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { twMerge } from "tailwind-merge";


interface Route {
  label: string;
  href: string;
  desc: string;
  imageUrl: string;
}

const Sidebar = () => {
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState<Route | null>(null);

  const handleSelectItem = (item: Route) => {
    setSelectedItem(item);
  };

  const routes: Route[] = useMemo(() => [
    {
      label: "Spotify Clone",
      href: "https://github.com/jjfye/Sbotify",
      desc: "A clone of Spotify built using React.A clone of Spotify built using React.A clone of Spotify built using React.A clone of Spotify built using React.A clone of Spotify built using React.A clone of Spotify built using React.A clone of Spotify built using React.",
      imageUrl: "/images/spotify.jpeg", // Placeholder URL
    },
    {
      label: "Strava Bot",
      href: "https://github.com/jjfye/runBot",
      desc: "A bot for Strava to automate activities.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },    {
      label: "Tournament Generator",
      href: "https://github.com/jjfye/Tournment_Game_Generator",
      desc: "A clone of Spotify built using React.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Rubik's Cube Solver",
      href: "https://github.com/jjfye/Rubik-s-Cube-Solver",
      desc: "A bot for Strava to automate activities.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },    {
      label: "Mobile Chat",
      href: "https://github.com/jjfye/Mobile-Chat-App",
      desc: "A clone of Spotify built using React.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Discord Bot",
      href: "https://github.com/jjfye/Discord-Bot",
      desc: "A bot for Strava to automate activities.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
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
      <main className="w-full h-[500px] px-4">
        <ContentDisplay selectedItem={selectedItem} routes={routes} />
      </main>
    </div>
  );
}

export default Sidebar;