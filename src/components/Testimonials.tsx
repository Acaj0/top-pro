import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  name: string
  rating: number
}

export default function Testimonials() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 items-center justify-center">
      <div className="flex flex-col items-center justify-center px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#004a82] sm:text-4xl md:text-5xl text-center mb-12">
          See What Our Customers Say About Us
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Top Pro Painting transformed our home! Their attention to detail and color expertise made all the difference."
            name="Emily Johnson"
            rating={5}
          />
          <TestimonialCard
            quote="Professional, punctual, and perfect results. I couldn't be happier with the exterior paint job they did on my house."
            name="Michael Smith"
            rating={5}
          />
          <TestimonialCard
            quote="The team at Top Pro Painting was fantastic. They helped me choose the perfect colors for my office and executed flawlessly."
            name="Sarah Davis"
            rating={4}
          />
          <TestimonialCard
            quote="I was impressed by their eco-friendly paint options. My nursery looks beautiful and I feel good about the materials used."
            name="Jessica Brown"
            rating={5}
          />
          <TestimonialCard
            quote="They completed our large commercial project on time and on budget. The results speak for themselves!"
            name="Robert Wilson"
            rating={5}
          />
          <TestimonialCard
            quote="Top Pro Painting's color consultation service was invaluable. They helped me create a cohesive look throughout my home."
            name="Amanda Taylor"
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, name, rating }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <blockquote className="text-lg mb-4">{`"${quote}"`}</blockquote>
        <p className="font-semibold">{name}</p>
      </CardContent>
    </Card>
  )
}