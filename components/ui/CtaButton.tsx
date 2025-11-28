"use client";

import { SquareMousePointer } from "lucide-react";
import { Button } from "./Button";

export const CtaButton = () => {
  return (
    <Button
      icon={<SquareMousePointer className="h-5 w-5" />}
      className="ml-4  animate-pulse duration-350 z-20 shadow-2xl shadow-purple-700"
      label="Prijavite se"
      onClick={() => {
        window.location.href = `tel:${
          process.env.NEXT_PUBLIC_PHONE_NUMBER as string
        }`;
      }}
    />
  );
};
