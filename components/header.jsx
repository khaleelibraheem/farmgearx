"use client";

import { navItems } from "@/lib/data";
import Link from "next/link";
import menuIcon from "@/public/menuIcon.svg";
import Logo from "./ui/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FloatingNav } from "./ui/floating-navbar";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="max-w-[1400px] m-auto px-6">
      <div>
        <nav className="hidden sm:flex justify-between items-center p-4">
          <Logo />
          <div className="space-x-5 hidden sm:block">
            {navItems.map((navItem) => (
              <Link
                href={navItem.link}
                className={`text-[14px] hover:text-[#4CAF50] transition-all ${
                  pathname === `${navItem.hash}` ? "text-[#4CAF50]" : ""
                }`}
                key={navItem.link}
              >
                {navItem.name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:block">
            <Link
              href="/account/login"
              className="bg-red-500 p-3 text-white font-bold rounded-md hover:bg-red-600 transition-all"
            >
              Login/Signup
            </Link>
          </div>
        </nav>
        <FloatingNav navItems={navItems} />
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <div className="flex justify-between items-center sm:hidden">
          <Logo />
          <SheetTrigger asChild>
            <Image src={menuIcon} alt="open" />
          </SheetTrigger>
        </div>
        <SheetContent className="block sm:hidden">
          <SheetHeader>
            <SheetTitle>
              <div>
                <h1 className="text-[32px] font-bold logo tracking-tighter inline">
                  <span className="text-[#28EB3B]">Farm</span>GearX
                </h1>
              </div>
            </SheetTitle>
          </SheetHeader>
          <SheetFooter>
            <nav className="flex flex-col space-y-20 items-center text-center sm:hidden">
              <div className="flex flex-col space-y-5 w-full">
                {navItems.map((navItem) => (
                  <SheetClose key={navItem.name} asChild>
                    <Link
                      href={navItem.link}
                      className="text-[14px] hover:text-[#4CAF50] py-2 transition-all"
                    >
                      {navItem.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <SheetClose asChild>
                <Link
                  href="/account/login"
                  className="bg-red-500 p-3 text-white font-bold rounded-md hover:bg-red-600 transition-all"
                >
                  Login/Signup
                </Link>
              </SheetClose>
            </nav>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}
