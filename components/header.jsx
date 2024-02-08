import { links } from "@/lib/data";
import Link from "next/link";
import menuIcon from "@/public/menuIcon.svg";
import Logo from "./ui/logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  return (
    <header className="max-w-[1400px] m-auto px-6">
      <nav className="hidden sm:flex justify-between items-center pt-6">
        <Logo />
        <div className="space-x-5 hidden sm:block">
          {links.map((link) => (
            <Link
              href={link.hash}
              className="text-[14px] hover:text-[#4CAF50] transition-all"
              key={link.hash}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden sm:block">
          <Link
            href="/login"
            className="bg-red-500 p-3 text-white font-bold rounded-md hover:bg-red-600 transition-all"
          >
            Login/Signup
          </Link>
        </div>
      </nav>
      <Sheet className="block sm:hidden">
        <div className="flex justify-between items-center sm:hidden">
          <Logo />
          <SheetTrigger>
            <Image src={menuIcon} alt="open" />
          </SheetTrigger>
        </div>

        <SheetContent className="block sm:hidden">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription>
              <nav className="flex flex-col space-y-20 items-center text-center sm:hidden">
                <div className="flex flex-col space-y-5 w-full">
                  {links.map((link) => (
                    <Link
                      href={link.hash}
                      className="text-[14px] hover:text-[#4CAF50] py-2 transition-all"
                      key={link.hash}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <Link
                    href="/login"
                    className="bg-red-500 p-3 text-white font-bold rounded-md hover:bg-red-600 transition-all"
                  >
                    Login/Signup
                  </Link>
                </div>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
