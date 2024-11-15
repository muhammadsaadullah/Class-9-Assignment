import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";

export default function Home() {
  return (  
    <div className="flex flex-col gap-5">
      <HeroSection />
      <HeroSection2 />
    </div>
  );
}