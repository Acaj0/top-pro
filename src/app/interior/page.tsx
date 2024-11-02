import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import NavBar from "@/components/NavBar"

const CheckCircleIcon = () => (
  <svg height="20px" version="1.1" viewBox="0 0 20 20" width="20px" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g fill="currentColor">
        <path d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z" />
      </g>
    </g>
  </svg>
)

const PaintIcon = () => (
  <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2">
    <g clipPath="url(#clip0)" fill="currentColor">
      <path d="M16.9587 6.38659C16.9941 6.40257 17.0271 6.41956 17.0618 6.43146C18.6834 6.98866 19.5232 8.21591 19.8798 9.84079C19.9908 10.3473 19.9253 10.8602 19.7639 11.3568C19.6995 11.5636 19.5915 11.7535 19.4481 11.9153C19.3047 12.0771 19.1285 12.2075 18.9301 12.2942C18.7317 12.3809 18.5152 12.4221 18.2981 12.4184C18.081 12.4147 17.8664 12.3661 17.6718 12.2739C17.3858 12.1373 17.1373 11.9159 16.8778 11.7274C16.7001 11.6001 16.5284 11.4645 16.3196 11.3068C16.2669 11.7009 16.2438 12.0326 16.1734 12.3538C15.8183 14.0034 14.9994 15.3616 13.6778 16.3909C13.4015 16.5995 13.1057 16.7805 12.7945 16.9309C11.9778 17.3397 11.1683 17.2778 10.3844 16.8387C9.91945 16.5721 9.50186 16.2212 9.16186 15.8034C9.08186 15.7072 9.00186 15.6114 8.91186 15.5034C8.65186 15.6389 8.41186 15.7826 8.14186 15.8976C7.83186 16.0331 7.51186 16.1439 7.19186 16.2651C7.12186 16.2922 7.03186 16.3013 6.98186 16.3484C6.77186 16.5368 6.54186 16.5034 6.30186 16.4576C6.06186 16.4126 5.82186 16.3634 5.58186 16.3076C5.16186 16.2143 4.76186 16.0493 4.40186 15.8226C2.65186 14.6626 1.48186 13.0493 0.768186 11.0576C0.358186 9.93134 0.183186 8.74384 0.245186 7.55134C0.255186 7.09384 0.389186 6.64384 0.628186 6.26134C0.775186 6.03884 0.948186 5.84634 1.22186 5.77634C1.31686 5.74884 1.40686 5.70384 1.48686 5.64384C3.41686 4.26384 5.52686 3.14384 7.62686 1.98634C8.66686 1.41134 9.72186 0.867344 10.7619 0.268344C11.3269 -0.0641656 11.8769 -0.00166559 12.4369 0.183344C12.9819 0.364344 13.4569 0.694344 13.8969 1.07384C15.3719 2.35134 16.2969 3.97884 16.8619 5.83384C16.9039 6.01384 16.9339 6.19634 16.9519 6.38009L16.9587 6.38659ZM15.2619 10.8284C15.1669 10.7484 15.1129 10.7034 15.0559 10.6584C14.5859 10.2734 14.1069 9.89634 13.7069 9.42384C12.3869 7.88634 11.3969 6.09884 10.7969 4.15884C10.5669 3.41634 10.4619 2.63634 10.4889 1.85384C10.4944 1.69634 10.5069 1.53884 10.5194 1.34134C10.3694 1.41884 10.2569 1.46884 10.1494 1.52884C9.61936 1.82884 9.08936 2.12634 8.56436 2.42884C6.80936 3.48884 5.05436 4.54884 3.30436 5.61134C2.83436 5.88884 2.39936 6.23134 1.90936 6.49134C1.79936 6.54884 1.70686 6.63134 1.63686 6.73134C1.56686 6.83134 1.52686 6.94884 1.51436 7.07134C1.40436 7.76634 1.50936 8.45134 1.64186 9.13134C2.00186 10.9634 2.90186 12.5384 4.18186 13.8884C4.92186 14.6534 5.79936 15.2434 6.82936 15.5234C6.94436 15.5634 7.06936 15.5743 7.19186 15.5551C7.81686 15.3851 8.34186 15.0301 8.87686 14.7151C7.94186 12.2551 7.95186 9.79134 8.40686 7.28634C7.90686 6.92634 7.81186 6.65884 7.99186 6.10884C8.10186 5.77884 8.35686 5.57134 8.68686 5.59134C9.40186 5.63384 9.60686 5.77884 9.74686 6.23134C9.79186 6.41134 9.78936 6.60134 9.74686 6.78134C9.67686 7.09634 9.36686 7.18134 9.09186 7.36384C9.04936 8.08134 8.98186 8.82634 8.96936 9.57134C8.95936 10.1534 9.00686 10.7434 9.05186 11.3334C9.11186 12.1684 9.28686 12.9909 9.56186 13.7834C9.60936 13.9184 9.67686 14.0468 9.73686 14.1684L15.2619 10.8284ZM13.2619 7.28684C14.1119 6.57184 15.1119 6.35684 16.1619 6.28134C16.1504 6.22134 16.1344 6.16184 16.1154 6.10384C15.7154 5.09134 15.2219 4.13134 14.6369 3.22134C14.1619 2.49884 13.5619 1.86884 12.8619 1.36384C12.6444 1.20384 12.3869 1.09884 12.1394 0.985344C12.0344 0.945344 11.9244 0.922844 11.8119 0.917344C11.7504 0.903844 11.6869 0.916844 11.6344 0.953344C11.5819 0.989844 11.5444 1.04634 11.5319 1.10884C11.4919 1.21384 11.4694 1.32384 11.4619 1.43634C11.4494 1.82634 11.4569 2.21634 11.4819 2.60384C11.5669 3.50384 11.8744 4.34384 12.2119 5.16884C12.5019 5.91634 12.8694 6.62384 13.3119 7.28634L13.2619 7.28684ZM13.5869 7.76634C13.5914 7.80134 13.5994 7.83584 13.6104 7.86884C13.6474 7.93384 13.6869 7.99884 13.7294 8.06134C14.2119 8.76134 14.7794 9.40634 15.4219 9.96134C15.6119 10.1334 15.8569 10.2434 16.1194 10.2684C16.6319 10.3101 17.1119 10.5434 17.4669 10.9234C17.6119 11.0784 17.7744 11.2234 17.9494 11.3434C18.3669 11.6284 18.8119 11.4651 18.9369 10.9734C19.0244 10.6184 19.0719 10.2551 19.0004 9.88634C18.8294 9.00634 18.3494 8.19884 17.6369 7.63134C17.2869 7.34134 16.8569 7.16634 16.4119 7.12134C15.4119 7.01134 14.4869 7.24384 13.5994 7.74634L13.5869 7.76634ZM9.71186 15.0334C9.94686 15.2734 10.1194 15.4709 10.3094 15.6459C11.1344 16.3909 11.8744 16.4509 12.8094 15.8584C12.8304 15.8444 12.8514 15.8309 12.8719 15.8159C14.1719 14.8834 14.9119 13.5834 15.2619 11.9709L9.71186 15.0334Z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect fill="white" height="17" width="20" />
      </clipPath>
    </defs>
  </svg>
)

export default function InteriorPaintingPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar></NavBar>
      <main className="container mx-auto px-4 py-8 space-y-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Interior Painting Services</h1>
            <p className="text-xl text-muted-foreground">
              Transform your living spaces with our expert interior painting services. We bring color and life to your home,
              one room at a time.
            </p>
            <Button size="lg">Get a Free Quote</Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/interior.jpeg"
              alt="Interior painting showcase"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Why Choose Our Interior Painting Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center space-x-2 text-primary">
                    <CheckCircleIcon />
                    <h3 className="text-xl font-semibold">{advantage.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 space-y-4">
          <h2 className="text-3xl font-semibold">Our Interior Painting Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            {process.map((step, index) => (
              <li key={index} className="text-lg">
                <span className="font-medium">{step.title}:</span> {step.description}
              </li>
            ))}
          </ol>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Ready to Transform Your Space?</h2>
          <p className="text-xl text-muted-foreground">
            Let our expert painters bring your vision to life. Contact us today for a free consultation and quote.
          </p>
          <Button size="lg" className="mt-4">
            <PaintIcon />
            Schedule Your Interior Painting
          </Button>
        </section>
      </main>
    </div>
  )
}

const advantages = [
  {
    title: "Expert Color Consultation",
    description: "Our professional color consultants help you choose the perfect palette for your space.",
  },
  {
    title: "Premium Quality Paints",
    description: "We use only top-tier, long-lasting paints for a beautiful and durable finish.",
  },
  {
    title: "Meticulous Preparation",
    description: "Thorough surface preparation ensures a flawless and long-lasting paint job.",
  },
  {
    title: "Efficient and Tidy Service",
    description: "We work quickly and cleanly, minimizing disruption to your daily life.",
  },
  {
    title: "Detailed Clean-Up",
    description: "We leave your space spotless, so you can enjoy your newly painted interior immediately.",
  },
  {
    title: "Satisfaction Guarantee",
    description: "Our work is backed by a satisfaction guarantee for your peace of mind.",
  },
]

const process = [
  {
    title: "Initial Consultation",
    description: "We discuss your vision, preferences, and provide expert color advice.",
  },
  {
    title: "Surface Preparation",
    description: "We clean, repair, and prime surfaces to ensure the best paint adhesion and finish.",
  },
  {
    title: "Protection of Surroundings",
    description: "We carefully cover and protect your furniture, floors, and fixtures.",
  },
  {
    title: "Paint Application",
    description: "Our skilled painters apply paint with precision, ensuring even coverage and clean lines.",
  },
  {
    title: "Quality Inspection",
    description: "We perform a thorough inspection to ensure every detail meets our high standards.",
  },
  {
    title: "Final Walk-Through",
    description: "We review the completed work with you to ensure your complete satisfaction.",
  },
]