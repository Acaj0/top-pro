import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function GuaranteePage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar></NavBar>
      <main className="bg-[#004a82]">
        <div className="container mt-2 mx-auto px-4 py-8 space-y-12 ">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Our Top Pro Painting Guarantee
            </h1>
            <p className="text-xl text-gray-300 max-w-prose mx-auto">
              We stand behind our work with an ironclad guarantee. Your
              satisfaction is our top priority.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guarantees.map((guarantee, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-4 text-[#004a82]">
                  {guarantee.icon()}
                  <h2 className="text-2xl font-semibold">{guarantee.title}</h2>
                  <p className="text-muted-foreground">
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="bg-muted rounded-lg p-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#004a82]">
              Ready to Experience Top-Quality Painting?
            </h2>
            <p className="text-xl text-muted-foreground max-w-prose mx-auto">
              Let us bring your vision to life with our guaranteed professional
              painting services.
            </p>
            <Button
              className="bg-primary mt-5 w-72 h-12 text-2xl text-[white] bg-[#f7930f] hover:bg-[#004a82]"
              size={"lg"}
            >
              <Link href="/#contact">GET A FREE QUOTE</Link>
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
}

const guarantees = [
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-12 h-12 text-primary "
      >
        <path
          fill="#004a82"
          d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"
        />
      </svg>
    ),
    title: "100% Satisfaction Guarantee",
    description:
      "If you're not completely satisfied with our work, we'll make it right at no additional cost to you.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-12 h-12 text-primary"
      >
        <path
          fill="#004a82"
          d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
        />
      </svg>
    ),
    title: "On-Time Completion",
    description:
      "We guarantee to complete your project on schedule or we'll discount our services by 10% for each day we're late.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-12 h-12 text-primary"
      >
        <path
          fill="#004a82"
          d="M0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 192c-35.3 0-64-28.7-64-64L0 64zM160 352c0-17.7 14.3-32 32-32l0-16c0-44.2 35.8-80 80-80l144 0c17.7 0 32-14.3 32-32l0-32 0-90.5c37.3 13.2 64 48.7 64 90.5l0 32c0 53-43 96-96 96l-144 0c-8.8 0-16 7.2-16 16l0 16c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128z"
        />
      </svg>
    ),
    title: "Premium Materials",
    description:
      "We use only top-quality paints and materials, ensuring a beautiful and long-lasting finish.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-12 h-12 text-primary"
      >
        <path
          fill="#004a82"
          d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
        />
      </svg>
    ),
    title: "Licensed and Insured",
    description:
      "Rest easy knowing that our team is fully licensed, bonded, and insured for your protection.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-12 h-12 text-primary"
      >
        <path
          fill="#004a82"
          d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
        />
      </svg>
    ),
    title: "Color Satisfaction",
    description:
      "Not happy with the color? We'll repaint one wall or room at no extra charge within 30 days of project completion.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-12 h-12 text-primary"
      >
        <path
          fill="#004a82"
          d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"
        />
      </svg>
    ),
    title: "5-Year Workmanship Warranty",
    description:
      "Our work is guaranteed for 5 years. If any issues arise due to our workmanship, we'll fix it free of charge.",
  },
];
