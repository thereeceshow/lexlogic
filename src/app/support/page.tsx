import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Support = () => (
  <>
    <Head>
      <title>Support - LexLogic</title>
    </Head>
      {/* </div> */}
      {/* <div className="container mx-auto py-10 px-4 md:px-8 lg:px-12 xl:px-16"> */}
      <div className="container mx-auto text-center py-10 px-4 md:px-8 lg:px-12 xl:px-16">
        <h1 className="text-3xl md:text-5xl text-yellow-300 font-bold tracking-loose mb-4">
          Support
        </h1>
        <p className="text-sm md:text-base text-gray-50 mb-8">
          If you need support, please contact us at:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Email:{" "}
            <a href="mailto:support@lexlogic.dev" className="text-yellow-300">
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
      </div>
  </>
);

export default Support;
