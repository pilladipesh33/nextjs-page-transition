"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="h-[10dvh] w-full absolute top-0 flex justify-between items-center px-5">
      <Link href={"/"} className="text-[0.5em]">
        <h4 className="font-semibold">Dipesh</h4>
      </Link>
      <div className="flex gap-5">
        <Link href={"/work"} className="text-[0.5em]">
          Work
        </Link>
        <Link href={"/about"} className="text-[0.5em]">
          About
        </Link>
      </div>
    </div>
  );
};
