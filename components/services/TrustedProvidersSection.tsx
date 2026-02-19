"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

type Expert = {
  login?: { uuid?: string };
  name: { first: string; last: string };
  picture: { large: string };
};

export default function TrustedProvidersSection() {
  const [experts, setExperts] = useState<Expert[]>([]);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch(
          "https://randomuser.me/api/?results=6&inc=name,picture,login&noinfo",
        );
        const json = await res.json();
        if (!mounted) return;
        setExperts(json.results || []);
      } catch (err) {
        console.error("Failed to load provider images", err);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const Controls = function Controls() {
    const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
      useCarousel();

    return (
      <div className="w-full flex items-center justify-center gap-3 mt-6">
        <Button
          size="icon-lg"
          className="bg-gradient-primary"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ArrowLeft />
        </Button>
        <Button
          size="icon-lg"
          className="bg-gradient-primary"
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ArrowRight />
        </Button>
      </div>
    );
  };

  return (
    <section className="py-16 bg-[#2195800D]">
      <Container>
        <SectionHeader
          title="Connect With Trusted Healthcare"
          subtitle="Professionals"
        />

        <div className="max-w-6xl mx-auto mt-10">
          <Carousel>
            <CarouselContent className="gap-6 -mx-2">
              {(experts.length ? experts : new Array(5).fill(null)).map(
                (ex, i) => (
                  <CarouselItem key={ex?.login?.uuid ?? i}>
                    <div className="pl-4 shrink-0 w-65 md:w-75 lg:w-[320px] bg-white rounded-2xl border border-slate-100 shadow-sm p-3 hover:shadow-md transition-shadow">
                      <div className="overflow-hidden rounded-xl aspect-square mb-3">
                        {ex ? (
                          <Image
                            src={ex.picture.large}
                            alt={`${ex.name.first} ${ex.name.last}`}
                            width={640}
                            height={640}
                            className="object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-50 rounded-lg" />
                        )}
                      </div>

                      <div className="text-sm font-semibold text-slate-900">
                        Dr. Michael Chichak, MD
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed h-14 overflow-hidden">
                        A Highly Experienced Physician With A Strong Background
                        In Primary Care And Mental Health — Committed To
                        Personalized, Evidence-Based Treatment.
                      </p>
                    </div>
                  </CarouselItem>
                ),
              )}
            </CarouselContent>

            {/* centered controls below carousel */}
            <div className="relative w-full">
              <Controls />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
