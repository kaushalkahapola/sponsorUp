import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Buttons";
import { Container, Text } from "@radix-ui/themes";

const HomeHeader = () => {
  const [open, setOpen] = useState(false);

  // Scroll to section function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close the menu on mobile after clicking
  };

  return (
    <div className="w-full fixed-navbar border-b border-b-gray-100 px-5 font-poppins bg-white">
      <Container>
        <div className="md:flex items-center justify-between bg-white py-3">
          {/* Logo and burger menu for small screens */}
          <div className="flex items-center justify-between md:w-auto w-full">
            <div className="font-bold text-2xl cursor-default flex items-center gap-1">
              <Link to="/">
                <Text>
                  Sponsor<span className="text-primary-500">Up</span>
                </Text>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="block text-gray-800 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Link items for normal navbar */}
          <div className="hidden md:flex md:items-center md:pb-0 pb-12">
            {/* <Link to="/events">
              <span className="block md:inline-block md:mx-4 md:my-0 my-7 font-normal text-sm text-zinc-500 hover:text-primary duration-500">
                Events
              </span>
            </Link>
            <Link to="/sponsors">
              <span className="block md:inline-block md:mx-4 md:my-0 my-7 font-normal text-sm text-zinc-500 hover:text-primary duration-500">
                Sponsors
              </span>
            </Link>
            <Link to="/sponsors/1/sendproposal">
              <span className="block md:inline-block md:mx-4 md:my-0 my-7 font-normal text-sm text-zinc-500 hover:text-primary duration-500">
                Send Proposal
              </span>
            </Link> */}
            <span
              className="block md:inline-block md:mx-4 md:my-0 my-7 font-normal text-sm text-zinc-500 hover:text-primary cursor-pointer duration-500"
              onClick={() => scrollToSection("home")}
            >
              Elevate Your Events
            </span>
            <span
              className="block md:inline-block md:mx-4 md:my-0 my-7 font-normal text-sm text-zinc-500 hover:text-primary cursor-pointer duration-500"
              onClick={() => scrollToSection("why-choose")}
            >
              Why Choose SponsorUp?
            </span>
            <span
              className="block md:inline-block md:mx-4 md:my-0 my-7 font-normal text-sm text-zinc-500 hover:text-primary cursor-pointer duration-500"
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </span>
          </div>

          {/* Buttons for normal navbar */}
          <div className="hidden md:flex items-center space-x-3 text-sm">
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

          {/* Burger menu items for small screens */}
          <div
            className={`${
              open ? "block" : "hidden"
            } md:hidden absolute bg-white top-16 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}
          >
            {/* <Link to="/events">
              <span className="block md:inline-block md:mx-4 md:my-0 my-7 font-semibold text-gray-800 hover:text-primary duration-500">
                Events
              </span>
            </Link>
            <Link to="/sponsors">
              <span className="block md:inline-block md:mx-4 md:my-0 my-7 font-semibold text-gray-800 hover:text-primary duration-500">
                Sponsors
              </span>
            </Link>
            <Link to="/sponsors/1/sendproposal">
              <span className="block md:inline-block md:mx-4 md:my-0 my-7 font-semibold text-gray-800 hover:text-primary duration-500">
                Send Proposal
              </span>
            </Link> */}
            <span
              className="block md:inline-block md:mx-4 md:my-0 my-7 font-semibold text-gray-800 hover:text-primary cursor-pointer duration-500"
              onClick={() => scrollToSection("elevate-events")}
            >
              Elevate Your Events
            </span>
            <span
              className="block md:inline-block md:mx-4 md:my-0 my-7 font-semibold text-gray-800 hover:text-primary cursor-pointer duration-500"
              onClick={() => scrollToSection("why-choose")}
            >
              Why Choose SponsorUp?
            </span>
            <span
              className="block md:inline-block md:mx-4 md:my-0 my-7 font-semibold text-gray-800 hover:text-primary cursor-pointer duration-500"
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </span>
            <div className="flex items-center justify-end my-4 mx-8 space-x-2 text-sm">
              <Link to="/signin">
                <Button text="Sign in" variant="secondary" />
              </Link>
              <Link to="/signup">
                <Button text="Sign up" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHeader;
