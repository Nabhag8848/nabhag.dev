import { randomUUID } from "crypto";
import Link from "next/link";

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
    <nav className="flex items-start space-x-4 pt-12 mb-16">
      {links.map((link) => (
        <Link href={link.href} key={randomUUID()}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
