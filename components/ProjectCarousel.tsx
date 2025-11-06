"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Github, ExternalLink, House } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-3xl h-[20rem] z-30 w-64 md:h-[35rem] md:w-[26rem] overflow-hidden flex flex-col items-start justify-start relative transition-all duration-500 group p-1.5 bg-white/5 dark:bg-white/30 hover:bg-white/10">
      <div className="size-full rounded-2xl bg-dark-1 dark:bg-white/80 relative overflow-hidden">
        <div className="size-full absolute -z-0">
          <canvas className="pointer-events-none" style={{ width: 0, height: 0 }}></canvas>
        </div>

        <a target="_blank" rel="noopener noreferrer" href={project.link}>
          <div className="relative z-10 px-8 pt-8">
            <p className="text-sm font-mono md:text-base font-medium max-sm:font-bold text-left text-orange-400 dark:text-gray-300">
              {project.category}
            </p>
            <p className="text-xl font-mono md:text-3xl font-semibold max-w-xs text-left mt-2 max-sm:font-bold text-blue-600 dark:text-blue-600">
              {project.title}
            </p>
          </div>
        </a>

        <a target="_blank" rel="noopener noreferrer" href={project.link}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="transition duration-300 object-cover absolute inset-0 size-full z-0"
            priority={false}
          />
        </a>

        <div className="z-[30] absolute bottom-7 flex w-full items-center justify-start flex-wrap gap-2 px-5 max-sm:px-3">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className="bg-white/70 text-black flex items-center justify-center px-2 py-1 rounded-lg font-bold border border-gray-300 max-sm:text-xs text-xs"
            >
              {tag}
            </div>
          ))}
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="z-30 absolute left-8 top-28"
          href={project.github}
        >
          <div className="w-max px-3 py-1 rounded-full my-2 text-gray-900 bg-white font-bold border border-gray-300 text-lg flex items-center justify-center gap-2 -translate-x-28 group-hover:translate-x-0 opacity-0 scale-[0.2] group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
            <Github className="size-5" />
    
          </div>
        </a>
      </div>
    </div>
  );
};

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    checkScrollability();
    const carousel = carouselRef.current;
    carousel?.addEventListener("scroll", checkScrollability);
    return () => carousel?.removeEventListener("scroll", checkScrollability);
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative mx-auto max-w-5xl font-spaceGrotesk">
      <div className="w-full relative z-50">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 mx-3 bg-white dark:bg-white hover:bg-white/70 text-zinc-700 dark:text-gray-900">
         <Link href={"/"}> <House className="h-6 w-6" /></Link>
        </button>

        <div className="relative w-full">
          <div
            ref={carouselRef}
            className="flex w-full overflow-x-scroll overscroll-x-auto md:py-5 scroll-smooth [scrollbar-width:none]"
            onScroll={checkScrollability}
          >
            <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l from-white/80 to-transparent pointer-events-none"></div>

            <div className="flex flex-row justify-start gap-7 pl-4 my-3 max-w-7xl mx-auto">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="last:pr-[5%] md:last:pr-[33%] rounded-3xl flex-shrink-0 animate-fadeInUp"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2 absolute -top-8 max-md:-top-10 right-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="relative z-40 h-10 w-10 rounded-full bg-gray-100 dark:bg-white flex items-center justify-center disabled:opacity-50 max-sm:size-10 transition-all hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-500 dark:text-gray-900" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="relative z-40 h-10 w-10 rounded-full bg-gray-100 dark:bg-white flex items-center justify-center disabled:opacity-50 max-sm:size-10 transition-all hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-500 dark:text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectCarousel;
