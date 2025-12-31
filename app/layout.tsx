import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Using Google Fonts
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/blocks/header";
import { ChatWidget } from "@/components/blocks/chat-widget";
import { Preloader } from "@/components/ui/preloader";
import { SuitAssembler, SuitContainer, SuitPart } from "@/components/ui/suit-assembler";
import JsonLd from "@/components/seo/json-ld";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Syed Abdullah Saqib - AI Engineer",
    default: "Syed Abdullah Saqib | Building Agentic AI Systems",
  },
  description: "Portfolio of Syed Abdullah Saqib, a Senior AI Engineer specializing in Autonomous Agents, RAG Pipelines, and Full Stack Intelligence.",
  keywords: ["AI Engineer", "Agentic AI", "Generative AI", "Next.js Developer", "RAG", "LLM", "Full Stack Engineer"],
  authors: [{ name: "Syed Abdullah Saqib" }],
  creator: "Syed Abdullah Saqib",
  publisher: "Syed Abdullah Saqib",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Syed Abdullah Saqib | AI Engineer",
    description: "Building the future of autonomous intelligence. Explore my agentic workflows and crazy projects.",
    url: "https://abdullasaqib.github.io",
    siteName: "Syed Abdullah Saqib Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Abdullah Saqib | AI Engineer",
    description: "Senior AI Engineer building autonomous agents and RAG pipelines.",
    creator: "@AbdullaSaqib",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};





import { TerminalLeadMagnet } from "@/components/features/terminal-lead-magnet";
import { SilentTracker } from "@/components/features/silent-tracker";

// ... (previous imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-white/20"
        )}
      >
        <JsonLd />

        <SuitAssembler>
          {/* Global Crazy Background Layer */}
          <div className="fixed inset-0 -z-10 bg-black" />
          <div className="fixed inset-0 -z-10 bg-[url('/grid.svg')] opacity-20 bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)] animate-pulse will-change-transform transform-gpu" />
          <div className="fixed top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px] mix-blend-screen animate-blob -z-10 will-change-transform transform-gpu" />
          <div className="fixed bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-600/10 rounded-full blur-[60px] md:blur-[80px] mix-blend-screen animate-blob animation-delay-4000 -z-10 will-change-transform transform-gpu" />


          <Preloader />
          <SilentTracker />
          <TerminalLeadMagnet />

          <SuitPart direction="top" delay={0.2}>
            {/* Header wrapped in a div to avoid direct motion conflict */}
            <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
              <Header />
            </div>
          </SuitPart>

          <SuitContainer className="min-h-screen">
            {children}
          </SuitContainer>

          <SuitPart direction="right" delay={0.5}>
            <ChatWidget />
          </SuitPart>
        </SuitAssembler>
      </body>
    </html>
  );
}
