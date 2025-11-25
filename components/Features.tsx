import { StickyScroll } from "./ui/StickyScroll";

export const Features = () => {
  return (
    <section className="w-full mt-4" id="features">
      <h2 className="mb-12 font-subtitle w-full text-center text-4xl!">
        Zašto odabrati MMA?
      </h2>
      <StickyScroll
        content={[
          {
            title: "Najpopularniji borilački sport današnjice",
            description:
              "MMA spaja najbolje tehnike iz različitih borilačkih sportova, od boksa i kickboxinga do jiu-jitsua i hrvanja. Ova raznolikost omogućava borcima da razviju sveobuhvatan skup veština i prilagode se različitim stilovima borbe.",
            content: <div>Version control</div>,
          },
          {
            title: "Fitnes i kondicija",
            description:
              "MMA trening poboljšava vašu kondiciju, snagu i izdržljivost. Intenzivni treninzi uključuju kardio, snagu i fleksibilnost, što doprinosi općem zdravlju i boljoj fizičkoj spremnosti.",
            content: <div>bbbbb</div>,
          },
          {
            title: "Gubitak kilograma",
            description:
              "Intenzivni treninzi MMA pomažu u sagorevanju kalorija i ubrzavaju metabolizam, što može biti efikasan način za gubitak viška kilograma i održavanje zdrave telesne težine.",
            content: <div>bbbbb</div>,
          },
        ]}
      />
    </section>
  );
};
