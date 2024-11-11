import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ContactForm from "@/components/Contact-form";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function Component() {
  const common = { alt: "Art Direction Example", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 2800,
    height: 920,
    quality: 100,
    src: "/pc2.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 700,
    height: 1400,
    quality: 100,
    src: "/readymob2.png",
  });
  return (
    <div className="flex flex-col min-h-screen overflow-clip">
      <NavBar></NavBar>
      <main className="flex flex-col w-screen overflow-clip">
        <FloatingContactButtons></FloatingContactButtons>
        <section className="w-full py-1 flex flex-col justify-center bg-white">
          <picture>
            <source media="(min-width: 1000px)" srcSet={desktop} />
            <source media="(min-width: 500px)" srcSet={mobile} />
            <img
              {...rest}
              style={{ width: "100%", height: "auto" }}
              alt="hero"
            />
          </picture>
          <div className="flex flex-col items-center bg-[#004a82]">
            <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl text-center text-white">
              TRANSFORM YOUR SPACE
            </h1>
            <p className="mx-auto max-w-[700px] mt-2 mb-5 text-gray-200 md:text-xl">
              Professional painting services just a click away.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button
              className=" mt-5 w-72 h-12 text-2xl motion-safe:animate-bounce rounded-none text-[white] bg-[#a8cf45] hover:bg-[#004a82]"
              size={"lg"}
            >
              <Link href="#contact">GET A FREE QUOTE</Link>
            </Button>
          </div>
        </section>
        <section className="w-full  py-12 md:py-24 lg:py-24 ">
          <div className="flex flex-col px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl text-[#004a82]">
                Looking for the best painting service in the area?
              </h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-lg">
                Discover the Top Pro Painting difference! We're not just about
                applying paint, our goal is to transform your space. Our
                unwavering dedication to excellence, combined with our
                meticulous approach to every detail, guarantees a flawless
                finish. From homes to commercial spaces, our team of
                professionals has been delivering exceptional service for years,
                with thousands of satisfied clients.
              </p>
            </div>
            <div className="grid grid-cols-2  gap-8 mt-16 md:px-96">
              <Card className="text-center flex items-center justify-center outline outline-[#004a82]">
                <CardContent className="p-6 items-center justify-center flex flex-col md:flex-row gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    fill="#004a82"
                    width={100}
                  >
                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                  </svg>
                  <h3 className="font-bold text-[#004a82]">+2000 Customers</h3>
                </CardContent>
              </Card>
              <Card className="text-center flex items-center justify-center outline outline-[#004a82]">
                <CardContent className="p-6 items-center justify-center flex flex-col md:flex-row gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#004a82"
                    width={90}
                  >
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />
                  </svg>{" "}
                  <h3 className="font-bold text-[#004a82]">
                    +4 Years Experience
                  </h3>
                </CardContent>
              </Card>
              <Card className="text-center flex items-center justify-center outline outline-[#004a82]">
                <CardContent className="p-6 items-center justify-center flex flex-col md:flex-row gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="#004a82"
                    width={100}
                  >
                    <path d="M0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 159-42.4 17L304 224l-32 0c-8.8 0-16 7.2-16 16l0 32 0 24.2 0 7.8c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9l-96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-96 0c-26.5 0-48-21.5-48-48L0 48zM80 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm80 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM64 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 96c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm80 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8l0 187.8c68.2-33 91.5-99 95.4-149.7z" />
                  </svg>{" "}
                  <h3 className="font-bold text-[#004a82]">Insured</h3>
                </CardContent>
              </Card>
              <Card className="text-center flex items-center justify-center outline outline-[#004a82]">
                <CardContent className="p-6 items-center justify-center flex flex-col md:flex-row gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    fill="#004a82"
                    width={70}
                  >
                    <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
                  </svg>{" "}
                  <h3 className="font-bold text-[#004a82]">Licensed</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full pt-10 pb-12 md:pb-24 lg:pb-32 bg-[#004a82]"
        >
          <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center text-white">
            Our Services{" "}
          </h3>
          <div className="flex flex-col mt-10 px-4 md:px-64">
            <div className="grid gap-10 md:grid-cols-2 ">
              <div className="relative group">
                <div className="overflow-hidden ">
                  <a href="/interior">
                    <Image
                      src="/interior.jpeg"
                      width={600}
                      height={400}
                      alt="Interior painting"
                      className="object-cover w-full h-96 transition-transform group-hover:scale-105"
                    />
                  </a>
                </div>
                <a
                  href="/interior"
                  className="hover:underline text-xl font-bold text-white"
                >
                  Interior Painting
                </a>
                <p className="text-gray-300">
                  Transform your indoor spaces with our expert interior painting
                  services.
                </p>
              </div>
              <div className="relative group">
                <div className="overflow-hidden ">
                  <a href="/exterior-painting">
                    <Image
                      src="/outside.jpeg"
                      width={600}
                      height={400}
                      alt="Exterior painting"
                      className="object-cover w-full h-96 transition-transform group-hover:scale-105"
                    />
                  </a>
                </div>
                <a href="/exterior-painting">
                  <h3 className="mt-4 text-xl font-bold text-white">
                    Exterior Painting
                  </h3>
                  <p className="text-gray-300">
                    Enhance your curb appeal with our professional exterior
                    painting.
                  </p>
                </a>
              </div>
              <div className="relative group">
                <div className="overflow-hidden ">
                  <a href="/commercial-painting">
                    <Image
                      src="/comer.jpg"
                      width={600}
                      height={400}
                      alt="Commercial painting"
                      className="object-cover w-full h-96 transition-transform group-hover:scale-105"
                    />
                  </a>
                </div>
                <a href="/commercial-painting">
                  <h3 className="mt-4 text-xl font-bold text-white">
                    Commercial Painting
                  </h3>
                  <p className="text-gray-300">
                    Professional painting solutions for your business space.
                  </p>
                </a>
              </div>
              <div className="relative group">
                <div className="overflow-hidden ">
                  <a href="/new-construction">
                    <Image
                      src="/new.jpeg"
                      width={600}
                      height={400}
                      alt="New Construction painting"
                      className="object-cover w-full h-96 transition-transform group-hover:scale-105"
                    />
                  </a>
                </div>
                <a href="/new-construction">
                  <h3 className="mt-4 text-xl font-bold text-white">
                    New Construction
                  </h3>
                  <p className="text-gray-300">
                    Ensure a perfect start with our new construction painting
                    services.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="items-center w-screen flex" id="testimonials">
          <div className="w-full items-center justify-center">
            <Testimonials></Testimonials>
          </div>
        </section>
        <section className="flex items-center justify-center flex-col" id="Faq">
          <div className="flex flex-col w-screen md:w-auto  lg:flex-row mb-10 ">
            <div className="md:w-[700px] mt-20">
              <AspectRatio ratio={5 / 4}>
                <Image
                  src={"/area.png"}
                  fill
                  alt="areas of service"
                  className=" object-cover"
                />
              </AspectRatio>
            </div>
            <div className="md:w-[700px]">
              <Faq></Faq>
            </div>
          </div>
        </section>
        <section
          className="items-center w-screen flex bg-[#004a82]"
          id="contact"
        >
          <div className="w-full items-center justify-center">
            <ContactForm></ContactForm>
          </div>
        </section>
      </main>
    </div>
  );
}
