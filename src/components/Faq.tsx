'use client'
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What types of painting services do you offer?",
    answer: "We offer a wide range of painting services including interior and exterior residential painting, commercial painting, color consultation, cabinet refinishing, and deck staining."
  },
  {
    question: "How long does a typical painting project take?",
    answer: "The duration of a project depends on its size and complexity. A standard interior room usually takes 1-2 days, while an exterior project for an average-sized home might take 3-5 days. We'll provide a more accurate timeline during our initial consultation."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we offer free, no-obligation estimates for all our painting services. Contact us to schedule an on-site evaluation and detailed quote."
  },
  {
    question: "What kind of paint do you use?",
    answer: "We use high-quality, durable paints from trusted brands like Sherwin-Williams and Benjamin Moore. We also offer eco-friendly and low-VOC options for environmentally conscious customers."
  },
  {
    question: "Are your painters licensed and insured?",
    answer: "Absolutely. All our painters are fully licensed, bonded, and insured. We prioritize the safety of our team and your property throughout the painting process."
  },
  {
    question: "How does the color consultation work?",
    answer: "Take the guesswork out of choosing the right hue. Our Color to Go® paint samples are great for giving you an idea of how a color looks and feels in your space throughout the day. Each sample comes in a quart-sized container that holds enough paint for creating test swatches so you can choose your final color with confidence."
  }
]

export default function Faq() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-white">
      <div className="container w-full content-center place-items-center center px-4 md:px-6">
        <h2 className="text-3xl text-[#004a82] font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="mb-4  rounded-none ">
      <CardContent className="p-0">
        <Button
          className="w-full text-left p-4 flex justify-between items-center"
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <span className="font-semibold text-md md:text-lg text-[#004a82]">{question}</span>
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </Button>
        {isOpen && (
          <div
            className="p-4 pt-0 mt-2 text-gray-700"
            id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {answer}
          </div>
        )}
      </CardContent>
    </Card>
  )
}