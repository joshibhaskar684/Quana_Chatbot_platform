import Hero from "@/components/Hero";
import AIPreview from "@/components/AIPreview";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Technology from "@/components/Technology";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
export default function Home() {
  return (
    <main className="flex-1 flex flex-col overflow-x-hidden">
      <Hero />
      <AIPreview />
      <Features />
      <HowItWorks />
      <Technology />
      <UseCases />
      <CTA />
    </main>
  );
}
