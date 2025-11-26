import { MapPin, Phone } from "lucide-react";
import { LinkButton } from "./ui/LinkButton";

export const Navbar = () => {
  return (
    <nav className="sticky text-white top-0 z-50 w-full bg-black py-4 px-4 md:px-8">
      <ul className="flex items-center justify-between max-w-4xl mx-auto gap-10 text-xs">
        <li>
          <LinkButton
            icon={<Phone className="w-5" />}
            text={process.env.PHONE_NUMBER as string}
            href={`tel:${process.env.PHONE_NUMBER as string}`}
          />
        </li>
        <li>
          <LinkButton
            icon={<MapPin className="w-5" />}
            text={process.env.ADDRESS as string}
            type="newpage"
            href={process.env.MAP_LINK as string}
          />
        </li>
      </ul>
    </nav>
  );
};
