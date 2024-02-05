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
    <div className="w-full h-[500px] bg-neutral-900 rounded-lg">
    <div className="p-4">Please select an item from the sidebar</div></div>
    )
    ;
  }
  
  // have access to routes if needed, but for displaying selected item:
  const { label, imageUrl, desc, href } = selectedItem;

  return (
    <div className="w-full h-[500px] bg-neutral-900 rounded-lg">
      <div className="p-4">
        <h2 className="text-2xl font-bold">{label}</h2>
        {imageUrl && <img src={imageUrl} alt={label} className="my-2 max-w-xs" />}
        <p className="my-2">{desc}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default ContentDisplay;
