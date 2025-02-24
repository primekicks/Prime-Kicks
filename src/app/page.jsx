import BrandBanner from "@/components/BrandBanner";
import Hero from "@/components/Hero";
import LandingBanner from "@/components/LandingBanner";
import SpecificProduct from "@/components/SpecificProduct";

export default function Home() {
  return (
    <div className="h-auto">
      <Hero />
      <BrandBanner />
      <LandingBanner />
      <SpecificProduct />
    </div>
  );
}
