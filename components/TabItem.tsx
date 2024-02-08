import Link from "next/link";
import { twMerge } from "tailwind-merge";


interface SidebarItemProps {
  label: string;
  active?: boolean;
  href: string;
  onClick?: () => void;
}

const TabItem: React.FC<SidebarItemProps> = ({
  label,
  active,
  href,
  onClick,
}) => {

  return (
    <Link
      href={href} passHref
      className={twMerge(`
      flex
      flex-row
      h-full
      items-center
      w-fit
      md:w-auto
      gap-x-4
      p-2
      md:p-0
      text-md
      font-medium
      cursor-pointer
      hover:text-green-300
      transition
      text-neutral-400
      relative
      group
      `,
      active && "text-green-300")}
      onClick={onClick}
    >
      <p className="truncate w-full">{label}</p>
      
      <span className="arrow rotate-[135deg] absolute top-[50%] left-full transform -translate-y-1/2 translate-x-[12px] opacity-0 group-hover:opacity-100">
        <span className="block w-3 h-3 border-r-2 border-b-2 border-green-300 animate-moving-arrow"></span>
      </span>
    </Link>
  );
}


export default TabItem
