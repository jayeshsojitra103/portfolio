"use client";

import { links } from "@/const";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DesktopNav() {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default DesktopNav;
