export default function LightModeHeroBackground() {
  return (
    <div className="h-[180dvh] lg:h-[100dvh] p-4 max-w-[1920px] mx-auto w-full items-center justify-center overflow-hidden absolute top-0 inset-0 size-full -z-10 flex dark:hidden">
      {/* Base ellipse background */}
      <img
        alt="elipse"
        loading="lazy"
        width="1080"
        height="1080"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-90 lg:object-fill z-0"
        style={{ color: "transparent" }}
        src="/elipse.svg"
      />

      {/* Large cloud at bottom */}
      <img
        alt="elipse"
        loading="lazy"
        width="1080"
        height="1080"
        decoding="async"
        className="w-full -bottom-0 h-[350px] lg:h-[550px] lg:-bottom-[180px] absolute object-cover lg:object-contain"
        style={{ color: "transparent" }}
        src="/bigCloud.png"
      />

      {/* Left cloud crop */}
      <img
        alt="crop"
        loading="lazy"
        width="1080"
        height="1080"
        decoding="async"
        className="w-[60%] lg:w-[687px] -left-0 top-[20%] lg:top-12 absolute object-contain"
        style={{ color: "transparent" }}
        src="/CloudCrop1.webp"
      />

      {/* Right cloud */}
      <img
        alt="elipse"
        loading="lazy"
        width="1080"
        height="1080"
        decoding="async"
        className="w-[497px] max-sm:-left-20 lg:-right-0 top-[800px] lg:top-20 absolute object-contain z-50"
        style={{ color: "transparent" }}
        src="/cloud.png"
      />

      {/* Left cloud */}
      <img
        alt="elipse"
        loading="lazy"
        width="1080"
        height="1080"
        decoding="async"
        className="w-[497px] left-16 top-[150px] z-50 lg:top-0 absolute object-contain"
        style={{ color: "transparent" }}
        src="/cloud.png"
      />

      {/* Glowing blur effect overlay */}
      <div
        className="absolute opacity-100 top-1/2 left-[54%] -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-[1000px] h-[110px] lg:h-[700px] bg-white/95"
        style={{
          borderRadius: "100%",
          mixBlendMode: "plus-lighter",
          filter: "blur(180px)",
          position: "absolute",
        }}
      />
    </div>
  );
}
