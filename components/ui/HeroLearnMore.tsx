"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";

export const HeroLearnMore = () => {
  return (
    <Button
      onClick={() => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
          const yOffset = -70;
          const y =
            featuresSection.getBoundingClientRect().top +
            window.scrollY +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }}
      icon={<ChevronDown />}
      className="mt-8 md:mt-18 lg:text-2xl! animate-pulse duration-350 uppercase font-bold shadow-purple-700/40 shadow-2xl lg:mt-16"
      label="Pridruži nam se"
    />
  );
};
