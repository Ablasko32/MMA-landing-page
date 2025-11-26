import Image from "next/image";
import { StickyScroll } from "./ui/StickyScroll";

export const Features = () => {
  return (
    <section className="w-full max-w-7xl md:mx-auto mt-4" id="features">
      <h2 className="mb-12 font-subtitle w-full text-center text-4xl!">
        Zašto odabrati MMA?
      </h2>
      <StickyScroll
        content={[
          {
            title: "Najpopularniji borilački sport današnjice",
            description:
              "MMA spaja najbolje tehnike iz različitih borilačkih sportova, od boksa i kickboxinga do jiu-jitsua i hrvanja. Ova raznolikost omogućava borcima da razviju sveobuhvatan skup veština i prilagode se različitim stilovima borbe.",
            content: (
              <div className="relative w-full h-full">
                <Image
                  quality={90}
                  src="/boxer-kicking.webp"
                  alt="Muškarac udara nogom"
                  fill
                  className="object-cover object-center rounded-md"
                />
              </div>
            ),
          },
          {
            title: "Fitnes i kondicija",
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
        ]}
      />
    </section>
  );
};
