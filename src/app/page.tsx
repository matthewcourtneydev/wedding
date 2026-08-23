import Hero from "@/components/sections/Hero";
import WeddingPreview from "@/components/sections/WeddingPreview";
import OurStoryPreview from "@/components/sections/OurStoryPreview";
import TravelPreview from "@/components/sections/TravelPreview";
import RegistryPreview from "@/components/sections/RegistryPreview";
import RSVPPreview from "@/components/sections/RSVPPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <WeddingPreview />
      <OurStoryPreview />
      <TravelPreview />
      <RegistryPreview />
      <RSVPPreview />
    </main>
  );
}