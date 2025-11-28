"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
interface IButtonProps {
  label: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ label, className, icon, onClick }: IButtonProps) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-md p-[2px] font-title   focus:outline-none",
        className
      )}
    >
      {/* Updated gradient using purple shades */}
      <span className="absolute inset-[-1000%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.purple.300)_0%,theme(colors.purple.500)_50%,theme(colors.purple.300)_100%)]" />

      <span className="inline-flex tracking-widest uppercase h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950  py- md:text-md lg:text-xl text-sm font-medium text-white backdrop-blur-3xl gap-2 px-6">
        {icon} {label}
      </span>
    </motion.button>
  );
};
