"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const SocialLinks = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { theme } = useTheme();
   const [mounted, setMounted] = useState(false);
      
        useEffect(() => {
          setMounted(true);
        }, []);
      
        if (!mounted) return null;
  const isDark = theme === "dark";

  const topLinks = [
    { name: "github", icon: "/icons/github.svg", url: "https://github.com/Sridatthu" },
    { name: "x.com", icon: "/icons/x.svg", url: "https://x.com/483Sri" },
  ];

  const bottomLinks = [
    { name: "gmail", icon: "/icons/gmail.svg", url: "mailto:sridatthu18@gmail.com" },
    { name: "discord", icon: "/icons/discord.svg", url: "https://discordapp.com/users/816919689350742026" },
    { name: "linkedIn", icon: "/icons/linkdin.svg", url: "https://www.linkedin.com/in/sri-datthu-goud/" },
  ];

  const SocialIcon = ({ name, icon, url }: { name: string; icon: string; url: string }) => (
    <li className="group relative">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`border rounded-2xl flex items-center justify-center p-0.5 max-lg:size-[3.4rem] lg:size-[3.8rem] max-sm:size-[3.2rem] transition-all hover:shadow-lg ${
          isDark ? "border-dark-4" : "border-gray-300"
        }`}
        href={url}
        onMouseEnter={() => setHoveredLink(name)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        <div className={`border size-full flex items-center justify-center p-2 rounded-xl transition-colors ${
          isDark ? "border-dark-3 bg-black" : "border-gray-300 bg-white"
        }`}>
          <Image
  alt={`${name} logo`}
  src={icon}
  width={20}
  height={20}
  className={`w-[80%] ${!isDark ? "invert" : ""}`}
  priority={false}
/>

        </div>
      </a>
      {hoveredLink === name && (
        <div className={`absolute w-16 left-0 -top-6 origin-right flex opacity-100 items-center justify-center transition-all duration-500 ease-in-out font-bold rounded-md text-sm whitespace-nowrap z-50 ${
          isDark ? "text-black bg-white" : "text-white bg-black"
        }`}>
          {name}
        </div>
      )}
    </li>
  );

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Draggable element"
      className="relative flex rounded-xl border-none transform-gpu cursor-grab row-start-2 sm:col-start-7 sm:col-end-9 sm:row-start-1 sm:row-end-2 w-full sm:h-max sm:mt-auto sm:mr-auto z-7 max-sm:h-max bg-transparent transition-all duration-300"
      draggable="false"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
      <div className="w-full h-full">
        <div className="relative h-full p-0.5 gap-0.5 flex flex-col max-sm:flex-row max-sm:justify-center justify-between mr-auto bg-transparent">
          <ul className="flex w-max justify-center gap-0.5 items-center h-1/2">
            <li className={`m-0 flex items-center justify-center p-2 max-lg:size-[3.4rem] lg:size-[3.8rem] max-sm:text-[1.7rem] lg:text-[2.2rem] max-lg:text-[1.7rem] font-bold leading-7 lg:leading-8 max-sm:hidden transition-colors ${
              isDark ? "text-white" : "text-black"
            }`}>
              <h2>LIN<br />KS.</h2>
            </li>
            {topLinks.map((link) => (
              <SocialIcon key={link.name} name={link.name} icon={link.icon} url={link.url} />
            ))}
          </ul>
          <ul className="flex w-max justify-center gap-0.5 items-center h-1/2">
            {bottomLinks.map((link) => (
              <SocialIcon key={link.name} name={link.name} icon={link.icon} url={link.url} />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialLinks;
