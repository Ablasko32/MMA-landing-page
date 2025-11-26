"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";

export const HeroLearnMore = () => {
  return (
    <Button
      onClick={() => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
      icon={<ChevronDown />}
      className="mt-8 animate-pulse duration-250 uppercase font-bold shadow-purple-700/40 shadow-2xl lg:mt-18"
      label="Saznaj više"
    />
  );
};
