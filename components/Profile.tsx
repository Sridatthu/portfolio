"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pfp from "../public/pfp.webp";
import Image from "next/image";
import { MorphingText } from "./ui/morphing-text";
import { useThemeTransition } from "@/hooks/useThemeTransition";

const Profile = () => {
  const [time, setTime] = useState<string>("");
  const { theme, toggleTheme } = useThemeTransition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date().toLocaleString("en-US"));

    const interval = setInterval(() => {
      setTime(new Date().toLocaleString("en-US"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Draggable element"
      className={`relative flex w-full rounded-xl border transform-gpu cursor-grab sm:col-start-3 sm:col-end-7 sm:row-start-1 sm:row-end-3 z-10 max-sm:h-max p-0.5 transition-all duration-300 ${
        isDark
          ? "border-dark-3 bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset]"
          : "border-gray-200 bg-white [box-shadow:0_0px_20px_-10px_#00000010_inset]"
      }`}
      draggable="false"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full h-full">
        <div className={`flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-between max-sm:h-[275px] border rounded-xl transition-all duration-300 ${
          isDark
            ? "border-dark-3 text-white bg-[#0a0a0a]"
            : "border-gray-200 text-black bg-white"
        }`}>
          {/* Header with Theme Toggle */}
          <div className="w-full flex justify-between items-start">
            <div className="flex gap-3">
              <Image
                alt="profile"
                src={pfp}
                width={64}
                height={64}
                className="size-16 rounded-3xl opacity-90"
                priority
              />
              <div>
                <p className={`font-bold font-mono text-lg transition-colors ${isDark ? "text-white" : "text-black"}`}>
                  Sri Datthu Goud.
                </p>
                <p className={`text-xs font-mono transition-colors ${isDark ? "text-zinc-400" : "text-gray-500"}`}>
                  @483Sri
                </p>
              </div>
            </div>

            {/* Theme Toggle Button with Transition */}
            <button
              onClick={() => toggleTheme()}
              className={`inline-flex items-center justify-center text-lg font-medium transition-all duration-300 h-9 w-9 rounded-full border-none shrink-0 ${
                isDark ? "hover:bg-white/10" : "hover:bg-black/10"
              }`}
              aria-label="Toggle theme"
            >
              <span className={`transition-all duration-300 ${isDark ? "scale-100" : "scale-0"}`}>
                ☀️
              </span>
              <span className={`absolute transition-all duration-300 ${isDark ? "scale-0" : "scale-100"}`}>
                🌙
              </span>
            </button>
          </div>

          {/* Middle Section - Centered */}
          <div className="flex flex-col gap-3">
            {/* Bio with MorphingText */}
            <div className={`flex items-center gap-1 text-base transition-colors ${isDark ? "text-white" : "text-black"}`}>
              <span className="font-mono">I build</span>
              <div className="h-7 w-24 relative">
                <MorphingText texts={["backend", "frontend", "WebApps"]} />
              </div>
            </div>

            <p className={`text-base font-mono leading-tight transition-colors ${isDark ? "text-white" : "text-gray-800"}`}>
              Hello, I'm Sri Datthu! a 23 year old developer based in Hyderabad - India.
            </p>
          </div>

          {/* Bottom Section - Footer */}
          <div className="w-full flex justify-between items-end">
            <div className="max-sm:hidden">
              <p className={`text-sm font-mono leading-tight transition-colors ${isDark ? "text-zinc-400/70" : "text-gray-600"}`}>
                &quot;How do i center <br />a div again??&quot;
              </p>
            </div>

            <div className="ml-auto flex flex-col items-end gap-1">
              
              <div className={`font-mono flex items-center gap-1 text-xs transition-colors ${isDark ? "text-zinc-400" : "text-gray-800"}`}>
                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-xs">Available for work</p>
              </div>
              <p className={`text-xs font-mono transition-colors ${isDark ? "text-zinc-500" : "text-gray-500"}`}>
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
