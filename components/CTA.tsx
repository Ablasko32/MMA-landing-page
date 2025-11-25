import { SquareMousePointer } from "lucide-react";
import { Button } from "./ui/Button";

export const CTA = () => {
  return (
    <div className="bg-linear-to-r from-black  via-purple-500/50  to-black  w-full h-40 relative">
      <div className="flex flex-col h-full justify-center gap-4 items-center">
        <h2 className="font-subtitle ">Jeste li spremni na probni trening?</h2>
        <Button
          icon={<SquareMousePointer className="h-5 w-5" />}
          className="ml-4 shadow-2xl shadow-purple-700"
          label="Prijavite se"
        />

        <div className="bg-[url('/bg-fist.svg')]   md:h-70 md:w-70 md:-top-20 md:right-120 h-50 w-50 bg-center bg-cover md:opacity-10 opacity-20 absolute -top-10 -right-6"></div>
      </div>
    </div>
  );
};
