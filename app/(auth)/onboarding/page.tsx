"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import TreatmentsStep from "@/components/onboarding/TreatmentsStep";
import PatientTypeStep from "@/components/onboarding/PatientTypeStep";
import SummaryStep from "@/components/onboarding/SummaryStep";

export default function OnboardingPage() {
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<"new" | "continue" | null>(
    null,
  );
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const router = useRouter();

  // step 1: choose treatments (no auto-hide)
  // step 2: choose patient type (revealed after pressing Continue)
  // step 3: provider summary + booking (final step)

  const handleCheckboxChange = (treatment: string) => {
    setSelectedTreatments((prev) => {
      const next = prev.includes(treatment)
        ? prev.filter((t) => t !== treatment)
        : [...prev, treatment];
      // if user cleared the last treatment, reset selected plan
      if (next.length === 0) {
        setSelectedPlan(null);
      }
      return next;
    });
  };

  const handleContinue = () => {
    // Replace with real navigation / API call later
    console.log(
      "Selected treatments:",
      selectedTreatments,
      "plan:",
      selectedPlan,
    );
  };

  const isStep1Ready = selectedTreatments.length > 0;
  const isStep2Ready = !!selectedPlan;
  const isPrimaryEnabled =
    (step === 1 && isStep1Ready) || (step === 2 && isStep2Ready) || step === 3; // step 3 is the final summary/booking step and is always actionable

  const primaryClass = isPrimaryEnabled
    ? step === 3
      ? "bg-gradient-to-r from-[#2F6F6A] to-[#39B09B] text-white hover:opacity-95"
      : "bg-[#4A7C7E] hover:bg-[#3d6567] text-white"
    : "bg-gray-200 text-gray-500 cursor-not-allowed";

  const handleMainContinue = () => {
    if (step === 1) {
      if (!isStep1Ready) return;
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!isStep2Ready) return;
      setStep(3);
      return;
    }

    // step 3 -> final submit (booking)
    handleContinue();
    // route to the appointment booking page inside onboarding
    router.push("/onboarding/profile");
  };

  return (
    <Card className="shadow-lg gap-0">
      <CardHeader className="border-b-0">
        <Button
          variant="ghost"
          size="icon-sm"
          className="mb-4 -ml-2"
          onClick={() => {
            // navigate between steps when inside the flow; otherwise go back in history
            if (step > 1) {
              setStep(step === 3 ? 2 : 1);
              return;
            }
            window.history.back();
          }}
        >
          <ArrowLeft className="h-4 w-4 text-[#4A7C7E]" />
        </Button>
      </CardHeader>

      <CardContent className="space-y-3">
        {step === 1 && (
          <TreatmentsStep
            selectedTreatments={selectedTreatments}
            onToggleTreatment={handleCheckboxChange}
          />
        )}

        {/* Step 2: patient-type selection (matches design in screenshot) */}
        {step === 2 && (
          <PatientTypeStep
            selectedPlan={selectedPlan}
            onSelectPlan={(plan) => setSelectedPlan(plan)}
          />
        )}

        {step === 3 && (
          <SummaryStep
            selectedPlan={selectedPlan}
            selectedTreatments={selectedTreatments}
          />
        )}

        <Button
          className={`w-full mt-6 h-12 ${primaryClass}`}
          size="lg"
          onClick={handleMainContinue}
          disabled={!isPrimaryEnabled}
        >
          {step === 3 ? "Book My Appointment" : "Continue"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="text-center pt-4 text-sm text-gray-500">
          Already Have An Account?{" "}
          <Link href="/signin" className="text-[#4A7C7E] hover:underline">
            Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
