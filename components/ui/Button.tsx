"use client";
import { cn } from "@/lib/utils";

interface IButtonProps {
  label: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ label, className, icon, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      {/* Updated gradient using purple shades */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.purple.300)_0%,theme(colors.purple.500)_50%,theme(colors.purple.300)_100%)]" />

      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {icon} {label}
      </span>
    </button>
  );
};
