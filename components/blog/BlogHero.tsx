"use client";

import { useSearchParams } from "next/navigation";
import bgPattern from "@/assets/landing/hero/bg-pattern.png";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const tags = [
  "ADHD",
  "Anxiety",
  "Depression",
  "Sleep Health",
  "Medications",
  "Mental Wellness",
  "OCD",
  "Phobias",
  "Stress Management",
  "Weight Care",
];

export default function BlogHero() {
  const params = useSearchParams();
  const activeTag = params?.get("tag") || "";
  return (
    <section className="py-20 bg-[#F3FEFB]">
      <Container className="relative">
        {/* decorative patterns */}
        <div className="absolute -top-5 -scale-x-100 z-0 opacity-50 max-w-xs">
          <Image
            src={bgPattern}
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute z-0 -top-5 right-0 opacity-50 max-w-xs">
          <Image
            src={bgPattern}
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Insights For A{" "}
            <span className="text-slate-900">Healthier Mind</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Explore expert-written articles on mental wellness, treatments, and
            everyday strategies to support your emotional well-being.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tags.map((tag) => {
            const isActive = activeTag === tag;

            return (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className={
                  `px-4 z-10 py-2 rounded-full shadow-md font-semibold transition-colors ` +
                  (isActive
                    ? "bg-primary text-white"
                    : "bg-white text-primary hover:bg-primary hover:text-white")
                }
              >
                {tag}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
