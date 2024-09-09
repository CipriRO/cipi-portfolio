"use client";

import { links } from "@/app/lib/constants";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="space-x-5">
      {links.map((link, id) => (
        <NavLink key={id} linkData={link} pathname={pathname} />
      ))}
    </nav>
  );
};
export default Nav;

const NavLink = ({
  linkData,
  pathname,
}: {
  linkData: { name: string; link: string };
  pathname: string;
}) => {
  const { link, name } = linkData;

  return (
    <Link
      href={link}
      className={cn("font-medium hover:font-bold hover:text-primary transition-all", {
        "font-bold text-primary": pathname === link,
      })}
    >
      {name}
    </Link>
  );
};
