"use client";

import React, { useState } from 'react';
import { routes, Route } from "@/config/routes";
import ContentDisplay from './ContentDisplay';
import { twMerge } from 'tailwind-merge';

const MobileDropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Route | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectItem = (item: Route) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-full md:hidden relative items-center justify-center">
      <div className="relative">
        <button
          className={twMerge(`
            bg-neutral-800 text-white p-4 w-[300px] truncate text-left z-10`,
            isOpen ? "rounded-t" : "rounded"
          )}
          onClick={toggleDropdown}
        >
          {selectedItem ? selectedItem.label : "Select a project"}
        </button>
        {isOpen && (
          <div className="flex flex-col w-full max-h-[16rem] bg-neutral-900 text-white scroll-y overflow-y-auto absolute z-20"> {/* Adjusted here */}
            {routes.map((item) => (
              <button
                key={item.label}
                className={twMerge(`
                  text-white p-4 w-full text-left hover:bg-gray-700`,
                  selectedItem?.label === item.label ? "text-green-300" : ""
                )}
                onClick={() => handleSelectItem(item)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <main className="flex-grow pt-4 z-0">
        <ContentDisplay selectedItem={selectedItem} routes={routes} />
      </main>
    </div>
  );
};

export default MobileDropdownMenu;
