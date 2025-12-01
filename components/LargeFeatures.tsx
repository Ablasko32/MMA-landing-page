"use client";
import { cn } from "@/lib/utils";
import { FEATURES } from "./Features";
import Image from "next/image";
import { motion } from "motion/react";

export const LargeFeatures = () => {
  return (
    <div className="lg:flex hidden  w-full flex-col  gap-18 items-center">
      {FEATURES.map((feature, idx) => {
        return (
          <div
            key={idx}
            className={cn(
              "flex justify-between w-4xl mx- gap-12  ",
              idx % 2 === 1 ? "flex-row-reverse" : ""
            )}
          >
            <motion.div
              initial={{ x: idx % 2 === 1 ? 400 : -400 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <h3 className="text-2xl font-bold text-slate-100">
                {feature.title}
              </h3>
              <p className="text leading-7 mt-10 max-w-xl text-slate-300">
                {feature.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ x: idx % 2 === 1 ? -400 : 400 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-90 w-1/3 rounded-md overflow-hidden shadow-2xl shadow-purple-500/18 "
            >
              <Image
                className="object-cover object-center hover:scale-105 duration-150 filter brightness-90 "
                quality={90}
                alt="Slika treninga ili borbe"
                src={feature.image ?? null}
                fill
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
