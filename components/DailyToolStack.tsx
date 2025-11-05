"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import axios from "axios";

const FALLBACK_GALAXY_IMAGE =process.env.NEXT_PUBLIC_FALLBACK_GALAXY_IMAGE;
const UNSPLASH_CLIENT_ID = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;
const UNSPLASH_API = `${process.env.NEXT_PUBLIC_UNSPLASH_API}${UNSPLASH_CLIENT_ID}`;

interface NasaImage {
  url?: string;
  title?: string;
  explanation?: string;
  error?: boolean;
  loading?: boolean;
  source?: string;
}

const DailyToolStack = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [nasaImg, setNasaImg] = useState<NasaImage>({ loading: true });

  useEffect(() => {
    setMounted(true);
    fetchGalaxyImage();
  }, []);

  const fetchGalaxyImage = async () => {
    try {
      await fetchFromUnsplash();
    } catch (err2) {
      useFallbackImage();
    }
  };

  const fetchFromUnsplash = async () => {
    if (UNSPLASH_CLIENT_ID !== process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID) {
      throw new Error("Unsplash API key not configured");
    }

    const response = await axios.get(UNSPLASH_API, { timeout: 5000 });
    const data = response.data;

    setNasaImg({
      url: data.urls.regular,
      title: data.description || data.alt_description || "Galaxy Image",
      explanation: `Photo by ${data.user.name} on Unsplash`,
      loading: false,
      source: "Unsplash",
    });
  };

  const useFallbackImage = () => {
    setNasaImg({
      url: FALLBACK_GALAXY_IMAGE,
      title: "Galaxy",
      explanation: "Beautiful galaxy image from Unsplash",
      loading: false,
      source: "Unsplash Fallback",
      error: false,
    });
  };

  if (!mounted) return null;

  const isDark = theme === "dark";

  const tools = [
    { name: "VSCode", icon: "/icons/vscode.webp" },
    { name: "Intellij Idea", icon: "/icons/idea.webp" },
    { name: "PostMan", icon: "/icons/post2.webp" },
    { name: "Spotify", icon: "/icons/spotify2.svg" },
    { name: "Motion", icon: "/icons/motion.svg" },
    { name: "Figma", icon: "/icons/figma_logo.svg" },
  ];

  const ToolIcon = ({ icon, name }: { icon: string; name: string }) => (
    <div
      className={`aspect-square w-12 max-sm:max-w-11 p-0 rounded-2xl hover:scale-125 transition-all shadow-lg duration-300 ease-in-out opacity-90 cursor-pointer ${
        isDark ? "bg-white hover:shadow-white/40" : "bg-gray-100 hover:shadow-gray-400/40"
      }`}
    >
      <Image
        alt={name}
        src={icon}
        width={48}
        height={48}
        className="w-full aspect-square p-2"
        priority={false}
      />
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
        <div className="h-full grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-7 max-sm:py-2 max-sm:gap-2 shadow-none!">
          {/* Tool Stack Container */}
          <div className="row-start-2 row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-8">
            <div
              className={`h-full p-px border w-max mx-auto rounded-3xl bg-transparent transition-colors ${
                isDark ? "border-dark-4" : "border-gray-300"
              }`}
            >
              <div
                className={`relative w-max border rounded-3xl flex flex-col items-center justify-center h-full gap-2.5 max-sm:px-3 px-2 py-2 mx-auto max-sm:flex-row flex-wrap max-sm:w-full backdrop-blur-2xl transition-colors ${
                  isDark ? "border-dark-3 bg-zinc-800/10" : "border-gray-300 bg-gray-100/10"
                }`}
              >
                {tools.map((tool) => (
                  <ToolIcon key={tool.name} icon={tool.icon} name={tool.name} />
                ))}
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div
            className={`sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-3 flex flex-col items-start justify-center gap-0 transition-colors ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            <h1 className="text-4xl max-sm:text-5xl font-extrabold font-mono">
              DAILY
            </h1>
            <p className="text-3xl max-sm:text-4xl font-bold">Tool</p>
            <h1 className="text-[2.7rem] max-sm:text-7xl leading-[2.8rem] font-bold">
              STACK.
            </h1>
          </div>

          {/* Galaxy Display Section - With gradient overlay */}
          <div className="sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-4 rounded-3xl bg-transparent relative max-sm:h-[400px]">
            {nasaImg.url && !nasaImg.loading ? (
              <div className="relative w-full h-full">
                <Image
                  alt={nasaImg.title ?? "Galaxy"}
                  src={nasaImg.url}
                  fill
                  className="aspect-square size-full object-cover rounded-3xl"
                  priority={false}
                  onError={() => {
                    console.error("Image load failed");
                    useFallbackImage();
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/80 to-transparent rounded-b-3xl">
                  <p
                    className={`font-mono text-xs line-clamp-1 ${
                      isDark ? "text-white" : "text-white"
                    }`}
                  >
                    {nasaImg.title}
                  </p>
                  <p
                    className={`font-mono text-xs opacity-75 ${
                      isDark ? "text-gray-300" : "text-gray-200"
                    }`}
                  >
                    Source: {nasaImg.source}
                  </p>
                </div>
              </div>
            ) : nasaImg.error ? (
              <div className="absolute p-2 size-full rounded-3xl flex items-center justify-center">
                <p
                  className={`font-mono text-center text-sm ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  Failed to fetch galaxy image.
                </p>
              </div>
            ) : (
              <div className="absolute p-2 size-full rounded-3xl flex items-center justify-center">
                <p
                  className={`font-mono text-center text-sm ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  Fetching galaxy...
                </p>
              </div>
            )}
          </div>

          {/* Empty Section */}
          <div className="sm:col-start-4 sm:col-end-6 sm:row-start-4 sm:row-end-5"></div>

          {/* Waves Section */}
          <div className="row-start-7 sm:col-start-2 sm:col-end-4 sm:row-start-3 sm:row-end-4 relative max-sm:hidden">
            <Image
              alt="waves"
              src="/assets/waves.svg"
              width={300}
              height={300}
              className="opacity-90 object-cover rounded-2xl size-[90%]"
              priority={false}
            />
          </div>

          {/* Spotify Track Image Section */}
          <div className="sm:col-start-2 sm:col-end-4 sm:row-start-4 sm:row-end-7 rounded-3xl bg-transparent group relative">
            <Image
              alt="track"
              src="/assets/for.avif"
              width={1024}
              height={1024}
              className="aspect-square size-full object-cover rounded-3xl"
              priority={false}
            />
            <a
              href="https://open.spotify.com/track/0cYohCh24y1aMjJmcS9RBl"
              target="_blank"
              rel="noopener noreferrer"
              className={`border absolute size-10 bottom-3 right-3 translate-y-7 scale-50 opacity-0 group-hover:translate-y-0 group-hover:scale-100 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all rounded-full flex items-center justify-center duration-300 max-sm:group-hover:scale-150 max-sm:bottom-7 max-sm:right-7 max-sm:translate-y-12 p-px backdrop-blur-2xl backdrop-saturate-200 ${
                isDark
                  ? "border-dark-5/10 bg-zinc-800/30"
                  : "border-gray-400/20 bg-gray-200/30"
              }`}
            >
              <div
                className={`border p-2.5 rounded-full transition-colors ${
                  isDark ? "border-dark-5/30" : "border-gray-300/50"
                }`}
              >
                <Image
                  alt="play"
                  src="/icons/play.svg"
                  width={30}
                  height={30}
                  className={`size-full aspect-square ${isDark ? "invert" : ""}`}
                  priority={false}
                />
              </div>
            </a>
          </div>

          {/* Spotify Track Info */}
          <div className="sm:col-start-2 sm:col-end-4 sm:row-start-7 sm:row-end-8 p-1">
            <a
              href="https://open.spotify.com/track/0cYohCh24y1aMjJmcS9RBl"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold text-lg transition-colors hover:opacity-80 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              For A Reason
            </a>
            <div
              className={`flex justify-between text-xs pointer-events-none transition-colors ${
                isDark ? "text-zinc-500" : "text-gray-500"
              }`}
            >
              <p>By: Karan Aujla</p>
              <p className="font-mono">2025</p>
            </div>
          </div>

          {/* Quote Section */}
          <div
            className={`sm:col-start-4 sm:col-end-6 sm:row-start-5 sm:row-end-8 relative flex flex-col-reverse items-center bg-transparent justify-start p-1 transition-colors ${
              isDark ? "text-zinc-300" : "text-gray-700"
            }`}
          >
            <Image
              alt="naruto"
              src="/assets/naruto.webp"
              width={300}
              height={300}
              className="object-cover rounded-2xl size-[80%] max-sm:size-full"
              priority={false}
            />
            <p className="text-wrap text-center text-sm max-sm:text-lg font-mono font-semibold max-sm:font-bold">
              &quot;I&apos;m gonna be Hokage one day.&quot;
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DailyToolStack;