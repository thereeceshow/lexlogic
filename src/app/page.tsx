import { Footer } from './components/footer';

export default function Home() {
  return (
      <main className="bg-black">
        <div className="container mx-auto text-center py-10">
          <h3 className="text-xl md:text-2xl text-yellow-300 mb-3">
            Why Choose Us?
          </h3>
          <p className="text-gray-300 text-md md:text-lg">
            From concept to launch, our team customizes solutions to address
            your specific business needs.
          </p>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-6">
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
  );
}
