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

export default function CommercialPaintingPage() {
  const services = [
    "Commercial properties",
    "Homeowners associations",
    "Shopping centers",
    "Universities",
    "Schools",
    "Offices",
    "Restaurants",
    "Warehouses",
    "Hospitals",
    "And more!"
  ];
  return (
    <div className="min-h-screen bg-background">
      <NavBar></NavBar>
      <main className="container mx-auto px-4 py-8 space-y-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#004a82]">
              Commercial Painting Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Elevate your business image with our professional commercial painting services. We deliver quality results for a wide range of commercial properties.
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
          <div className="relative aspect-video  rounded-none  overflow-hidden">
            <Image
              src="/comer.jpg"
              alt="Commercial painting showcase"
              layout="fill"
              objectFit="cover"
              className=" rounded-none"
            />
          </div>
        </section>

        <section className="bg-muted  rounded-none p-8 space-y-4">
          <h2 className="text-3xl font-semibold text-[#004a82] mb-4">
            Tailored Commercial Painting Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Our Painters can tailor our commercial painting services to meet a variety of project objectives. We offer anything from meticulous painting to volume-based, cost-conscious projects. We will work with you to design your job before we start, ensuring that the proper paints, finishes, tools, and techniques are utilized to create the results you want within your budget.
          </p>
        </section>

        <section className="space-y-8 bg-[#004a82]  rounded-none p-6">
          <h2 className="text-3xl font-semibold text-center text-white">
            Why Choose Our Commercial Painting Service?
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

        <section className="bg-muted  rounded-none p-8 space-y-4">
          <h2 className="text-3xl font-semibold text-[#004a82]">
            Our Commercial Painting Process
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
            Ready to Transform Your Commercial Space?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let our expert painters enhance your business environment. Contact us today
            for a free consultation and quote.
          </p>
          <Button
            size="lg"
            className="mt-5 bg-primary w-80 h-12 text-lg text-[white] bg-[#f7930f] hover:bg-[#004a82]"
          >
            <Link href="/#contact">Schedule Your Commercial Painting</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}

const advantages = [
  {
    title: "Experienced Team",
    description:
      "Our painters are highly skilled in commercial projects of all sizes and complexities.",
  },
  {
    title: "Minimal Disruption",
    description:
      "We work efficiently to minimize impact on your business operations.",
  },
  {
    title: "Quality Materials",
    description:
      "We use premium, long-lasting paints and finishes suitable for commercial environments.",
  },
  {
    title: "Customized Solutions",
    description:
      "We tailor our services to meet your specific needs, timeline, and budget.",
  },
  {
    title: "Safety Compliance",
    description:
      "We adhere to all safety regulations and maintain a clean work environment.",
  },
  {
    title: "Comprehensive Service",
    description:
      "From surface preparation to final touches, we handle all aspects of your painting project.",
  },
];

const process = [
  {
    title: "Initial Consultation",
    description:
      "We assess your commercial space and discuss your project requirements and timeline.",
  },
  {
    title: "Customized Proposal",
    description:
      "We provide a detailed proposal tailored to your specific needs and budget.",
  },
  {
    title: "Preparation",
    description:
      "We prepare the surfaces, protect fixtures, and set up our equipment efficiently.",
  },
  {
    title: "Paint Application",
    description:
      "Our team applies paint with precision, ensuring even coverage and a professional finish.",
  },
  {
    title: "Quality Control",
    description:
      "We conduct thorough inspections throughout the project to maintain high standards.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We review the completed work with you to ensure your complete satisfaction.",
  },
];