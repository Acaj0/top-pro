import Link from "next/link";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen overflow-clip">
      <NavBar></NavBar>
      <main className="flex flex-col w-screen overflow-clip items-center">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/interior.jpeg"
            width={600}
            height={400}
            alt="Interior painting"
            className="object-cover w-fit h-fit transition-transform group-hover:scale-105"
          />
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Top Pro Painting Co. All rights reserved.
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
