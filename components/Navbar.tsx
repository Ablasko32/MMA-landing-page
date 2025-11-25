import { MapPin, Phone } from "lucide-react";
import { LinkButton } from "./ui/LinkButton";

export const Navbar = () => {
  return (
    <nav className="sticky text-white top-0 z-50 w-full bg-black py-4 px-4 md:px-8">
      <ul className="flex items-center justify-between max-w-4xl mx-auto gap-10 text-xs">
        <li>
          <LinkButton
            icon={<Phone className="w-5" />}
            text="+385 99 123 4567"
            href="tel:+385991234567"
          />
        </li>
        <li>
          <LinkButton
            icon={<MapPin className="w-5" />}
            text="Ružičeva 7, Rijeka"
            type="newpage"
            href="https://www.google.com/maps"
          />
        </li>
      </ul>
    </nav>
  );
};
