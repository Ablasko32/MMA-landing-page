import { CtaButton } from "./ui/CtaButton";

export const CTA = () => {
  return (
    <div className="bg-linear-to-r from-black  via-purple-500/50  to-black  w-full h-40 ">
      <div className="flex flex-col h-full md:max-w-4xl mx-auto justify-center gap-4 items-center relative">
        <h2 className="font-subtitle z-20 ">
          Jeste li spremni na probni trening?
        </h2>
        <CtaButton />

        <div className="bg-[url('/bg-fist.svg')] z-10  md:h-70 md:w-70 md:-top-20 md:right-120 h-50 w-50 bg-center bg-cover md:opacity-20 opacity-20 absolute -top-8 right-4"></div>
      </div>
    </div>
  );
};
