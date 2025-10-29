"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, FileArchive, Folder, Settings, Play, AlertCircle } from "lucide-react"

export function ZipInstallationGuide() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0)

  const steps = [
    {
      title: "Download the ZIP File",
      icon: Download,
      description: "Click the button below to download intuitAI as a ZIP file",
      details:
        "The ZIP file contains the complete extension source code. This is the recommended installation method for maximum control and transparency.",
      action: (
        <a href="https://dclfqalzrwcpaxcvucvb.supabase.co/storage/v1/object/public/download/apti-ext.zip" download>
          <Button className="bg-primary hover:bg-primary/90 gap-2 glow-primary">
            <FileArchive className="w-4 h-4" />
            Download ZIP
          </Button>
        </a>
      ),
    },
    {
      title: "Extract the ZIP File",
      icon: Folder,
      description: "Extract the downloaded ZIP file to a folder on your computer",
      details:
        "Right-click the ZIP file and select 'Extract All' (Windows) or double-click (Mac). Remember the folder location as you'll need it in the next step.",
    },
    {
      title: "Enable Developer Mode",
      icon: AlertCircle,
      description: "Open Chrome and navigate to chrome://extensions/",
      details:
        "Toggle the 'Developer mode' switch in the top-right corner. This allows you to load unpacked extensions from your computer.",
    },
    {
      title: "Load the Extension",
      icon: Settings,
      description: "Click 'Load unpacked' and select the extracted folder",
      details:
        "Navigate to the folder where you extracted the ZIP file and select it. Chrome will load the extension and display it in your extensions list.",
    },
    {
      title: "Configure API Key",
      icon: Settings,
      description: "Add your Google Gemini API key in the extension settings",
      details:
        "Get a free API key at makersuite.google.com. Click the extension icon and go to Settings to add your API key.",
    },
    {
      title: "Start Solving",
      icon: Play,
      description: "Open any quiz and click the intuitAI icon to get started",
      details:
        "The extension will automatically detect quiz questions and provide AI-powered answers. Enjoy instant quiz solutions!",
    },
  ]

  return (
    <section id="download" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Installation Guide</h2>
          <p className="text-lg text-muted-foreground">
            Follow these simple steps to install intuitAI on your Chrome browser
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="rounded-lg bg-card/40 backdrop-blur-md border border-border/20 hover:bg-card/60 hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between hover:bg-card/60 transition-colors"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      expandedStep === i ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </div>
                </button>

                {expandedStep === i && (
                  <div className="px-6 pb-6 pt-0 border-t border-border/20 space-y-4">
                    <p className="text-muted-foreground">{step.details}</p>
                    {step.action && <div className="pt-2">{step.action}</div>}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 rounded-lg bg-card/40 backdrop-blur-md border border-border/20 border-accent/40">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2 text-accent">Why ZIP Installation?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Since intuitAI is not yet available on the Chrome Web Store, we provide the ZIP file for manual
                installation. This method gives you complete transparency and control over the extension code. You can
                review the source code on GitHub before installing.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/Adarsh-codesOP/IntuitAI.git" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
