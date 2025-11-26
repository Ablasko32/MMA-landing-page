import Image from "next/image";

import { Spotlight } from "./ui/Spotlight";
import { HeroLearnMore } from "./ui/HeroLearnMore";
import { HeroQuickFeatures } from "./HeroQuickFeatures";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col  justify-center items-center h-[90vh]  "
    >
      <div className="bg-[url('/bg-boxer.jpg')] bg-center bg-cover absolute inset-0 z-0 opacity-30"></div>
      <Spotlight
        className="absolute  right-0 top-0"
        fill="rgb(167, 139, 250)"
      />
      <Spotlight className="absolute  left-0 top-4" fill="rgb(167, 139, 250)" />

      <div className=" w-60 h-60 lg:h-80 lg:w-80 relative z-10">
        <Image
          src="/logo.png"
          alt="Mad Dog MMA Logo"
          className="object-center object-cover  opacity-70 brightness-90"
          fill={true}
        />
      </div>

      <h1 className="uppercase relative bg-linear-to-r from-white to-purple-400 bg-clip-text text-transparent z-10 text-6xl! font-subtitle lg:text-8xl! text-center font-extrabold">
        Mad Dog{" "}
        <span className="from-purple-300 to-purple-500 bg-linear-to-r bg-clip-text text-transparent">
          MMA
        </span>
        <span className="h-1 w-18 border-b-2 border-purple-500/70 absolute bottom-0 right-0"></span>
      </h1>
      <p className="text-sm lg:text-xl z-10 mt-2 opacity-80">
        Osjeti adrenalin MMA treninga – od sada u Rijeci!
      </p>

      {/* quick features */}
      <HeroQuickFeatures />
      <HeroLearnMore />
    </section>
  );
};
