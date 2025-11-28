"use client";

import { motion } from "motion/react";

export const Subtitle = ({ text }: { text: string }) => {
  return (
    <h2 className="mb-12 font-subtitle md:mb-14 lg:mb-22 lg:mt-12 md:text-5xl! w-full text-center text-4xl!">
      {text}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="h-[1px] bg-white bg-linear-to-r from-black via-white to-black w-28 block mx-auto"
      />
    </h2>
  );
};
