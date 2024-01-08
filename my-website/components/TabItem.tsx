import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  active?: boolean;
  href: string;
}

const TabItem: React.FC<SidebarItemProps> = ({
  label,
  active,
  href
}) => {
  return (
    <Link
      href={href}
      className={twMerge(`
      flex
      flex-row
      h-full
      items-center
      w-auto
      gap-x-4
      text-md
      font-medium
      cursor-pointer
      hover:text-red-500
      transition
      text-neutral-400
      py-1
      `,
      active && "text-black")}
    >
      <p className="truncate w-full">{label}</p>
    </Link>
  );
}

export default TabItem