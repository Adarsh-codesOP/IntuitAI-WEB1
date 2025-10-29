"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, ChevronDown } from "lucide-react"
import { DownloadSection } from "./download-section"

export function InstallationGuide() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0)

  const steps = [
    {
      title: "Download the CRX File",
      description: "Click the download button below to get the intuitAI extension file",
      details: "The CRX file is the Chrome extension package that contains all the necessary code and resources.",
    },
    {
      title: "Open Chrome Extensions",
      description: "Navigate to chrome://extensions/ in your browser",
      details: "You can also access this through Chrome menu > More tools > Extensions",
    },
    {
      title: "Enable Developer Mode",
      description: "Toggle the Developer Mode switch in the top right corner",
      details: "This allows you to install extensions from files instead of just the Chrome Web Store",
    },
    {
      title: "Install the Extension",
      description: "Drag and drop the CRX file into the extensions page",
      details: "Alternatively, click 'Load unpacked' and select the extracted folder",
    },
    {
      title: "Configure API Key",
      description: "Add your Google Gemini API key in the extension settings",
      details: "Get a free API key at makersuite.google.com. This is required for the AI to work",
    },
    {
      title: "Start Solving",
      description: "Open any quiz and click the intuitAI icon to get started",
      details: "The extension will automatically detect quiz questions and provide answers",
    },
  ]

  return (
    <section id="download" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Installation Guide</h2>
          <p className="text-lg text-muted-foreground">
            Follow these simple steps to install intuitAI on your Chrome browser
          </p>
        </div>

        {/* Download Section */}
        <div className="mb-12">
          <DownloadSection />
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-lg bg-card/40 backdrop-blur-sm border border-border/20 overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <button
                onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                className="w-full p-6 flex items-center justify-between hover:bg-card/60 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    expandedStep === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedStep === i && (
                <div className="px-6 pb-6 pt-0 border-t border-border/20 text-muted-foreground">{step.details}</div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 rounded-lg bg-accent/10 border border-accent/20">
          <h3 className="font-semibold mb-2 text-accent">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            If you encounter any issues during installation, check the FAQ section below or visit our GitHub repository
            for more information.
          </p>
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/Adarsh-codesOP/IntuitAI.git" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Documentation
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
