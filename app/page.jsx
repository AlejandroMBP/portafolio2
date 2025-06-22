import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProfileCard from "@/components/ProfileCard";
import SidebarDots from "@/components/SidebarDots";
import WorkSection from "@/components/WorkSection";



export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex">
      {/* Video fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/videos/video4.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

      <div className="relative z-10 flex w-full h-screen overflow-hidden">
        <ProfileCard />

        <main className="flex-1 overflow-y-auto p-6 space-y-32 scroll-smooth relative">
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <ContactSection />
        </main>

        <SidebarDots />
      </div>
    </div>
  );
}
