"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Do I need an API key?",
    answer:
      "Yes, you need a Google Gemini API key to use intuitAI. You can get a free one at makersuite.google.com. The API key is used to power the AI quiz-solving capabilities.",
  },
  {
    question: "Is my data safe?",
    answer:
      "All your data stays on your device. We don't collect, store, or transmit any of your quiz data. The extension only sends quiz questions to the Gemini API for analysis.",
  },
  {
    question: "Why is the extension not available on Chrome Web Store?",
    answer:
      "intuitAI is currently in development and not yet published on the Chrome Web Store. You can install it manually using the CRX file provided on this page.",
  },
  {
    question: "Can I use this on other browsers?",
    answer:
      "Currently, intuitAI is only available for Chrome. We're working on support for other browsers like Firefox and Edge in the future.",
  },
  {
    question: "How accurate are the answers?",
    answer:
      "The accuracy depends on the quality of the quiz questions and the AI model. intuitAI uses Google's Gemini AI, which is highly accurate for most quiz types.",
  },
  {
    question: "Is this open source?",
    answer:
      "Yes! intuitAI is completely open source. You can view the code, contribute, and even fork the project on GitHub.",
  },
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about intuitAI</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg bg-card/40 backdrop-blur-sm border border-border/20 overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between hover:bg-card/60 transition-colors text-left"
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    expandedIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === i && (
                <div className="px-6 pb-6 pt-0 border-t border-border/20 text-muted-foreground">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/download">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
