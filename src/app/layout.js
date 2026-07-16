import { Work_Sans } from "next/font/google";
import "./globals.css";
import AiBot from "@/components/ai/AiBoat";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quana | The Future of Personal AI",
  description: "Create, customize, and share your own AI experience with Quana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${workSans.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen font-sans selection:bg-blue-600/30 flex flex-col">
        {children}
        <AiBot />
      </body>
    </html>
  );
}
