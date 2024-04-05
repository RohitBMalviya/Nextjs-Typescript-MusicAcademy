import CardSection from "@/components/CardSection";
import HeroSection from "@/components/HeroSection";
import TestinomialCard from "@/components/TestimonialCard";
import WhyChooseUse from "@/components/WhyChooseUse";

function Home(): JSX.Element {
  return (
    <div className="text-4xl text-white text-center h-full">
      <HeroSection />
      <CardSection />
      <WhyChooseUse />
      <TestinomialCard />
    </div>
  );
}

export default Home;
