import Image from "next/image";

import Spotlight from "./ui/Spotlight";
import { HeroLearnMore } from "./ui/HeroLearnMore";
import { HeroQuickFeatures } from "./HeroQuickFeatures";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col relative  justify-center items-center h-[90vh]  "
    >
      <div className="absolute inset-0 ">
        <Image
          src="/bg-boxer.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="bg-linear-to-b from-black/30 via-transparent to-black/30 inset-0 absolute"></div>
      </div>
      <Spotlight
        className="absolute  right-0 top-0"
        fill="rgb(167, 139, 250)"
      />
      <Spotlight className="absolute  left-0 top-4" fill="rgb(167, 139, 250)" />

      <div className=" w-60 h-60 lg:h-90 lg:w-90 relative z-10 ">
        <Image
          quality={90}
          src="/logo.webp"
          alt="Mad Dog MMA Logo"
          className="object-center object-cover filter opacity-70 brightness-90 "
          fill={true}
        />
      </div>

      <h1 className="uppercase filter brightness-75 bg-[url('/cracked.webp')] bg-clip-text text-transparent bg-center bg-cover   relative  z-10 text-7xl! font-subtitle lg:text-9xl! text-center font-extrabold">
        Mad Dog{" "}
        <span className="from-purple-300/60 to-purple-500/80 bg-linear-to-r bg-clip-text text-transparent text-shadow-[0_35px_35px_rgb(167_139_250_/_0.25)] ">
          MMA
        </span>
        <span className="h-1 w-18 border-b-1 shadow-sm shadow-purple-500/50 border-purple-500/70 absolute bottom-0 right-0"></span>
      </h1>
      <p className="text-sm lg:text-xl z-10 mt-2 opacity-80">
        Osjeti adrenalin MMA treninga – od sada u Rijeci!
      </p>

      <HeroQuickFeatures />
      <HeroLearnMore />
    </section>
  );
};
