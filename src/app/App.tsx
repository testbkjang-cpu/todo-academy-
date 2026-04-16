import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TargetAudienceSection } from "./components/TargetAudienceSection";
import { TodoConnectionSection } from "./components/TodoConnectionSection";
import { PersonalizedLearningSection } from "./components/PersonalizedLearningSection";
import { LearningActivitiesSection } from "./components/LearningActivitiesSection";
import { AIActivitySection } from "./components/AIActivitySection";
import { CurriculumFullSection } from "./components/CurriculumFullSection";
import { DailyStudySection } from "./components/DailyStudySection";
import { UnlimitedLearningSection } from "./components/UnlimitedLearningSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { FloatingCTAButton } from "./components/FloatingCTAButton";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white pb-16">
        <Navbar />
        <HeroSection />
        <PersonalizedLearningSection />
        <LearningActivitiesSection />
        <AIActivitySection />
        <TargetAudienceSection />
        <TodoConnectionSection />
        <CurriculumFullSection />
        <DailyStudySection />
        <UnlimitedLearningSection />
        <ReviewsSection />
        <CTASection />
        <Footer />
        <FloatingCTAButton />
      </div>
    </LanguageProvider>
  );
}
