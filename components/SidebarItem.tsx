import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  active?: boolean;
  onClick: () => void;}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  active,
  onClick
}) => {
  
  return (
    <button
      onClick={onClick}
      className={twMerge(`
      flex
      flex-row
      h-auto
      items-center
      w-full
      gap-x-4
      text-md
      font-medium
      cursor-pointer
      bg-neutral-900
      rounded-lg
      hover:text-green-300
      transition
      text-neutral-400
      py-4
      relative
      group
      `,
      active && "text-green-300")}
    >
      <p className="w-full px-4">{label}</p>

      <span className="arrow rotate-[135deg] absolute top-[50%] left-full transform -translate-y-1/2 translate-x-[12px] opacity-0 group-hover:opacity-100">
        <span className="block w-3 h-3 border-r-2 border-b-2 border-green-300 animate-moving-arrow"></span>
      </span>
    </button>
  );
}

export default SidebarItem