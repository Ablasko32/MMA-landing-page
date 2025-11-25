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
        initial={{ scale: 1, color: "white" }}
        whileHover={{ scale: 0.95, color: "#A78BFA" }}
        whileTap={{ scale: 0.9 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex tracking-wide items-center gap-1 text-white underline"
      >
        <span>{icon}</span>
        <span>{text}</span>
      </motion.a>
    );
  }

  return (
    <motion.a
      initial={{ scale: 1, color: "white" }}
      whileHover={{ scale: 0.95, color: "#A78BFA" }}
      whileTap={{ scale: 0.9 }}
      href={href}
      className="flex items-center gap-1 text-white underline   "
    >
      <span>{icon}</span>
      <span>{text}</span>
    </motion.a>
  );
};
