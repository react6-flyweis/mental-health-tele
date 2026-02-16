import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "./ui/card";

import stepImg1 from "@/assets/landing/hero/adhd.png";
import stepImg2 from "@/assets/landing/hero/anxiety.png";
import stepImg3 from "@/assets/landing/support.png";

export default function GettingStartedSection() {
  const steps = [
    {
      id: 1,
      title: "Choose A Time That Works For You",
      description:
        "Book An Appointment In Minutes By Selecting A Time That Fits Your Schedule - No Long Wait Times.",
      image: stepImg1,
    },
    {
      id: 2,
      title: "Connect With A Licensed Expert Online",
      description:
        "Meet One-On-One With A Qualified Provider Through A Secure Video Session, Right From Your Home.",
      image: stepImg2,
    },
    {
      id: 3,
      title: "Track Progress And Continue Care",
      description:
        "Review Your Improvements, Follow Up With Your Provider, And Adjust Your Care Plan As Needed.",
      image: stepImg3,
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto ">
          <h2 className="flex gap-1 text-3xl md:text-4xl font-semibold leading-tight">
            <span className="block text-primary">
              Getting Started Is Simple
            </span>
            <span className="block text-slate-900">Just Three Easy Steps</span>
          </h2>
          <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">
            No Clinic Visits. No Complicated Forms. Just Professional Mental
            Health Care, Designed To Fit Your Routine.
          </p>
        </div>
        <div className="max-w-6xl mx-auto ">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {steps.map((s) => (
              <div key={s.id} className="border rounded-2xl p-2">
                <Card className="p-0 overflow-hidden">
                  <div className="overflow-hidden h-44 aspect-square">
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={1200}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <CardContent className="pt-4 pb-6">
                    <CardTitle className="text-sm font-semibold text-slate-900">
                      {s.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-xs leading-relaxed h-20 overflow-hidden text-muted-foreground">
                      {s.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center">
            <Button size="lg" className="bg-gradient-primary">
              <span>Schedule Your Appointment</span>
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
