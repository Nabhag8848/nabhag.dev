import { randomUUID } from "crypto";
import Link from "next/link";
import { Badge } from "./Badge";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "crafts",
    href: "/crafts",
  },
  {
    name: "blog",
    href: "/blog",
  },
];
export default function Navbar() {
  return (
    <nav className="flex items-center mb-8 sm:mb-12 pt-12">
      {/* <div className="space-x-4">
        {links.map((link) => (
          <Link href={link.href} key={randomUUID()}>
            {link.name}
          </Link>
        ))}
      </div> */}
      <Badge className="ml-auto" />
    </nav>
  );
}
