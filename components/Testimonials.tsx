"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  { name: "Stefano", text: "Najjači trener i treninzi su top", stars: 5 },
  {
    name: "Šajo",
    text: "Intenzivni treninzi, dobra ekipa i vješt trener",
    stars: 5,
  },
  { name: "Tin", text: "Atmosfera i obuka na najvišoj razini", stars: 5 },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full px-4">
      <div className="flex flex-row pb-10  lg:justify-center gap-4 p-5 lg:gap-8 w-full lg:overflow-hidden overflow-x-auto snap-x snap-mandatory">
        {TESTIMONIALS.map((testimonial, idx) => (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border bg-linear-to-br from-black via-black to-purple-500/20  border-purple-500/40 shadow-2xl shadow-purple-500/10 rounded-xl lg:w-72 p-4 min-w-[12rem]  flex-shrink-0 snap-start"
            key={idx}
          >
            <p className="text-md mb-3  text-sm md:text-md tracking-wide ">
              &quot;{testimonial.text}&quot;
            </p>

            <div className="flex flex-col items-end ">
              <div className="flex gap-px items-center ">
                {Array.from({ length: testimonial.stars }).map((_, starIdx) => (
                  <Star className="h-3 w-3 text-amber-300 " key={starIdx} />
                ))}
              </div>
              <p className=" tracking-wide text-xs mt-1 opacity-80 ">
                {testimonial.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
