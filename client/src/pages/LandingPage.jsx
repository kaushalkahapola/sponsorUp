import React from "react";
import HomeHeader from "../components/HomeHeader";
import { EnvelopeClosedIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import TBImage from "../assets/TB.png";
import BAHImage from "../assets/BAH.png";
import MPImage from "../assets/MP.png";
import MCImage from "../assets/MC.png";
import OABImage from "../assets/OAB.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <HomeHeader />
      <main className="pt-20">
        {/* TB Image Section */}
        <section
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${TBImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="absolute transform -translate-y-1/2 left-20 md:left-40 top-1/2">
              <h1 className="text-5xl font-bold text-white leading-normal">
                Elevate Your Events with
                <br />
                Seamless Sponsorship
                <br />
                Connections
              </h1>
              <p className="mt-4 text-lg text-white">
                Connecting you with the right sponsors to grow your brand.
              </p>
              <form className="mt-6 flex">
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <EnvelopeClosedIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-12 pr-40 py-4 w-full max-w-full rounded-full border text-gray-800 border-gray-200 bg-white"
                  />
                  <button className="absolute right-1 top-1 bottom-1 bg-purple-500 text-gray-100 px-5 py-1.5 rounded-full m-1">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
          <img
            src={BAHImage}
            alt="Overlay Image"
            className="absolute top-1/2 right-20 transform -translate-y-1/2 mr-20"
          />
        </section>

        {/* Manage Payments */}
        <section className="relative bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={MPImage}
                  alt="MP Image"
                  className="mx-auto md:ml-12 md:mr-0 mb-8 md:mb-0 max-w-full"
                />
              </div>
              <div className="order-1 md:order-2 text-center md:text-left">
                <p className="text-gray-600 mb-4">
                  YOU CAN <br /> <br />
                  <span className="font-bold text-purple-700 text-6xl">
                    Monitor
                  </span>
                  <span className="font-bold text-black text-6xl">
                    {" "}
                    Payments
                  </span>{" "}
                  <br /> <br />
                  View real-time updates on successful <br /> payments, refunds,
                  and other transaction-
                  <br />
                  related activities.
                </p>
                <a
                  href="#"
                  className="text-purple-700 inline-flex items-center ml-2"
                >
                  {" "}
                  Learn more <ArrowRightIcon className="w-5 h-5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Manage Customers */}
        <section className="relative bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-1 md:order-2">
                <img
                  src={MCImage}
                  alt="MP Image"
                  className="mx-auto md:mr-12 md:ml-0 mb-8 md:mb-0 max-w-full"
                />
              </div>
              <div className="order-2 md:order-1 left-50 text-center md:text-left">
                <p className="md:ml-14 text-gray-600 mb-4">
                  YOU CAN <br /> <br />
                  <span className="font-bold text-purple-700 text-6xl">
                    Manage
                  </span>
                  <span className="font-bold text-black text-6xl">
                    {" "}
                    Customers
                  </span>{" "}
                  <br /> <br />
                  View real-time updates on successful <br /> payments, refunds,
                  and other transaction-
                  <br />
                  related activities.
                </p>
                <a
                  href="#"
                  className="text-purple-700 inline-flex items-center ml-14"
                >
                  {" "}
                  Learn more <ArrowRightIcon className="w-5 h-5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="py-20"></div>

        {/*Payments Section */}
        <section
          className="relative bg-cover bg-center py-20 md:order-2 mx-auto md:ml-20 md:mr-20 rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(${OABImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginLeft: "135px",
            marginRight: "135px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white flex flex-col justify-center items-center h-full">
            <div className="max-w mx-auto text-center">
              <p className="text-black text-2xl font-bold leading-snug mb-6">
                Simplify your business payments with our intuitive tool. Manage,
                track, <br />
                and optimize your financial transactions effortlessly. Take
                control of your <br />
                finances and focus on growing your business.
              </p>
              <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                Open Account
              </button>
            </div>
          </div>
        </section>

        {/* Footer*/}
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
