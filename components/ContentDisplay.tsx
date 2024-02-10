// ContentDisplay.tsx
import React from "react";

interface Item {
  label: string;
  href: string;
  imageUrl: string;
  desc: string;
}

interface ContentDisplayProps {
  selectedItem: Item | null;
  routes: Item[];
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ selectedItem, routes }) => {
  if (!selectedItem) {
    return (
    <div className="w-full h-full bg-neutral-900 rounded-lg flex items-center justify-center">
      <div className="p-4 text-center">Please select an item from the menu</div>
    </div>
    )
    ;
  }
  
  // have access to routes if needed, but for displaying selected item:
  const { label, imageUrl, desc, href } = selectedItem;

  return (
    <div className="w-full h-full bg-neutral-900 rounded-lg ">
      <div className="p-4 py-8 text-center">
        <h2 className="text-2xl font-bold py-4">{label}</h2>
        {imageUrl && <img src={imageUrl} alt={label} className="my-4 mx-auto w-full md:w-[45%] rounded-lg" />}
        <p className="text-xs pb-6 md:p-6">{desc}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default ContentDisplay;
