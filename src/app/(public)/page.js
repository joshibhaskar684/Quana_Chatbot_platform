import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIPreview from "@/components/AIPreview";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Technology from "@/components/Technology";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <AIPreview />
      <Features />
      <HowItWorks />
      <Technology />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
}
