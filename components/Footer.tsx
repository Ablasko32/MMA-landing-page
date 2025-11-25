import { Instagram, Mail, Phone } from "lucide-react";
import { MapWrapper } from "./ui/MapWrapper";
import { LinkButton } from "./ui/LinkButton";

export const Footer = () => {
  return (
    <footer className="overflow-x-hidden pl-4 md:pl-6 pr-4 pt-10 flex flex-col  items-start border-t relative border-purple-500/40 w-full">
      <div className="bg-[url('/logo.png')] md:h-70 md:w-70 md:-top-20 md:right-120 h-60 w-60 bg-center bg-cover opacity-20 absolute -top-14 -right-10"></div>
      <h2 className="text-center w-full mb-14 font-subtitle  text-4xl!    ">
        Kontaktirajte nas
      </h2>
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
              text="123-456-7890"
              icon={<Phone className="w-5 h-5" />}
              href="tel:123-456-7890"
            />

            <LinkButton
              text="info@maddogmma.com"
              icon={<Mail className="w-5 h-5 " />}
              href="mailto:info@maddogmma.com"
            />
          </div>
          <div className="flex flex-col mt-4 items-start gap-2 mb-4 text-sm">
            <div>
              <h3 className="  font-subtitle   ">Zapratite nas:</h3>
              <div className="w-12 h-1  border-b-2 border-purple-500/60" />
            </div>
            <LinkButton
              text="@mad_dog_mma_rijeka"
              icon={<Instagram className="w-5 h-5" />}
              href="https://www.instagram.com/mad_dog_mma_rijeka"
              type="newpage"
            />
          </div>
        </div>
      </div>
      <p className="text-center font-light opacity-50 w-full text-xs mt-6 mb-3">
        Copyright ©{new Date().getFullYear()} Mad Dog MMA
      </p>
    </footer>
  );
};
