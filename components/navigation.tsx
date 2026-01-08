"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <div className="">
      <ul className="flex gap-2 items-center">
        <li className=" hover:bg-lime-200 p-1 rounded-lg">
          <Link href={"/"}>home</Link>
          {path === "/" ? "😍" : ""}
        </li>
        <li className="hover:bg-lime-200 p-1 rounded-lg">
          <Link href={"/about-us"}>about-us</Link>
          {path === "/about-us" ? "😍" : ""}
        </li>
      </ul>
    </div>
  );
}
