import { Instagram, Mail, Phone } from "lucide-react";
import { MapWrapper } from "./ui/MapWrapper";
import { LinkButton } from "./ui/LinkButton";
import { Subtitle } from "./ui/Subtitle";

export const Footer = () => {
  return (
    <footer className="overflow-x-hidden pl-4 md:pl-6 pr-4 pt-10 flex flex-col  items-start border-t relative border-purple-500/40 w-full">
      <div className="bg-[url('/logo.webp')] md:h-70 md:w-70 md:-top-20 md:right-120 h-60 w-60 bg-center bg-cover opacity-20 absolute -top-14 -right-10"></div>
      <Subtitle text={"Kontaktirajte nas"} />
      <div className="flex flex-col md:flex-row md:gap-20">
        <div>
          <div className="mb-4">
            <h3 className="font-subtitle">Nađite nas na karti:</h3>
            <div className="w-22 h-1 mt-1  border-b-2 border-purple-500/60" />
          </div>
          <MapWrapper />
        </div>

        <div className="md:mt-4">
          <div className="mt-12 text-sm flex flex-col items-start gap-2">
            <div>
              <h3 className=" font-subtitle   ">Kontakti:</h3>
              <div className="w-12 h-1  border-b-2 border-purple-500/60" />
            </div>
            <LinkButton
              text={process.env.PHONE_NUMBER as string}
              icon={<Phone className="w-5 h-5" />}
              href={`tel:${process.env.PHONE_NUMBER as string}`}
            />

            <LinkButton
              text={process.env.EMAIL as string}
              icon={<Mail className="w-5 h-5 " />}
              href={`mailto:${process.env.EMAIL as string}`}
            />
          </div>
          <div className="flex flex-col mt-4 items-start gap-2 mb-4 text-sm">
            <div>
              <h3 className="  font-subtitle   ">Zapratite nas:</h3>
              <div className="w-12 h-1  border-b-2 border-purple-500/60" />
            </div>
            <LinkButton
              text={process.env.INSTAGRAM_HANDLE as string}
              icon={<Instagram className="w-5 h-5" />}
              href={process.env.INSTAGRAM as string}
              type="newpage"
            />
          </div>
        </div>
      </div>
      <p className="text-center font-light opacity-50 w-full text-xs mt-6 mb-3">
        ©{new Date().getFullYear()} Mad Dog MMA
      </p>
    </footer>
  );
};
