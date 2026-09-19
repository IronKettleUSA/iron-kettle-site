import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { SpecsSection } from "@/components/specs-section";
import { LifestyleSection } from "@/components/lifestyle-section";
import { VideoSection } from "@/components/video-section";
import { StarterKitTeaser } from "@/components/starter-kit-teaser";
import { WaitlistSection } from "@/components/waitlist-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0b0c]">
      <Navbar />
      <HeroSection />
      <SpecsSection />
      <LifestyleSection />
      <VideoSection />
      <StarterKitTeaser />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
