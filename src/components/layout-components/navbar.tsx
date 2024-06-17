"use client";
import { ModeToggle } from "./toggle-theme";
import Link from "next/link";
import { CheckUser } from "./checkUser";

type NavbarProps = {
  userVerify: "Unauthorized" | "Authorization" | undefined;
};

export function Navbar({ userVerify }: NavbarProps) {
  return (
    <nav className="sticky top-0 left-0 z-50 bg-white backdrop-filter p-2 backdrop-blur-lg bg-opacity-50 border-b dark:bg-black">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="menu flex items-center justify-between h-20">
          <div className="text-xl uppercase font-extrabold cursor-pointer max-sm:text-base">
            <Link href="/">Multi Level</Link>
          </div>
          <div className="flex items-center gap-5 max-sm:gap-2">
            <CheckUser userIsVerified={userVerify} />
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
