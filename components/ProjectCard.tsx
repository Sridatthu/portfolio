"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

const ProjectCard = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = theme === "dark";

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Draggable element"
      className={`flex w-full rounded-xl border transform-gpu cursor-grab row-start-4 sm:col-start-7 sm:col-end-9 sm:row-start-2 sm:row-end-4 p-0 z-8 max-sm:h-max mx-auto overflow-hidden relative hover:scale-125 transition-all duration-300 ${
        isDark
          ? "bg-purple-600 border-dark-3 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset]"
          : "bg-purple-400 border-purple-300 [box-shadow:0_0px_20px_-10px_#c084fc40_inset]"
      } border-none`}
      draggable="false"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <div className="w-full h-full">
        <Link href="/projects">
          <div className={`flex flex-col justify-start items-start relative group w-full h-full p-2 max-sm:p-5 rounded-lg max-sm:h-[350px] overflow-hidden transition-all cursor-pointer ${
            isDark ? "bg-purple-600/70" : "bg-purple-300/70"
          }`}>
            <div className="absolute inset-0 bg-transparent"></div>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`size-12 max-sm:size-20 lg:size-14 my-2 animate-spin-slow stroke-[2.5] relative z-10 transition-colors text-black`}
            >
              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
              <path d="M12 2v2"></path>
              <path d="M12 22v-2"></path>
              <path d="m17 20.66-1-1.73"></path>
              <path d="M11 10.27 7 3.34"></path>
              <path d="m20.66 17-1.73-1"></path>
              <path d="m3.34 7 1.73 1"></path>
              <path d="M14 12h8"></path>
              <path d="M2 12h2"></path>
              <path d="m20.66 7-1.73 1"></path>
              <path d="m3.34 17 1.73-1"></path>
              <path d="m17 3.34-1 1.73"></path>
              <path d="m11 13.73-4 6.93"></path>
            </svg>

            <h2 className={`sm:text-[1.9rem] max-sm:text-6xl overflow-hidden lg:text-[2.2rem] leading-7 lg:leading-10 font-bold w-full text-wrap relative z-10 transition-colors text-black`}>
              PROJECT
              <br />
              SSS
            </h2>

            <div className={`flex flex-col absolute bottom-4 right-4 text-xl leading-snug relative z-10 transition-colors ${
              isDark ? "text-black" : "text-white"
            }`}>
              <p className="font-extrabold">工</p>
              <p className="font-extrabold">芸</p>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
