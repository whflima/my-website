import CareerHistorySection from "@/components/CareerHistorySection";
import CertificationSection from "@/components/CertificationSection";
import EducationSection from "@/components/EducationSection";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="flex-auto">
      <Header />
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <CareerHistorySection />
      <EducationSection />
      <CertificationSection />
    </main>
  );
}
