import CardSection from "@/components/CardSection";
import HeroSection from "@/components/HeroSection";

function Home(): JSX.Element {
  return (
    <div className="text-4xl text-white text-center h-full">
      <HeroSection />
      <CardSection />
    </div>
  );
}

export default Home;
