"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = () => {
  const ripples = [
    { size: 230, delay: 0, opacity: 0.23 },
    { size: 310, delay: 0.06, opacity: 0.2 },
    { size: 390, delay: 0.12, opacity: 0.17 },
    { size: 470, delay: 0.18, opacity: 0.14 },
    { size: 550, delay: 0.24, opacity: 0.11 },
    { size: 630, delay: 0.3, opacity: 0.08 },
    { size: 710, delay: 0.36, opacity: 0.05 },
    { size: 790, delay: 0.42, opacity: 0.02 },
  ];

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Draggable element"
      className="flex w-full rounded-xl border border-dark-3 bg-purple-600 transform-gpu [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab row-start-4 sm:col-start-7 sm:col-end-9 sm:row-start-2 sm:row-end-4 p-0 z-8 max-sm:h-max mx-auto overflow-hidden border-none relative hover:scale-125 transition-transform duration-300"
      draggable="false"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <div className="w-full h-full">
        <Link href="/projects">
          <div className="flex flex-col justify-start items-start relative group w-full h-full p-2 max-sm:p-5 rounded-lg max-sm:h-[350px] overflow-hidden transition-all cursor-pointer bg-blue-500/70">
            <div className="absolute inset-0 bg-transparent">
              {ripples.map((ripple, index) => (
                <div
                  key={index}
                  className="absolute animate-ripple rounded-full shadow-xl border bg-white"
                  style={{
                    width: `${ripple.size}px`,
                    height: `${ripple.size}px`,
                    opacity: ripple.opacity,
                    animationDelay: `${ripple.delay}s`,
                    borderStyle: index === 7 ? "dashed" : "solid",
                    borderWidth: "1px",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                />
              ))}
            </div>

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
              className="size-12 max-sm:size-20 lg:size-14 my-2 animate-spin-slow stroke-[2.5] relative z-10 text-black"
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

            <h2 className="sm:text-[1.9rem] max-sm:text-6xl overflow-hidden lg:text-[2.2rem] leading-7 lg:leading-10 font-bold w-full text-wrap relative z-10 text-black">
              PROJECT<br />SSS
            </h2>

            <div className="flex flex-col absolute bottom-4 right-4 text-xl leading-snug relative z-10">
              <p className="font-extrabold text-black">工</p>
              <p className="font-extrabold text-black">芸</p>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
