import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LexLogic - Custom Software Solutions",
  description: "Apps tailored for your needs",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className="h-screen flex flex-col justify-between">
        <main className="bg-black text-white grow">
          <div className="text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
              <div className="flex flex-col w-full lg:w-2/4 justify-center items-start pl-4 ml:px-8 lg:pl-12 xl:pl-16 py-4">
                <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 font-bold tracking-loose">
                  LexLogic
                </h1>
                <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                  Crafting Digital Excellence
                </h2>
                <p className="text-sm md:text-base text-gray-50 mb-4">
                  LexLogic specializes in custom digital solutions to drive
                  growth and innovation for the future.
                </p>
                <div className="w-full flex justify-around">
                  <a
                    href="mailto:reece@lexlogic.dev"
                    className="block bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow-lg hover:shadow-xl py-2 px-4 border border-yellow-300 hover:border-transparent transition-all duration-300 ease-in-out"
                  >
                    Contact Us
                  </a>
                  <Link
                    href="./support"
                    className="block bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow-lg hover:shadow-xl py-2 px-4 border border-yellow-300 hover:border-transparent transition-all duration-300 ease-in-out"
                  >
                    Support
                  </Link>
                </div>
              </div>
              <div className="flex lg:w-2/4 justify-center items-center hidden md:flex px-4 md:px-8 lg:px-12 xl:px-16">
                <Image
                  src="/assets/hero-image.png"
                  alt="Hero Image"
                  width={600}
                  height={400}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className={inter.className}>{children}</div>
          {/* <div className="container mx-auto py-10 px-4 md:px-8 lg:px-12 xl:px-16">
            <h1 className="text-3xl md:text-5xl text-yellow-300 font-bold tracking-loose mb-4">
              Support
            </h1>
            <p className="text-sm md:text-base text-gray-50 mb-8">
              If you need support, please contact us at:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@lexlogic.dev"
                  className="text-yellow-300"
                >
                  support@lexlogic.dev
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+16152683560" className="text-yellow-300">
                  +1-615-268-3560
                </a>
              </li>
            </ul>
            <p className="text-sm md:text-base text-gray-50">
              We are here to help you with any questions or issues you may have.
            </p>
          </div> */}
        </main>
        <footer className="bg-black text-center pb-6">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 text-gray-300">
            <p>© 2024 LexLogic. All rights reserved.</p>
            <p>
              Contact us at{" "}
              <a
                href="mailto:reece@reecewalter.com"
                className="text-yellow-300"
              >
                reece@lexlogic.dev
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
