"use client";
import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = {
    frontend: ["React", "Nextjs", "Shadcn", "SCSS", "Tailwindcss", "Framer-Motion", "Recoil", "Tanstack Query"],
    backend: ["Nodejs", "Honojs", "Expressjs", "NPM"],
    dbServices: ["Cloudflare Workers", "Docker", "Appwrite", "Supabase", "Prisma ORM", "Postman", "Postgres", "MongoDB"],
    learning: ["Rust"],
  };

  const TechBadge = ({ name }: { name: string }) => (
    <div className="px-2.5 py-1 text-xs font-mono border border-zinc-600 text-zinc-200 hover:border-zinc-400 hover:text-white bg-transparent hover:bg-zinc-900/50 rounded transition-all">
      {name}
    </div>
  );

  const TechCategory = ({ title, items }: { title: string; items: string[] }) => (
    <div className="flex flex-col gap-1.5">
      <p className="font-semibold text-xs tracking-wide text-white">{title}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      className="flex w-full rounded-xl border border-dark-3 bg-dark-1 transform-gpu cursor-grab sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-5 z-8 max-sm:h-max relative p-0.5 [box-shadow:0_0px_60px_-25px_#ffffff1f_inset]"
      draggable="false"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col h-full overflow-hidden justify-start w-full group pb-4 border border-dark-4 rounded-xl text-white bg-[#0a0a0a]">
          <div className="h-max px-4 pt-4">
            <div className="flex gap-2">
              <p className="text-4xl font-bold">{"{"}</p>
              <p className="text-4xl font-bold">{"}"}</p>
            </div>
            <h1 className="text-5xl font-extrabold py-3 relative w-full">
              TECH <br />
              STACK
              <span className="absolute bottom-1 left-0 w-0 h-1 bg-white rounded-full transition-all duration-500 group-hover:w-[120px]"></span>
            </h1>
          </div>

          <div
            className="relative mt-4 w-full flex flex-col overflow-y-auto p-4 gap-6 max-h-96 text-zinc-200/80 scrollbar-hide"
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
