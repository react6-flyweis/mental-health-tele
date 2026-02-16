"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

type Expert = {
  login?: { uuid?: string };
  name: { first: string; last: string };
  picture: { large: string };
};

export default function ExpertsSection() {
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
        // silently fail — keep component usable with empty list
        console.error("Failed to load expert images", err);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const features = [
    {
      id: 1,
      title: "Proven, Research-Backed Care Approaches",
    },
    {
      id: 2,
      title: "Providers Who Track And Support Your Progress",
    },
    {
      id: 3,
      title: "Customized, Whole-Person Treatment Plans",
    },
    {
      id: 4,
      title: "Ongoing Patient Support When You Need It",
    },
  ];

  return (
    <section className="py-16 bg-[#2195800D]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          <h2 className="flex gap-1 text-3xl md:text-4xl font-semibold leading-tight">
            <span className="block text-primary">Meet The Experts</span>
            <span className="block text-slate-900">Behind Your Care</span>
          </h2>
          <p className=" text-muted-foreground mt-2">
            Our Mental Health Specialists Are Dedicated To Understanding Your
            Needs And Supporting You With Thoughtful, Professional Care At Every
            Step.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* left features + CTA */}
          <div>
            <div className="">
              <ul className="space-y-4">
                {features.map((f) => (
                  <li key={f.id}>
                    <div className="flex items-center gap-3 rounded-lg border-2 p-3">
                      <div className="w-5 h-5 shrink-0 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        {f.title}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  size={"lg"}
                  className="bg-gradient-primary w-full md:w-auto inline-flex items-center gap-2 rounded-lg"
                >
                  <span>Explore Our Care Team</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* carousel */}
          <div className="md:col-span-2">
            <div className="relative ">
              <Carousel>
                <CarouselContent className="gap-6 -mx-2">
                  {(experts.length ? experts : new Array(5).fill(null)).map(
                    (ex, i) => (
                      <div
                        key={ex?.login?.uuid ?? i}
                        className="pl-4 shrink-0 w-65 md:w-75 lg:w-[320px] bg-white rounded-2xl border border-slate-100 shadow-sm p-3 hover:shadow-md transition-shadow"
                      >
                        <div className="overflow-hidden rounded-xl aspect-square mb-3 ">
                          {ex ? (
                            <Image
                              src={ex.picture.large}
                              alt={`${ex.name.first} ${ex.name.last}`}
                              width={640}
                              height={640}
                              className="object-cover  rounded-lg"
                            />
                          ) : (
                            <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-50 rounded-lg" />
                          )}
                        </div>

                        <div className="text-sm font-semibold text-slate-900">
                          Dr. Michael Chichak, MD
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed h-14 overflow-hidden">
                          A Highly Experienced Physician With A Strong
                          Background In Primary Care And Mental Health —
                          Committed To Personalized, Evidence-Based Treatment.
                        </p>
                      </div>
                    ),
                  )}
                </CarouselContent>

                <CarouselPrevious
                  className="left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full p-2 shadow hover:shadow-md border"
                  size="icon-sm"
                />
                <CarouselNext
                  className="right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full p-2 shadow hover:shadow-md border"
                  size="icon-sm"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
