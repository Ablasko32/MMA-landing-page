"use client";
import { motion } from "motion/react";

interface ILinkButtonProps {
  text: string;
  icon: React.ReactElement;
  href: string;
  type?: "link" | "newpage";
}

export const LinkButton = ({
  text,
  icon,
  href,
  type = "link",
}: ILinkButtonProps) => {
  if (type === "newpage") {
    return (
      <motion.a
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.9 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex tracking-wide items-center gap-1 hover:text-purple-500 hover:underline transition-all duration-150"
      >
        <span>{icon}</span>
        <span>{text}</span>
      </motion.a>
    );
  }

  return (
    <motion.a
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      className="flex items-center gap-1 hover:text-purple-500 hover:underline transition-all duration-150"
    >
      <span>{icon}</span>
      <span>{text}</span>
    </motion.a>
  );
};
