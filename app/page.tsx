import { Hero } from "@/components/blocks/hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center pb-24 overflow-hidden">

      <div className="relative z-10 w-full">
        <Hero />
      </div>

      <div className="container mx-auto max-w-4xl text-center px-4">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <p className="text-xl text-zinc-300 leading-relaxed mb-8">
            Welcome to my digital portfolio. <br />
            Dive into my background, explore my technical skills, or analyze my latest AI projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors flex items-center gap-2">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-8 py-3 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Global footer text */}
      <footer className="py-8 text-center text-xs text-zinc-600">
        © 2025 Syed Abdullah Saqib. Engineering with Empathy.
      </footer>
    </main>
  );
}
