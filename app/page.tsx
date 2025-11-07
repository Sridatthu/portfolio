import DailyToolStack from "@/components/DailyToolStack";
import LightModeHeroBackground from "@/components/LightModeHeroBackground";
import Profile from "@/components/Profile";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import TechStack from "@/components/TechStack";




export default function Home() {
  return (
    <>
    <main className="min-h-screen flex items-center justify-center relative mx-auto max-w-5xl font-spaceGrotesk ">
      <div className="flex items-center justify-center max-sm:flex-col sm:flex-row bg-transparent">
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-8 sm:grid-rows-5 p-5 max-sm:p-4 sm:h-[770px] relative w-full max-sm:gap-3 max-sm:min-h-screen">
          <Profile />
          <TechStack />
          <DailyToolStack />
          <SocialLinks />
          <ProjectCard/>
        </div>
      </div>
    </main>
    <LightModeHeroBackground/>
    </>
  );
}
