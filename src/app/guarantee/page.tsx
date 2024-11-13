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

          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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

          <section className="bg-muted  rounded-none  p-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#004a82]">
              Ready to Experience Top-Quality Painting?
            </h2>
            <p className="text-xl text-muted-foreground max-w-prose mx-auto">
              At Top Pro Painting, our team goes above and beyond to ensure your
              total satisfaction. Our painters have years of experience and each
              of them receives comprehensive training to make sure they provide
              services that meet our high standards. You have many options when
              it comes to local painting companies - Top Pro Painting promises
              to be the simplest painting experience.
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
      "We offer color testing by Sherwin-Williams, limited to 3 color options per project at no charge.",
  },
];
