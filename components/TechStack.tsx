"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const TechStack = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
    
      useEffect(() => {
        setMounted(true);
      }, []);
    
      if (!mounted) return null;
  const isDark = theme === "dark";

  const technologies = {
    frontend: ["React", "Nextjs", "Shadcn", "SCSS", "Tailwindcss", "Framer-Motion", "Recoil", "Tanstack Query"],
    backend: ["Nodejs", "Honojs", "Expressjs", "NPM"],
    dbServices: ["Cloudflare Workers", "Docker", "Appwrite", "Supabase", "Prisma ORM", "Postman", "Postgres", "MongoDB"],
    learning: ["Rust"],
  };

  const TechBadge = ({ name }: { name: string }) => (
    <div
      className={`px-2.5 py-1 text-xs font-mono border rounded transition-all ${
        isDark
          ? "border-zinc-600 text-zinc-200 hover:border-zinc-400 hover:text-white bg-transparent hover:bg-zinc-900/50"
          : "border-gray-300 text-gray-700 hover:border-gray-500 hover:text-black bg-white hover:bg-gray-50"
      }`}
    >
      {name}
    </div>
  );

  const TechCategory = ({ title, items }: { title: string; items: string[] }) => (
    <div className="flex flex-col gap-1.5">
      <p className={`font-semibold text-xs tracking-wide transition-colors ${isDark ? "text-white" : "text-black"}`}>
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      className={`flex w-full rounded-xl border transform-gpu cursor-grab sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-5 z-8 max-sm:h-max relative p-0.5 transition-all duration-300 ${
        isDark
          ? "border-dark-3 bg-dark-1 [box-shadow:0_0px_60px_-25px_#ffffff1f_inset]"
          : "border-gray-200 bg-white [box-shadow:0_0px_20px_-10px_#00000010_inset]"
      }`}
      draggable="false"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full h-full">
        <div
          className={`flex flex-col h-full overflow-hidden justify-start w-full group pb-4 border rounded-xl transition-all duration-300 ${
            isDark
              ? "text-white border-dark-4 bg-[#0a0a0a]"
              : "text-black border-gray-200 bg-white"
          }`}
        >
          <div className="h-max px-4 pt-4">
            <div className="flex gap-2">
              <p className={`text-4xl font-bold transition-colors ${isDark ? "text-white" : "text-black"}`}>
                {"{"}
              </p>
              <p className={`text-4xl font-bold transition-colors ${isDark ? "text-white" : "text-black"}`}>
                {"}"}
              </p>
            </div>
            <h1 className={`text-5xl font-extrabold py-3 relative w-full transition-colors ${isDark ? "text-white" : "text-black"}`}>
              TECH <br />
              STACK
              <span
                className={`absolute bottom-1 left-0 w-0 h-1 rounded-full transition-all duration-500 group-hover:w-[120px] ${
                  isDark ? "bg-white" : "bg-black"
                }`}
              ></span>
            </h1>
          </div>

          <div
            className={`relative mt-4 w-full flex flex-col overflow-y-auto p-4 gap-6 max-h-96 transition-colors scrollbar-hide ${
              isDark ? "text-zinc-200/80" : "text-gray-600"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
            <TechCategory title="Frontend:" items={technologies.frontend} />
            <TechCategory title="Backend:" items={technologies.backend} />
            <TechCategory title="Db & Services:" items={technologies.dbServices} />
            <TechCategory title="Currently Learning:" items={technologies.learning} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;
