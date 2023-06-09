import Link from "next/link";
import { navbarLinks } from "./navbarLinks";

function Navbar() {
  return (
    <div className="justify-center p-4 bg-black text-white flex gap-4 md:gap-12">
      {navbarLinks.map((link) => (
        <Link className="text-sm md:text-base" href={link.href} key={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
