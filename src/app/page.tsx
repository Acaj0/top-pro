import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { Award, Calendar, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from "@/components/NavBar";

export default function Component() {
  const common = { alt: "Art Direction Example", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 2800,
    height: 920,
    quality: 100,
    priority: true,
    unoptimized:true,
    src: "/ready_pc.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 700,
    height: 1400,
    quality: 100,
    src: "/ready_mob.png",
  });
  return (
    <div className="flex flex-col min-h-screen overflow-clip">
      <NavBar></NavBar>
      <main className="flex flex-col w-screen overflow-clip">
        <section className="w-full py-1  flex flex-col justify-center bg-white">
          <picture>
            <source media="(min-width: 1000px)" srcSet={desktop} />
            <source media="(min-width: 500px)" srcSet={mobile} />
            <img
              {...rest}
              style={{ width: "100%", height: "auto" }}
              alt="hero"
            />
          </picture>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center text-[#004a82]">
              TRANSFORM YOUR SPACE
            </h1>
            <p className="mx-auto max-w-[700px] mt-2 text-gray-500 md:text-xl">
              Professional painting services just a click away.
            </p>

            <Button
              className="bg-primary mt-5 text-white bg-[#f7930f] hover:bg-[#004a82]"
              size={"lg"}
            >
              GET A FREE QUOTE
            </Button>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Looking for the best painting service in the area?
              </h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-lg">
                Discover the Premium Painting difference! We're not just about
                applying paint; our goal is to transform your space. Our
                unwavering dedication to excellence, combined with our
                meticulous approach to every detail, guarantees a flawless
                finish. From homes to commercial spaces, our team of
                professionals has been delivering exceptional service for years,
                with thousands of satisfied clients.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold">+2000 Customers</h3>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold">+4 Years Experience</h3>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold">Insured</h3>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold">Licensed</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Interior painting"
                    className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold">Interior Painting</h3>
                <p className="text-gray-500">
                  Transform your indoor spaces with our expert interior painting
                  services.
                </p>
              </div>
              <div className="relative group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Exterior painting"
                    className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold">Exterior Painting</h3>
                <p className="text-gray-500">
                  Enhance your curb appeal with our professional exterior
                  painting.
                </p>
              </div>
              <div className="relative group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Commercial painting"
                    className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold">Commercial Painting</h3>
                <p className="text-gray-500">
                  Professional painting solutions for your business space.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Premium Painting Co. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
