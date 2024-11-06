import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-12 mb-6 md:mb-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/favicon.png"
              alt="Top Pro Painting Co. Logo"
              width={200}
              height={60}
              className="mb-4"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#004a82]">
              Working Hours
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#004a82]">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Phone: (239) 286-0447</li>
              <li>Email: info@toppropaintingco.com</li>
              <li>Address: 1817 Hancock Bridge Pkwy, Cape Coral, FL 33990</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#004a82]">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link className="text-sm text-gray-600 hover:underline" href="/">
                Home
              </Link>
              <Link
                className="text-sm text-gray-600 hover:underline"
                href="/#services"
              >
                Services
              </Link>

              <Link
                className="text-sm text-gray-600 hover:underline"
                href="/#contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col ">
            <p className="text-xs text-gray-500 sm:mb-0">
              © 2024 Top Pro Painting. All rights reserved.
            </p>
            <div className="text-xs text-gray-500 mt-1 text-center md:text-left">
              <a
                href="https://www.lumenweb.com.br/"
                className="hover:underline"
                target="_blank"
              >
                Lumen Desenvolvimento Web
              </a>
            </div>
          </div>
          <nav className="flex gap-4 sm:gap-6 mt-5">
            <Link
              className="text-xs text-gray-500 hover:underline underline-offset-4"
              href="/terms-service/#terms"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs text-gray-500 hover:underline underline-offset-4"
              href="/terms-service/#privacy"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
