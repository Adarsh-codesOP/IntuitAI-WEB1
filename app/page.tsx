import { HeroSection } from "@/components/hero-section"
import { ZipInstallationGuide } from "@/components/zip-installation-guide"
import { DeveloperModeExplainer } from "@/components/developer-mode-explainer"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroSection />
      <ZipInstallationGuide />
      <DeveloperModeExplainer />
      <FAQSection />
    </main>
  )
}
