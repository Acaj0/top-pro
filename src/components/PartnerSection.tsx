import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "Sherwin Williams",
    logo: "/sherwin.png",
    paletteUrl:
      "https://www.sherwin-williams.com/homeowners/color/find-and-explore-colors/paint-colors-by-family",
  },
  {
    name: "Benjamin Moore",
    logo: "/benjamin.svg",
    paletteUrl:
      "https://www.benjaminmoore.com/en-us/paint-colors/color-families",
  },
];

export function PartnerSection() {
  return (
    <section className=" pt-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#004a82]">
          Our Trusted Partners
        </h2>
        <p className="text-center mb-8 text-gray-500">
          Click on a partner to explore their color palettes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <Link
                  href={partner.paletteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={200}
                    height={100}
                    className="mx-auto"
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-white w-full h-1 rounded-md items-center mt-14"></div>
      </div>
    </section>
  );
}
