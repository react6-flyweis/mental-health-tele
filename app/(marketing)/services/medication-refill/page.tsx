import FAQSection from "@/components/FAQSection";
import MedicationsSupported from "@/components/services/MedicationsSupported";
import RefillHero from "@/components/services/RefillHero";
import TreatmentRenewal from "@/components/services/TreatmentRenewal";
import TreatmentsComparison from "@/components/services/TreatmentsComparison";
import TreatmentsFeatures from "@/components/services/TreatmentsFeatures";
import TreatmentsPricing from "@/components/services/TreatmentsPricing";
import NewPrescription from "@/components/services/NewPrescription";
import TrustedProvidersSection from "@/components/services/TrustedProvidersSection";
import CareManagedSection from "@/components/services/CareManagedSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";

export default function page() {
  return (
    <div>
      <RefillHero />
      <TreatmentRenewal />
      <TreatmentsPricing />
      <TreatmentsFeatures />
      <SuccessStoriesSection />
      <MedicationsSupported />
      <TreatmentsComparison />
      <NewPrescription />
      <TrustedProvidersSection />
      <CareManagedSection />
      <FAQSection />
    </div>
  );
}
