import Image from "next/image";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import arrowIcon from "@/assets/icons/arrow-curve.svg";
import bulbIcon from "@/assets/icons/bulb.svg";
import { Button } from "@/components/ui/button";

import bgPattern from "@/assets/landing/hero/bg-pattern.png";

export default function HeroSection() {
  const features = [
    {
      title: "Care Through Secure Video Sessions",
      desc: "Consult Licensed Providers Through Online Video Visits. No Travel, No Waiting Rooms.",
    },
    {
      title: "Appointments That Fit Your Routine",
      desc: "Choose Visit Times That Work Around Your Schedule, Including Evenings And Weekends.",
    },
    {
      title: "Treatment Guided By Clinical Research",
      desc: "Care Plans Are Based On Proven Medical Practices And Tailored To Your Condition.",
    },
    {
      title: "Quality Care At Fair Pricing",
      desc: "Access Professional Mental Health Services Without The High Costs Of Traditional Clinics.",
    },
    {
      title: "Online Prescriptions Made Convenient",
      desc: "When Appropriate, Providers Can Issue New Prescriptions Or Continue Existing Ones Digitally.",
    },
    {
      title: "Support Whenever You Need It",
      desc: "Our Care Team Is Available To Assist You Throughout Your Treatment Journey.",
    },
  ];

  return (
    <>
      <section className="p-10">
        <div className="py-10 bg-accent rounded-2xl relative overflow-hidden">
          {/* Decorative background elements could go here if we had SVGs */}
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
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className=" text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                <span className="block text-primary">Treatments support</span>
                <span className="block text-primary font-medium">
                  that fits{" "}
                  <span className="text-slate-900 font-medium">your life</span>
                </span>
              </h1>

              <p className="mx-auto max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
                Whether you’re at home or on the go, you can connect with a
                provider and receive guidance when you need it.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <Button className="bg-gradient-primary" size="lg">
                Book Your Session
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              <span className="block">
                <span className="bg-clip-text bg-gradient-primary text-transparent">
                  Why People Prefer{" "}
                </span>
                <span className="font-semibold">Our Platform</span>
              </span>
            </h2>
            <Button className="bg-gradient-primary" size="lg">
              Start Online Care
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#21958008] border rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-2 bg-gradient-primary rounded-md relative">
                    <ShieldCheck className="w-5 h-5 text-white fill-current" />
                    <Check className="size-4 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold leading-tight">
              <span className="block text-primary">Getting Treatments</span>{" "}
              <span className="block text-slate-900">Online Is Simple</span>
            </h2>
          </div>

          <div className="relative">
            <div className="grid gap-8 md:grid-cols-3 items-start">
              <div className="text-center px-4">
                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-lg bg-gradient-primary text-white mb-4">
                  <Image src={bulbIcon} alt="Bulb" width={32} height={32} />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Create Your Account And Book A Visit
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Share Basic Personal Details And Health Information, Then
                  Select A Convenient Time For Your Online Appointment.
                </p>
              </div>

              <div className="text-center px-4">
                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-lg bg-gradient-primary text-white mb-4">
                  <Image src={bulbIcon} alt="Bulb" width={32} height={32} />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Meet With A Licensed Provider
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Join A Secure Video Session To Review Your Symptoms, Medical
                  Background, And Possible Treatment Options.
                </p>
              </div>

              <div className="text-center px-4">
                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-lg bg-gradient-primary text-white mb-4">
                  <Image src={bulbIcon} alt="Bulb" width={32} height={32} />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Receive Care Recommendations
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  If Appropriate, Your Provider Will Issue A Treatment Plan
                  Digitally And Guide You On Next Steps For Treatment.
                </p>
              </div>
            </div>

            {/* Decorative dashed arrows between columns for md+ */}
            <div className="hidden md:block pointer-events-none">
              <Image
                src={arrowIcon}
                alt="Arrow"
                width={160}
                height={40}
                className="absolute left-1/3 top-10 transform -translate-y-1/2"
              />
              <Image
                src={arrowIcon}
                alt="Arrow"
                width={160}
                height={40}
                className="absolute left-2/3 top-10 transform -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f3faf8]">
        <div className="container mx-auto ">
          <div className="grid items-center md:grid-cols-2">
            <div className="relative">
              <div className="max-w-md mx-auto p-2 rounded-lg bg-white border-2 border-[#9ee1d6] shadow-sm">
                <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                <span className="block text-primary">
                  Handle Your Prescriptions
                </span>
                <span className="block text-slate-900">
                  Digitally, With Confidence
                </span>
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary text-white flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Through our platform, you can consult with licensed medical
                    professionals authorized to provide care in your state.
                    Providers review your symptoms and medical background to
                    determine the most appropriate treatment approach.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary text-white flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When medication is part of your care plan, prescriptions are
                    sent electronically to the pharmacy you choose, with clear
                    guidance on usage and safety — all without leaving home.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Button className="bg-gradient-primary" size="lg">
                  Start Your Care
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
