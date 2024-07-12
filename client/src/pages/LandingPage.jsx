import { EnvelopeClosedIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import TBImage from "../assets/TB.png";
import BAHImage from "../assets/BAH.png";
import MPImage from "../assets/MP.png";
import MCImage from "../assets/MC.png";
import OABImage from "../assets/OAB.png";
import Footer from "../components/Footer";
import { Container } from "@radix-ui/themes";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";

const LandingPage = () => {
  const [email, setEmail] = useState("");

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = `/signup?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <div className="font-poppins">
      <HomeHeader />
      <main>
        <section
          className="relative bg-cover bg-center h-full pb-28 pt-32"
          style={{ backgroundImage: `url(${TBImage})` }}
        >
          <div className="absolute inset-0"></div>
          <Container>
            <div className="container mx-auto h-full flex items-center justify-center px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-5 items-center space-y-10">
                <div className="order-2 md:order-1 md:px-0 text-center md:text-left">
                  <div className="">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-normal">
                      Elevate Your Events <br className="hidden lg:block" /><span className="font-medium">with</span><br className="hidden lg:block"/>
                      Seamless Sponsorship
                      Connections
                    </h1>
                    <p className="mt-4 text-lg text-white">
                      Connecting you with the right sponsors to grow your brand.
                    </p>
                    <form className="mt-6 flex justify-center md:justify-start" onSubmit={handleGetStarted}>
                      <div className="relative w-full md:w-auto">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                          <EnvelopeClosedIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="pl-12 pr-40 py-4 w-full rounded-full border text-gray-800 border-gray-200 bg-white"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <button type="submit" className="absolute right-1 top-1 bottom-1 bg-purple-500 text-gray-100 px-5 py-1.5 rounded-full m-1">
                          Get Started
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="order-2 flex items-center justify-center">
                  <img
                    src={BAHImage}
                    alt="Overlay Image"
                    className="mx-auto max-w-80 md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Manage Customers */}
        <section className="relative bg-white py-10 md:py-20">
          <Container>
          <div className="mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-2">
                <img
                  src={MCImage}
                  alt="MC Image"
                  className="mx-auto md:mr-12 md:ml-0 mb-8 md:mb-0 max-w-full"
                />
              </div>
              <div className="order-1 md:order-1 text-center md:text-left justify-center space-y-1 md:space-y-3 lg:space-y-8">
                <p className="text-gray-600">
                  YOU CAN </p>
                  <div className="font-semibold text-purple-700 text-3xl md:text-4xl lg:text-5xl">
                    Monitor
                  <span className="font-semibold text-black text-3xl md:text-4xl lg:text-5xl">
                    {' '}Customers
                  </span>
                  </div>
                  <p>
                  View real-time updates on successful payments, refunds, and other transaction-related activities
                </p>
                <a
                  href="#"
                  className="text-purple-700 inline-flex items-center"
                >
                  Learn more <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          </Container>
        </section>

        {/* Manage Payments */}
        <section className="relative bg-white py-10 md:py-20">
          <Container>
          <div className="mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={MPImage}
                  alt="MP Image"
                  className="mx-auto max-w-full"
                />
              </div>
              <div className="order-1 md:order-2 text-center md:text-left justify-center space-y-1 md:space-y-3 lg:space-y-8">
                <p className="text-gray-600">
                  YOU CAN </p>
                  <div className="font-semibold text-purple-700 text-3xl md:text-4xl lg:text-5xl">
                    Monitor
                  <span className="font-semibold text-black text-3xl md:text-4xl lg:text-5xl">
                    {' '}Payments
                  </span>
                  </div>
                  <p>
                  View real-time updates on successful payments, refunds,
                  and other transaction-
                  related activities.
                </p>
                <a
                  href="#"
                  className="text-purple-700 inline-flex items-center"
                >
                  Learn more <ArrowRightIcon className="w-5 h-5 ml-1" />
                </a>
              </div>
            </div>
          </div>
          </Container>
        </section>

        {/* Payments Section */}
        <section
          className="relative bg-cover bg-center py-20 rounded-xl overflow-hidden mb-10"
          style={{
            backgroundImage: `url(${OABImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginLeft: "1.25rem",
            marginRight: "1.25rem",
          }}
        >
          <div className="absolute inset-0 bg-violet-200 opacity-50"></div>
          <Container>
          <div className="relative z-10 text-white flex flex-col justify-center items-center h-full">
            <div className="mx-auto text-center px-15">
              <p className="text-black text-md md:text-lg lg:text-xl font-normal mb-6">
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
          </Container>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
