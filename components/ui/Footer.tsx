import Link from "next/link";
import { Icons } from "./Icons";

function Footer() {
  return (
    <div className="flex justify-around border border-y-0 border-green-400">
      <Link
        className="flex flex-row justify-center items-center text-gray-50 hover:text-white underline hover:decoration-normal underline-offset-2 md:text-sm text-xs"
        href="https://x.com/NabhagMotivaras"
        target="_blank"
      >
        <Icons.arrowUp className="size-4" />
        <span className="font-medium  ml-1 ">
          <span className="font-bold">Twitter</span>
        </span>
      </Link>
      <Link
        className="flex flex-row justify-center items-center text-gray-50 hover:text-white underline hover:decoration-normal underline-offset-2 md:text-sm text-xs"
        href="https://github.com/Nabhag8848/"
        target="_blank"
      >
        <Icons.arrowUp className="size-4" />
        <span className="font-medium  ml-1 ">
          <span className="font-bold">Github</span>
        </span>
      </Link>
      <Link
        className="flex flex-row justify-center items-center text-gray-50 hover:text-white underline hover:decoration-normal underline-offset-2 md:text-sm text-xs"
        href="https://www.linkedin.com/in/nabhag-motivaras-460b3b1aa/"
        target="_blank"
      >
        <Icons.arrowUp className="size-4" />
        <span className="font-medium  ml-1 ">
          <span className="font-bold">LinkedIn</span>
        </span>
      </Link>
      <Link
        className="flex flex-row justify-center items-center text-gray-50 hover:text-white underline hover:decoration-normal underline-offset-2 md:text-sm text-xs"
        href="mailto:motivaras.nabhag@gmail.com"
        target="_blank"
      >
        <Icons.arrowUp className="size-4" />
        <span className="font-medium  ml-1 ">
          <span className="font-bold">Reach Out</span>
        </span>
      </Link>
    </div>
  );
}

export default Footer;
