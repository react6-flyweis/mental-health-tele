"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

type Provider = {
  login?: { uuid?: string };
  name: { first: string; last: string };
  picture: { large: string };
};

export default function MeetProvidersSection() {
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch(
          "https://randomuser.me/api/?results=4&inc=name,picture,login&noinfo",
        );
        const json = await res.json();
        if (!mounted) return;
        setProviders(json.results || []);
      } catch (err) {
        console.error("Failed to load provider images", err);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const placeholders = new Array(4).fill(null);

  return (
    <section className="py-16 bg-transparent">
      <Container>
        <SectionHeader
          title="Meet our"
          subtitle="providers"
          description="Quality care shouldn't come with surprise costs. Here's exactly what you'll pay."
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {(providers.length ? providers : placeholders).map((p, idx) => (
            <div
              key={p?.login?.uuid ?? idx}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className="overflow-hidden rounded-xl aspect-4/3 mb-3 bg-gray-50">
                {p ? (
                  <Image
                    src={p.picture.large}
                    alt={`${p.name.first} ${p.name.last}`}
                    width={640}
                    height={520}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-50" />
                )}
              </div>

              <div className="text-sm font-semibold text-slate-900">
                Dr. Michael Chichak, MD
              </div>

              <p className="text-xs text-muted-foreground mt-2 leading-relaxed h-14 overflow-hidden">
                A Highly Experienced Physician With A Strong Background In
                Primary Care And Mental Health — Committed To Personalized,
                Evidence-Based Treatment.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
