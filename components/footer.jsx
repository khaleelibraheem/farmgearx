import Link from "next/link";
import Image from "next/image";
import { footerLinks, footerIcons } from "@/lib/data";
import Logo from "./ui/logo";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container sm:px-20 mx-auto flex flex-wrap justify-between">
        {/* About Us Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <Logo />
          <p className="tracking-tight">
            Empowering farmers through convenient equipment rentals. Discover a
            smarter way to enhance your agricultural practices.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4 tracking-tighter">
            Quick Links
          </h3>
          <ul className="list-none">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#4CAF50] transition-all tracking-tighter"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Connect With Us Section */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <h3 className="text-2xl font-bold mb-4 tracking-tighter">
          Connect With Us
        </h3>
        <ul className="flex space-x-4">
          {footerIcons.map((icon) => (
            <li key={icon.href}>
              <Link href={icon.href}>
                <Image src={icon.imageUrl} alt={icon.name} width={20} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Copyright Section */}
      <div className="text-center mt-12 tracking-tighter">
        <p>&copy; 2024 farmGearX. All rights reserved.</p>
      </div>
    </footer>
  );
}
