import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Arrow } from "radix-ui/internal";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const plans = [
  {
    id: "first-visit",
    title: "First Visit",
    price: "$195",
    subtitle: "Ideal For Individuals Starting Care On Our Platform.",
    bullets: [
      "30-Minute Secure Video Consultation",
      "In-Depth Review Of Symptoms And Medical Background",
      "Personalized Care Recommendations",
      "Medication Guidance When Appropriate",
    ],
    href: "/appointment?type=initial",
    cta: "Schedule First Visit",
  },
  {
    id: "follow-up",
    title: "Follow-Up Sessions",
    price: "$159",
    subtitle: "For Patients Continuing Ongoing Treatment.",
    bullets: [
      "Brief Online Check-Ins (15 Minutes)",
      "Ongoing Symptom Review",
      "Adjustments To Care Plans When Needed",
      "Continued Treatments Support",
    ],
    href: "/appointment?type=follow-up",
    cta: "Schedule Follow-Up",
  },
];

export default function TreatmentsPricing({
  title,
  subtitle,
  description,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
}) {
  return (
    <section className="py-16 md:py-20 bg-[#f3faf8]">
      <Container>
        <SectionHeader
          title={title || "Pricing"}
          subtitle={subtitle || ""}
          description={description || ""}
          className="mb-8"
        />

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 items-start">
          {plans.map((p) => (
            <Card key={p.id} className="border border-primary p-0 rounded-md">
              <CardHeader className="bg-[#eaf7f3] rounded-t-lg border-b border-primary px-6 py-4">
                <CardTitle className="text-xl font-semibold text-slate-900">
                  {p.title}
                </CardTitle>

                <div className="text-primary font-semibold text-lg md:text-xl">
                  {p.price}
                </div>
              </CardHeader>

              <CardContent className="px-6">
                <span className="text-sm font-medium">{p.subtitle}</span>

                <ul className="space-y-3 mt-5 divide-y border-b">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-gradient-primary/10 text-primary flex items-center justify-center mt-1">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {b}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="bg-transparent border-t-0">
                <Link href={p.href}>
                  <Button size="lg" className="bg-gradient-primary">
                    {p.cta}
                    <ArrowRight />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
