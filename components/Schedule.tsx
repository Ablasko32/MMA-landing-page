"use client";

import { motion } from "motion/react";

export const Schedule = () => {
  return (
    <section id="raspored-treninga">
      <p className="text-center text-xs mb-1 opacity-80 tracking-wide">
        Treninzi se održavaju:
      </p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="font-subtitle text-center text-4xl!"
      >
        <motion.span
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block"
        >
          Pon-pet
        </motion.span>
        <motion.span
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="ml-2 inline-block"
        >
          17h
        </motion.span>
      </motion.p>
    </section>
  );
};
