import Link from "next/link";
import { Button } from "./ui/button";

// components
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jayesh<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* nav-links  (ver desktop) */}
        <div className="hidden xl:flex items-center gap-8">
          <DesktopNav />
          {/* <Link href="/contact">
            <Button>Hire Me</Button>
          </Link> */}
        </div>

        {/* nav-links  (ver mobile) */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
