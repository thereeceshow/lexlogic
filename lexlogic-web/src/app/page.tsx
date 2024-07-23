import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="bg-black">
        <div className="text-white py-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="flex flex-col w-full lg:w-2/4 justify-center items-start pl-4 ml:px-8 lg:pl-12 xl:pl-16 py-4">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 font-bold tracking-loose">
                LexLogic
              </h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Crafting Digital Excellence
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                LexLogic specializes in custom digital solutions to drive growth
                and innovation for the future.
              </p>
              <a
                href="mailto:reece@reecewalter.com"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow-lg hover:shadow-xl py-2 px-4 border border-yellow-300 hover:border-transparent transition-all duration-300 ease-in-out"
              >
                Contact us
              </a>
            </div>
            <div className="flex lg:w-2/4 justify-center items-center hidden md:flex px-4 md:px-8 lg:px-12 xl:px-16 py-4">
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
        <div className="container mx-auto text-center py-10">
          <h3 className="text-xl md:text-2xl text-yellow-300 mb-3">
            Why Choose Us?
          </h3>
          <p className="text-gray-300 text-md md:text-lg">
            From concept to launch, our team customizes solutions to address
            your specific business needs.
          </p>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-6 pb-6">
          <div className="p-6 text-center">
            <h4 className="text-lg md:text-xl text-yellow-300">Innovation</h4>
            <p className="text-gray-300">
              We deliver innovative and effective solutions to push the
              boundaries of possibility.
            </p>
          </div>
          <div className="p-6 text-center">
            <h4 className="text-lg md:text-xl text-yellow-300">Reliability</h4>
            <p className="text-gray-300">
              With a solid track record, we guarantee your projects are
              completed on time and to the highest standards.
            </p>
          </div>
          <div className="p-6 text-center">
            <h4 className="text-lg md:text-xl text-yellow-300">Support</h4>
            <p className="text-gray-300">
              Our comprehensive support ensures your digital products operate
              smoothly after launch.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-black pt-20 text-white text-center p-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <p>© 2024 LexLogic. All rights reserved.</p>
          <p>Contact us at reece@reecewalter.com</p>
        </div>
      </footer>
    </>
  );
}
