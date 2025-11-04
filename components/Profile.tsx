"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pfp from "../public/pfp.webp";
import Image from "next/image";
import { MorphingText } from "./ui/morphing-text";

const Profile = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(new Date().toLocaleString("en-US"));

    const interval = setInterval(() => {
      setTime(new Date().toLocaleString("en-US"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Draggable element"
      className="relative flex w-full rounded-xl border border-dark-3 bg-dark-1 transform-gpu cursor-grab sm:col-start-3 sm:col-end-7 sm:row-start-1 sm:row-end-3 z-10 max-sm:h-max p-0.5 transition-all duration-300 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset]"
      draggable="false"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-between max-sm:h-[275px] border border-dark-3 rounded-xl text-white bg-[#0a0a0a]">
          {/* Header with Moon Icon */}
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
                <p className="font-bold text-lg text-white">Sri Datthu.</p>
                <p className="text-xs font-mono text-zinc-400">@483Sri</p>
              </div>
            </div>
            <p className="text-xl">夜</p>
          </div>

          {/* Middle Section - Centered */}
          <div className="flex flex-col gap-3">
            {/* Bio with MorphingText */}
            <div className="flex items-center gap-1 text-white text-lg">
              <span>I build</span>
              <div className="h-7 w-24 relative">
                <MorphingText texts={["Backends", "Frontends", "WebApps"]} />
              </div>
            </div>

            <p className="text-xs text-white leading-tight">
              Hello, I'm Sri Datthu! a 23 year old developer based in Hyderabad - India.
            </p>
          </div>

          {/* Bottom Section - Footer */}
          <div className="w-full flex justify-between items-end">
            <div className="max-sm:hidden">
              <p className="text-xs font-mono text-zinc-400/70 leading-tight">
                &quot;How do i center <br />a div again??&quot;
              </p>
            </div>

            <div className="ml-auto flex flex-col items-end gap-1">
              <div className="font-mono flex items-center gap-1 text-xs text-zinc-400">
                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-xs">Available for work</p>
              </div>
               <p className="text-xs font-mono text-zinc-500">{time}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
