import Image from "next/image";
import { ChevronRight } from "lucide-react";
import supportImg from "@/assets/landing/support.png";
import mapImg from "@/assets/landing/map.png";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

import targetIcon from "@/assets/icons/target.svg";
import badgeIcon from "@/assets/icons/badge.svg";
import speakerIcon from "@/assets/icons/speaker.svg";

export default function SupportSection() {
  const features = [
    {
      id: "experienced",
      icon: badgeIcon,
      title: "Experienced, Caring Professionals",
      description:
        "Our Qualified Mental Health Experts Take Time To Understand Your Story And Support You With Empathy, Respect, And Professionalism.",
    },
    {
      id: "care-designed",
      icon: targetIcon,
      title: "Care Designed Around Your Life",
      description:
        "Your Treatment Plan Is Customized To Your Symptoms, Goals, And Daily Routine - Because Progress Looks Different For Everyone.",
    },
    {
      id: "online-care",
      icon: speakerIcon,
      title: "Online Care With A Human Touch",
      description:
        "Your Treatment Plan Is Customized To Your Symptoms, Goals, And Daily Routine -Because Progress Looks Different For Everyone.",
    },
  ];

  return (
    <section className="py-16 md:py-20 space-y-12">
      <div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
                <span className="block text-primary">
                  Dealing With Anxiety Or ADHD?
                </span>
                <span className="block text-slate-900 font-semibold">
                  <span className="text-primary">Real Support</span> Is Within
                  Reach.
                </span>
              </h2>

              <ul className="mt-8 space-y-6">
                {features.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <div className="flex gap-2 items-center">
                        <div className="size-8 rounded-full bg-[#2195801A] flex items-center justify-center shrink-0">
                          <Image
                            src={Icon}
                            alt={`${item.title} icon`}
                            className="size-6"
                          />
                        </div>
                        <div className="text-sm font-semibold text-slate-900">
                          {item.title}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex justify-center md:justify-end h-96">
              <div className="relative w-full h-full max-w-md">
                <div className="absolute -inset-2 rounded-2xl border-2 border-primary w-4/5"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={supportImg}
                    alt="Support"
                    className="object-cover aspect-square h-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full max-w-lg">
                <div className="relative ">
                  <Image
                    src={mapImg}
                    alt="Availability map"
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-primary ">
                SUPPORT THAT MEETS YOU
              </h3>
              <h2 className="text-2xl md:text-3xl font-medium mt-2">
                <span className="block text-slate-900 font-semibold">
                  WHERE YOU ARE
                </span>
              </h2>

              <div className="mt-6">
                <div className="flex items-center gap-4">
                  <div className="size-8 flex items-center justify-center bg-[#2195801A] rounded-full">
                    <Image
                      src={targetIcon}
                      alt="Target icon"
                      className="size-5"
                    />
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    Availability Across Multiple States
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Our services are accessible in many regions, making it easier
                  to connect with licensed providers wherever you’re located.
                </p>
              </div>

              <div className="mt-6 border-t pt-4">
                <Button size={"lg"} className="bg-gradient-primary">
                  Book Your Session <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-primary">FAQs</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Answers to common questions about our platform and services.
            </p>

            <div className="mt-8">
              <Accordion type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What Is This Platform About?
                  </AccordionTrigger>
                  <AccordionContent>
                    This platform connects you with qualified mental health
                    professionals for remote assessment, therapy, and treatment
                    planning tailored to your needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How Does The Service Work?
                  </AccordionTrigger>
                  <AccordionContent>
                    Create an account, complete a brief intake, then book a
                    session with a provider. Sessions are conducted securely via
                    video or chat depending on the provider.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Where Is The Service Available?
                  </AccordionTrigger>
                  <AccordionContent>
                    Availability varies by provider and state; check the
                    provider directory or our availability map for details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What Happens During The First And Follow-Up Sessions?
                  </AccordionTrigger>
                  <AccordionContent>
                    The first session focuses on assessment and goals.
                    Follow-ups involve treatment progress, adjustments, and any
                    therapeutic interventions agreed upon with your provider.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    What Are The Pricing Options?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer several pricing plans including pay-per-session and
                    subscription options. See our pricing page for current rates
                    and details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Who Provides The Care On This Platform?
                  </AccordionTrigger>
                  <AccordionContent>
                    Licensed mental health professionals including therapists,
                    psychiatrists, and certified specialists provide care on our
                    platform.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    Can Providers Prescribe Medication If Needed?
                  </AccordionTrigger>
                  <AccordionContent>
                    Some licensed prescribers can prescribe medication where
                    permitted by law. Medication management availability depends
                    on the provider and local regulations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Is Insurance Accepted?</AccordionTrigger>
                  <AccordionContent>
                    Insurance acceptance varies by provider. Check individual
                    provider profiles or contact support for insurance
                    verification assistance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
