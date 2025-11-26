"use client";

import { Clock, Euro, Users } from "lucide-react";
import { motion } from "motion/react";

export const HeroQuickFeatures = () => {
  return (
    <div className="flex md:flex-row z-10 items-start lg:gap-6 gap-5 mt-10 flex-col lg:text-xl lg:mt-20">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2 group"
      >
        <div className="bg-purple-500/30 p-2 rounded-md group-hover:bg-purple-500/20">
          <Clock className="text-purple-500 h-5 w-5" />
        </div>
        <div>
          <p className="group-hover:text-purple-500 font-semibold">
            PON-PET 17:00h
          </p>
          <p className="text-xs font-light">Treninzi svaki dan tokom tjedna!</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2  group  "
      >
        <div className="bg-purple-500/30 p-2 rounded-md group-hover:bg-purple-500/20">
          <Users className="text-purple-500 h-5 w-5 " />
        </div>
        <div>
          <p className="group-hover:text-purple-500 font-semibold">
            MMA za svih
          </p>
          <p className="text-xs  font-light">
            Svatko je dobrodošao neovisno o predznanju!
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-2 group"
      >
        <div className="bg-purple-500/30 group-hover:bg-purple-500/20 p-2 rounded-md">
          <Euro className="text-purple-500 h-5 w-5" />
        </div>
        <div>
          <p className="group-hover:text-purple-500 font-semibold">
            Probni trening je besplatan
          </p>
          <p className="text-xs  font-light">Dođi i isprobaj bez obaveza!</p>
        </div>
      </motion.div>
    </div>
  );
};
