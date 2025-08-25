import { HeroSection } from "@/components/hero-section";
import { TrustedBySection } from "@/components/trusted-by-section";
import { SolutionsSection } from "@/components/solutions-section";
import { FeaturesSection } from "@/components/features-section";
import { UxOnboardingSection } from "@/components/ux-onboarding-section";
import { OnboardingStepsSection } from "@/components/onboarding-steps-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { Web3UsabilitySection } from "@/components/web3-usability-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { MoreFromJustaNameSection } from "@/components/more-from-justaname-section";

export default function Home() {
  return (
    <main className="min-h-screen gap-[150px] flex flex-col">
      <HeroSection />
      <TrustedBySection />
      <SolutionsSection />
      <FeaturesSection />
      <UxOnboardingSection />
      <OnboardingStepsSection />
      <HowItWorksSection />
      <Web3UsabilitySection />
      <UseCasesSection />
      <TestimonialsSection />
      <MoreFromJustaNameSection />
    </main>
  );
}
