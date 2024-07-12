import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Buttons";
import { Container, Heading, Text } from "@radix-ui/themes";
import HomeHeader from "../components/HomeHeader";
import {
  EnvelopeClosedIcon,
  ArrowRightIcon,
  CheckboxIcon,
} from "@radix-ui/react-icons";
import TBImage from "../assets/TB.png";
import hero from "../assets/hero.svg";
import whychoose from "../assets/whychoose.svg";
import howwork from "../assets/howwork.svg";
import OABImage from "../assets/OAB.png";
import Footer from "../components/Footer";

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
          id="home"
        >
          <div className="absolute inset-0"></div>
          <Container>
            <div className="container mx-auto h-full flex items-center justify-center px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-5 items-center space-y-10">
                <div className="order-2 md:order-1 md:px-0 text-center md:text-left">
                  <div className="">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-normal">
                      Elevate Your Events <br className="hidden lg:block" />
                      <span className="font-medium">with</span>
                      <br className="hidden lg:block" />
                      Seamless Sponsorship Connections
                    </h1>
                    <p className="mt-4 text-lg text-white">
                      Connecting you with the right sponsors to grow your brand.
                    </p>
                    <form
                      className="mt-6 flex justify-center md:justify-start"
                      onSubmit={handleGetStarted}
                    >
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
                        <button
                          type="submit"
                          className="absolute right-1 top-1 bottom-1 bg-violet-500 text-white px-5 py-1.5 rounded-full m-1"
                        >
                          Get Started
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="order-2 flex items-center justify-center">
                  <img
                    src={hero}
                    alt="Overlay Image"
                    className="mx-auto max-w-80 md:max-w-full mb-10"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose Section */}
        <section className="relative bg-white py-10 md:py-20" id="why-choose">
          <Container>
            <div className="mx-auto px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img
                    src={whychoose}
                    alt="Why Choose Image"
                    className="mx-auto md:mr-12 md:ml-0 mb-8 md:mb-0 max-w-full"
                  />
                </div>
                <div className="order-1 md:order-2 text-center md:text-left justify-center space-y-5 lg:space-y-8">
                  <div className="font-semibold text-violet-700 text-3xl md:text-4xl lg:text-5xl">
                    Why Choose
                    <span className="font-semibold text-black text-3xl md:text-4xl lg:text-5xl">
                      {" "}
                      SponsorUp?
                    </span>
                  </div>
                  <ul className="space-y-5 flex flex-col">
                    <li className="flex items-start">
                      <div className="inline">
                        <CheckboxIcon color="green" />
                      </div>
                      <p className="inline ml-2 text-start">
                        <span className="font-semibold">
                          Effortless Connections:
                        </span>{" "}
                        We simplify the process of finding the perfect sponsors
                        for your events.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="inline">
                        <CheckboxIcon color="green" />
                      </div>
                      <p className="inline ml-2 text-start">
                        <span className="font-semibold">
                          Comprehensive Support:
                        </span>{" "}
                        From initial contact to final agreements, we provide
                        support every step of the way.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="inline">
                        <CheckboxIcon color="green" />
                      </div>
                      <p className="inline ml-2 text-start">
                        <span className="font-semibold">Tailored Matches:</span>{" "}
                        Our platform uses advanced algorithms to match
                        organizers with the most suitable sponsors.
                      </p>
                    </li>
                  </ul>
                  <a
                    href="#signup"
                    className="text-violet-700 inline-flex items-center"
                  >
                    Get Started
                    <ArrowRightIcon className="w-5 h-5 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* How It Works Section */}
        <section className="relative bg-white py-10 md:py-20" id="how-it-works">
          <Container>
            <div className="mx-auto px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-2">
                  <img
                    src={howwork}
                    alt="How It Works Image"
                    className="mx-auto max-w-full"
                  />
                </div>
                <div className="order-1 md:order-1 text-center md:text-left justify-center space-y-5 lg:space-y-8">
                  <div className="font-semibold text-violet-700 text-3xl md:text-4xl lg:text-5xl">
                    How It
                    <span className="font-semibold text-black text-3xl md:text-4xl lg:text-5xl">
                      {" "}
                      Works
                    </span>
                  </div>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="inline"></div>
                      <p className="inline  text-start">
                        <span className="font-semibold">Step 1: Sign Up:</span>{" "}
                        Create an account as an event organizer or sponsor.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="inline"></div>
                      <p className="inline  text-start">
                        <span className="font-semibold">
                          {" "}
                          Step 2: Create/Explore Events:
                        </span>{" "}
                        Organizers can create detailed event profiles, and
                        sponsors can explore events that match their interests.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="inline"></div>
                      <p className="inline  text-start">
                        <span className="font-semibold">
                          Step 3: Connect & Collaborate:{" "}
                        </span>
                        Use our platform to reach out, propose sponsorships, and
                        collaborate seamlessly.
                      </p>
                    </li>
                  </ul>
                  <a
                    href="#signup"
                    className="text-violet-700 inline-flex items-center ml-2"
                  >
                    Sign up <ArrowRightIcon className="w-5 h-5 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Ready to Elevate Section */}
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
          id="signup"
        >
          <div className="absolute inset-0 bg-violet-200 opacity-50"></div>
          <Container>
            <div className="relative z-1 flex flex-col justify-center items-center h-full">
              <div className="mx-auto text-center px-15 flex flex-col items-center space-y-5">
                <Heading>Ready to Elevate Your Event?</Heading>
                <Text>
                  Join SponsorUp today and start connecting with sponsors who
                  can take your event to the next level.
                </Text>
                <div className="flex space-x-4">
                  <Link to="/signin">
                    <Button
                      text="Sign in"
                      variant="secondary"
                      className="btn bg-gray-50 text-purple-500 md:ml-4 px-3 py-1 rounded duration-50 md:static"
                    />
                  </Link>
                  <Link to="/signup">
                    <Button
                      text="Sign Up"
                      className="btn bg-purple-500 text-white-100 md:ml-4 px-3 py-1 rounded duration-50 md:static"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
