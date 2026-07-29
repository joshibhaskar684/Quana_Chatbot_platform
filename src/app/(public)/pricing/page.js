import PricingClient from "@/components/PricingClient";

export const metadata = {
  title: "Pricing & Plans — Transparent Chatbot Pricing",
  description:
    "Explore Quana AI flexible pricing plans. Whether you are an individual creator or an enterprise team, get transparent pricing with monthly or annual billing options.",
  openGraph: {
    title: "Pricing & Plans — Quana AI Platform",
    description:
      "Simple, transparent pricing for every stage of growth. Build and deploy powerful AI chatbots with total predictability.",
  },
};

export default function PricingPage() {
  return (
    <main className="flex-1 flex flex-col overflow-x-hidden min-h-screen">
      <PricingClient />
    </main>
  );
}
