"use client"

import { Brain, Zap, Lock, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Smart Question Detection",
    description: "Automatically identifies and analyzes quiz questions with advanced AI algorithms",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get answers in seconds with optimized processing and caching",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "All data stays on your device. No tracking, no data collection",
  },
  {
    icon: BarChart3,
    title: "Complete History",
    description: "Track your quiz attempts and performance over time",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to ace your quizzes with intelligent AI assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/20 hover:border-primary/40 transition-all duration-300 hover:bg-card/60 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
