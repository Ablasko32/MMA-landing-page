import Image from "next/image";

import { Clock, Euro, Users } from "lucide-react";
import { Spotlight } from "./ui/Spotlight";
import { HeroLearnMore } from "./ui/HeroLearnMore";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col  justify-center items-center  ">
      <div className="bg-[url('/bg-boxer.jpg')] bg-center bg-cover absolute inset-0 z-0 opacity-30"></div>
      <Spotlight
        className="absolute  right-0 top-0"
        fill="rgb(167, 139, 250)"
      />
      <Spotlight className="absolute  left-0 top-4" fill="rgb(167, 139, 250)" />

      <div className=" w-60 h-60 lg:h-80 lg:w-80 relative z-10">
        <Image
          src="/logo.png"
          alt="Mad Dog MMA"
          className="object-center object-cover  opacity-80"
          fill={true}
        />
      </div>

      <h1 className="uppercase relative bg-linear-to-r from-white to-purple-400 bg-clip-text text-transparent z-10 text-6xl! font-subtitle lg:text-7xl! text-center font-extrabold">
        Mad Dog{" "}
        <span className="from-purple-300 to-purple-500 bg-linear-to-r bg-clip-text text-transparent">
          MMA
        </span>
        <span className="h-1 w-18 border-b-2 border-purple-500/70 absolute bottom-0 right-0"></span>
      </h1>
      <p className="text-sm z-10 mt-2 opacity-80">
        Osjeti adrenalin MMA treninga – od sada u Rijeci!
      </p>
      <div className="flex md:flex-row z-10 items-start lg:gap-6 gap-5 mt-10 flex-col">
        <div className="flex items-center gap-2 group">
          <div className="bg-purple-500/30 p-2 rounded-md group-hover:bg-purple-500/20">
            <Clock className="text-purple-500 h-5 w-5" />
          </div>
          <div>
            <p className="group-hover:text-purple-500 font-semibold">
              PON-PET 17:00h
            </p>
            <p className="text-xs font-light">
              Treninzi svaki dan tokom tjedna!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2  group transition-all duration-250 ">
          <div className="bg-purple-500/30 p-2 rounded-md group-hover:bg-purple-500/20">
            <Users className="text-purple-500 h-5 w-5 " />
          </div>
          <div>
            <p className="group-hover:text-purple-500 font-semibold">
              MMA za svih
            </p>
            <p className="text-xs  font-light">
              Svatko je dobrodošao neovisno o predznanju!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 group">
          <div className="bg-purple-500/30 group-hover:bg-purple-500/20 p-2 rounded-md">
            <Euro className="text-purple-500 h-5 w-5" />
          </div>
          <div>
            <p className="group-hover:text-purple-500 font-semibold">
              Probni trening je besplatan
            </p>
            <p className="text-xs  font-light">Dođi i isprobaj bez obaveza!</p>
          </div>
        </div>
      </div>
      <HeroLearnMore />
    </section>
  );
};
