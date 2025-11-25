import { MapPin, Phone } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="gap-10 z-30 mx-2 lg:mx-auto max-w-full  md:max-w-4xl py-4 text-xs sticky w-full px-8 top-0  ">
      <ul className="flex items-center lg:gap-10 justify-between">
        <li className="flex items-center gap-1">
          <Phone className="w-5" />
          +385 99 123 4567
        </li>
        <li className="flex items-center gap-1">
          <MapPin className="w-5" />
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4764a1f035a09759:0xb9a691971dc4489c?sa=X&ved=1t:8290&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            Ružičeva 7, Rijeka
          </a>
        </li>
      </ul>
    </nav>
  );
};
