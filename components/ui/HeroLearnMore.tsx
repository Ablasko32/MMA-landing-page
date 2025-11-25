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
      className="mt-10 uppercase font-bold"
      label="Saznaj više"
    />
  );
};
