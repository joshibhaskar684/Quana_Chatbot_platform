import UpcomingSolutionsClient from "@/components/UpcomingSolutionsClient";

export const metadata = {
  title: "Upcoming Solutions | Custom Fine-Tuned LLMs | Quana AI",
  description:
    "Explore Quana AI's upcoming suite of domain-specific fine-tuned LLMs for legal risk auditing, medical diagnostics, software engineering, financial quantitative analysis, and multimodal vision.",
  openGraph: {
    title: "Upcoming Solutions - Custom Fine-Tuned LLMs | Quana AI",
    description:
      "Domain-specific AI models engineered for extreme accuracy, sub-50ms latency, and private enterprise deployment.",
  },
};

export default function UpcomingSolutionsPage() {
  return <UpcomingSolutionsClient />;
}
