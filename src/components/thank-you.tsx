"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#004a82]">
        
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Card className="mx-auto max-w-2xl rounded-none border-none shadow-lg">
            <CardContent className="pt-10 pb-10 px-8">
              <div className="flex flex-col items-center space-y-6">
                {/* Logo space */}
                
                <CheckCircle className="h-20 w-20 text-[#f7930f]" />

                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Thank You!</h1>

                <p className="text-xl text-gray-600 max-w-md">
                  Your message has been successfully sent. We appreciate your interest and will get back to you as soon
                  as possible.
                </p>

                <Button asChild className="mt-8 rounded-none bg-[#004a82] hover:bg-[#f7930f] px-8 py-6 h-auto text-lg">
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

