"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const DailyToolStack = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = theme === "dark";

  const tools = [
    { name: "VSCode", icon: "/icons/vscode.webp" },
    { name: "v0", icon: "/icons/v0.svg" },
    { name: "Dia", icon: "/icons/dia.svg" },
    { name: "Motion", icon: "/icons/motion.svg" },
    { name: "Figma", icon: "/icons/figma_logo.svg" },
    { name: "T3", icon: "/icons/t3.svg" },
  ];

  const ToolIcon = ({ icon, name }: { icon: string; name: string }) => (
    <div className={`aspect-square w-[3rem] max-sm:max-w-[2.75rem] p-0 rounded-2xl hover:scale-125 transition-all shadow-lg duration-300 ease-in-out opacity-90 cursor-pointer ${
      isDark ? "bg-white hover:shadow-white/40" : "bg-gray-100 hover:shadow-gray-400/40"
    }`}>
      <Image alt={name} src={icon} width={48} height={48} className="w-full aspect-square p-2" priority={false} />
    </div>
  );

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Draggable element"
      className="relative flex w-full rounded-xl border-none bg-transparent transform-gpu cursor-grab sm:col-start-3 sm:col-end-7 sm:row-start-3 sm:row-end-6 z-9 max-sm:h-max transition-all duration-300"
      draggable="false"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <div className="w-full h-full">
        <div className="h-full grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-7 max-sm:py-2 max-sm:gap-2 !shadow-none">
          <div className="row-start-2 row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-8">
            <div className={`h-full p-px border w-max mx-auto rounded-3xl bg-transparent transition-colors ${
              isDark ? "border-dark-4" : "border-gray-300"
            }`}>
              <div className={`relative w-max border rounded-3xl flex flex-col items-center justify-center h-full gap-2.5 max-sm:px-3 px-2 py-2 mx-auto max-sm:flex-row flex-wrap max-sm:w-full backdrop-blur-2xl transition-colors ${
                isDark ? "border-dark-3 bg-zinc-800/10" : "border-gray-300 bg-gray-100/10"
              }`}>
                {tools.map((tool) => (
                  <ToolIcon key={tool.name} icon={tool.icon} name={tool.name} />
                ))}
              </div>
            </div>
          </div>

          <div className={`sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-3 flex flex-col items-start justify-center gap-0 transition-colors ${
            isDark ? "text-white" : "text-black"
          }`}>
            <h1 className="text-4xl max-sm:text-5xl font-extrabold font-mono">DAILY</h1>
            <p className="text-3xl max-sm:text-4xl font-bold">Tool</p>
            <h1 className="text-[2.7rem] max-sm:text-7xl leading-[2.8rem] font-bold">STACK.</h1>
          </div>

          <div className={`sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-4 relative border rounded-3xl max-sm:h-[400px] transition-colors ${
            isDark ? "border-zinc-700/20" : "border-gray-300/40"
          }`}>
            <div className="absolute p-2 size-full rounded-3xl flex items-center justify-center">
              <p className={`font-mono text-center transition-colors ${isDark ? "text-white" : "text-black"}`}>
                Fetching from NASA...
              </p>
            </div>
          </div>

          <div className="sm:col-start-4 sm:col-end-6 sm:row-start-4 sm:row-end-5"></div>

          <div className="row-start-7 sm:col-start-2 sm:col-end-4 sm:row-start-3 sm:row-end-4 relative max-sm:hidden">
            <Image alt="waves" src="/assets/waves.svg" width={300} height={300} className="opacity-90 object-cover rounded-2xl size-[90%]" priority={false} />
          </div>

          <div className="sm:col-start-2 sm:col-end-4 sm:row-start-4 sm:row-end-7 rounded-3xl bg-transparent group relative">
            <Image alt="track" src="/assets/fox.webp" width={1024} height={1024} className="aspect-square size-full object-cover rounded-3xl" priority={false} />
            <a
              href="https://open.spotify.com/track/4yJZP61jBhVTesHBZ0gpQn"
              target="_blank"
              rel="noopener noreferrer"
              className={`border absolute size-10 bottom-3 right-3 translate-y-7 scale-50 opacity-0 group-hover:translate-y-0 group-hover:scale-100 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all rounded-full flex items-center justify-center duration-300 max-sm:group-hover:scale-150 max-sm:bottom-7 max-sm:right-7 max-sm:translate-y-12 p-px backdrop-blur-2xl backdrop-saturate-200 ${
                isDark ? "border-dark-5/10 bg-zinc-800/30" : "border-gray-400/20 bg-gray-200/30"
              }`}
            >
              <div className={`border p-2.5 rounded-full transition-colors ${
                isDark ? "border-dark-5/30" : "border-gray-300/50"
              }`}>
                <Image alt="play" src="/icons/play.svg" width={30} height={30} className={`size-full aspect-square ${isDark ? "invert" : ""}`} priority={false} />
              </div>
            </a>
          </div>

          <div className="sm:col-start-2 sm:col-end-4 sm:row-start-7 sm:row-end-8 p-1">
            <a href="https://open.spotify.com/track/4yJZP61jBhVTesHBZ0gpQn" target="_blank" rel="noopener noreferrer" className={`font-bold text-lg transition-colors hover:opacity-80 ${
              isDark ? "text-white" : "text-black"
            }`}>
              Fox on the Run
            </a>
            <div className={`flex justify-between text-xs pointer-events-none transition-colors ${
              isDark ? "text-zinc-500" : "text-gray-500"
            }`}>
              <p>By: Sweet</p>
              <p className="font-mono">2016</p>
            </div>
          </div>

          <div className={`sm:col-start-4 sm:col-end-6 sm:row-start-5 sm:row-end-8 relative flex flex-col-reverse items-center bg-transparent justify-start p-1 transition-colors ${
            isDark ? "text-zinc-300" : "text-gray-700"
          }`}>
            <Image alt="naruto" src="/assets/naruto.webp" width={300} height={300} className="object-cover rounded-2xl size-[80%] max-sm:size-full" priority={false} />
            <p className="text-wrap text-center text-sm max-sm:text-lg font-mono font-semibold max-sm:font-bold">
              &quot;I'm gonna be Hokage one day.&quot;
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DailyToolStack;
