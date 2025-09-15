import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

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
        <Header />
        <main className="bg-black text-white grow flex flex-col">
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
                </div>
              </div>
              <div className="flex lg:w-2/4 justify-center items-center md:flex px-4 md:px-8 lg:px-12 xl:px-16">
                <Image
                  src="/assets/hero-image.png"
                  alt="Hero Image"
                  width={300}
                  height={200}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className={`${inter.className} grow flex flex-col justify-end`}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
