import BrandBanner from "@/components/BrandBanner";
import CartItem from "@/components/cart/CartItem";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="h-auto">
      <Hero />
      <BrandBanner />
      <CartItem />
    </div>
  );
}
