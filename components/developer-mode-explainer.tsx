"use client"

import { AlertTriangle, Shield, Eye, Code } from "lucide-react"

export function DeveloperModeExplainer() {
  const reasons = [
    {
      icon: Eye,
      title: "Transparency",
      description: "See exactly what code is running in your browser. Open source means no hidden functionality.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Review the source code to ensure your data and API keys are handled securely.",
    },
    {
      icon: Code,
      title: "Customization",
      description: "Modify the extension to suit your needs or contribute improvements back to the project.",
    },
    {
      icon: AlertTriangle,
      title: "Control",
      description: "You have full control over when and how the extension is updated.",
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Why Developer Mode?</h2>
          <p className="text-lg text-muted-foreground">
            Understanding the developer mode warning and why it's important
          </p>
        </div>

        {/* Warning Box */}
        <div className="mb-12 p-6 rounded-lg bg-destructive/10 border border-destructive/30">
          <div className="flex gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Chrome Developer Mode Warning</h3>
              <p className="text-muted-foreground mb-4">
                When you enable Developer Mode and load unpacked extensions, Chrome displays a warning. This is a
                security feature to remind you that you're running code that hasn't been verified by the Chrome Web
                Store. This is completely normal and expected for open-source projects.
              </p>
              <p className="text-sm text-muted-foreground">
                Since intuitAI is open-source and available on GitHub, you can review the entire codebase before
                installation. This transparency is actually more secure than closed-source extensions.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="p-6 rounded-lg bg-card/40 backdrop-blur-md border border-border/20 hover:bg-card/60 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-12 p-8 rounded-lg bg-card/40 backdrop-blur-md border border-border/20 border-primary/40">
          <h3 className="text-2xl font-bold mb-4">You Can Trust intuitAI</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>100% open-source code available on GitHub</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>No telemetry or data collection beyond what's necessary</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Your API keys are stored locally in your browser</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Community-driven development and improvements</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
