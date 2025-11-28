import Image from "next/image";
import { StickyScroll } from "./ui/StickyScroll";
import { Subtitle } from "./ui/Subtitle";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    image: "/boxer-kicking.webp",
    title: "Najpopularniji borilački sport današnjice",
    description:
      "MMA spaja najbolje tehnike iz različitih borilačkih sportova, od boksa i kickboxinga do jiu-jitsua i hrvanja. Ova raznolikost omogućava borcima da razviju sveobuhvatan skup veština i prilagode se različitim stilovima borbe.",
    content: (
      <div className="relative w-full h-full">
        <Image
          quality={90}
          src={"/boxer-kicking.webp"}
          alt="Muškarac udara nogom"
          fill
          className="object-cover object-center rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Fitnes i kondicija",
    image: "/workout.webp",
    description:
      "MMA trening poboljšava vašu kondiciju, snagu i izdržljivost. Intenzivni treninzi uključuju kardio, snagu i fleksibilnost, što doprinosi općem zdravlju i boljoj fizičkoj spremnosti.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/workout.webp"
          alt="Osobe koje treniraju"
          fill
          quality={90}
          className="object-cover object-center rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Gubitak kilograma",
    image: "/scale.webp",
    description:
      "Intenzivni treninzi MMA pomažu u sagorevanju kalorija i ubrzavaju metabolizam, što može biti efikasan način za gubitak viška kilograma i održavanje zdrave telesne težine.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/scale.webp"
          alt="Noge na vazi"
          fill
          quality={90}
          className="object-cover object-center rounded-md"
        />
      </div>
    ),
  },
];

export const Features = () => {
  return (
    <section className="w-full max-w-7xl md:mx-auto " id="features">
      <Subtitle text={"Zašto odabrati MMA"} />
      <div className="block lg:hidden">
        <StickyScroll content={FEATURES} />
      </div>

      <div className="lg:flex hidden flex-col  gap-24 w-5xl  items-center">
        {FEATURES.map((feature, idx) => {
          return (
            <div
              key={idx}
              className={cn(
                "flex justify-between w-6xl mx- gap-12  ",
                idx % 2 === 1 ? "flex-row-reverse" : ""
              )}
            >
              <div className="">
                <h3 className="text-2xl font-bold text-slate-100">
                  {feature.title}
                </h3>
                <p className="text leading-7 mt-10 max-w-xl text-slate-300">
                  {feature.description}
                </p>
              </div>

              <div className="relative h-90 w-1/3 rounded-md overflow-hidden ">
                <Image
                  className="object-cover object-center hover:scale-105 duration-150"
                  quality={90}
                  alt="Slika treninga ili borbe"
                  src={feature.image ?? null}
                  fill
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
