import Image from "next/image";
import { StickyScroll } from "./ui/StickyScroll";
import { Subtitle } from "./ui/Subtitle";
import { LargeFeatures } from "./LargeFeatures";

export const FEATURES = [
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

      <LargeFeatures />
    </section>
  );
};
