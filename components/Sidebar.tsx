"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import ContentDisplay from "./ContentDisplay";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { twMerge } from "tailwind-merge";


interface Route {
  label: string;
  active: boolean;
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
      active: pathname === "/search",
      href: "https://github.com/jjfye/Sbotify",
      desc: "A clone of Spotify built using React.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Strava Bot",
      active: pathname === "/search",
      href: "https://github.com/jjfye/runBot",
      desc: "A bot for Strava to automate activities.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Spotify Clone",
      active: pathname === "/search",
      href: "https://github.com/jjfye/Sbotify",
      desc: "A clone of Spotify built using React.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Strava Bot",
      active: pathname === "/search",
      href: "https://github.com/jjfye/runBot",
      desc: "A bot for Strava to automate activities.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Spotify Clone",
      active: pathname === "/search",
      href: "https://github.com/jjfye/Sbotify",
      desc: "A clone of Spotify built using React.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Strava Bot",
      active: pathname === "/search",
      href: "https://github.com/jjfye/runBot",
      desc: "A bot for Strava to automate activities.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Spotify Clone",
      active: pathname === "/search",
      href: "https://github.com/jjfye/Sbotify",
      desc: "A clone of Spotify built using React.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Strava Bot",
      active: pathname === "/search",
      href: "https://github.com/jjfye/runBot",
      desc: "A bot for Strava to automate activities.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Spotify Clone",
      active: pathname === "/search",
      href: "https://github.com/jjfye/Sbotify",
      desc: "A clone of Spotify built using React.",
      imageUrl: "https://example.com/strava-bot-image-url.jpg", // Placeholder URL
    },
    {
      label: "Strava Bot",
      active: pathname === "/search",
      href: "https://github.com/jjfye/runBot",
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
          gap-y-2
          px-5
          text-center
          "
          >
            {routes.map((item) => (
              <SidebarItem
                key={item.label}
                {...item}
                onClick={() => handleSelectItem(item)}
              />
            ))}
          </div>
        </Box>
      </div>
      <main className="w-full h-full">
        <ContentDisplay selectedItem={selectedItem} routes={routes} />
      </main>
    </div>
  );
}

export default Sidebar;