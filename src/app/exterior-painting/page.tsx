import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { Paintbrush } from "lucide-react";

const CheckCircleIcon = () => (
  <svg
    height="20px"
    version="1.1"
    viewBox="0 0 20 20"
    width="20px"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
  >
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g fill="currentColor">
        <path
          fill="#f7930f"
          d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"
        />
      </g>
    </g>
  </svg>
);

export default function ExteriorPaintingPage() {
  const services = [
    "Concrete Painting",
    "Deck Staining",
    "Fence Painting",
    "Power Washing",
    "Sanding & Prep Work",
    "Wood Staining",
    "Lanai Painting",
    "Pool Deck",
    "Driveway / walkway"
  ];
  return (
    <div className="min-h-screen bg-background">
      <NavBar></NavBar>
      <main className="container mx-auto px-4 py-8 space-y-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#004a82]">
              Exterior Painting Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Enhance your home's curb appeal with our expert exterior painting
              services. We protect and beautify your property, from walls to decks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <Paintbrush
                      className="h-6 w-6 text-blue-500"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-3 text-md leading-6 font-medium text-gray-900">
                    {service}
                  </p>
                </div>
              ))}
            </div>
            <Button
              className="bg-primary mt-5 w-72 h-12 text-2xl text-[white] bg-[#f7930f] hover:bg-[#004a82]"
              size={"lg"}
            >
              <Link href="/#contact">GET A FREE QUOTE</Link>
            </Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/outside.jpeg"
              alt="Exterior painting showcase"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="space-y-8 bg-[#004a82] rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-center text-white">
            Why Choose Our Exterior Painting Service?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center space-x-2 text-primary">
                    <CheckCircleIcon />
                    <h3 className="text-xl font-semibold text-[#004a82]">
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 space-y-4">
          <h2 className="text-3xl font-semibold text-[#004a82]">
            Our Exterior Painting Process
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            {process.map((step, index) => (
              <li key={index} className="text-lg ">
                <span className="font-medium">{step.title}:</span>{" "}
                {step.description}
              </li>
            ))}
          </ol>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold text-[#004a82]">
            Ready to Transform Your Home's Exterior?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let our expert painters enhance your home's curb appeal. Contact us today
            for a free consultation and quote.
          </p>
          <Button
            size="lg"
            className="mt-5 bg-primary w-80 h-12 text-lg text-[white] bg-[#f7930f] hover:bg-[#004a82]"
          >
            <Link href="/#contact">Schedule Your Exterior Painting</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}

const advantages = [
  {
    title: "Weather-Resistant Paints",
    description:
      "We use high-quality, weather-resistant paints to protect your home from the elements.",
  },
  {
    title: "Comprehensive Surface Prep",
    description:
      "Our thorough preparation ensures a long-lasting, beautiful finish on all exterior surfaces.",
  },
  {
    title: "Expert Color Consultation",
    description:
      "Our color experts help you choose the perfect exterior palette to enhance your home's appeal.",
  },
  {
    title: "Efficient Project Management",
    description:
      "We complete your exterior painting project quickly and with minimal disruption to your daily life.",
  },
  {
    title: "Attention to Detail",
    description:
      "From trim to siding, we ensure every aspect of your home's exterior is painted to perfection.",
  },
  {
    title: "Satisfaction Guarantee",
    description:
      "We stand behind our work with a satisfaction guarantee for your peace of mind.",
  },
];

const process = [
  {
    title: "Initial Consultation",
    description:
      "We assess your home's exterior and discuss your vision and color preferences.",
  },
  {
    title: "Surface Preparation",
    description:
      "We clean, repair, and prime all surfaces to ensure the best paint adhesion and finish.",
  },
  {
    title: "Protection of Surroundings",
    description:
      "We carefully cover and protect landscaping, outdoor furniture, and other items.",
  },
  {
    title: "Paint Application",
    description:
      "Our skilled painters apply paint with precision, ensuring even coverage and clean lines.",
  },
  {
    title: "Quality Inspection",
    description:
      "We perform a thorough inspection to ensure every detail meets our high standards.",
  },
  {
    title: "Final Walk-Through",
    description:
      "We review the completed work with you to ensure your complete satisfaction.",
  },
];