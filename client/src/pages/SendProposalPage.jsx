import React, { useState, useEffect } from "react";
import { Container, Grid, Heading, Button } from "@radix-ui/themes";
import OrganizersNavbar from "../components/OrganizersNavbar";
import RichTextEditor from "../components/TextEditor";
import EventCard from "../components/EventCard";
import AlbumCarousel from "../components/AlbumCarousel";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Button as CustomButton } from "../components/Buttons";

import { auth } from "../firebase/firebase";

const SendProposalPage = () => {
  const [event, setEvent] = useState({});

  const [proposalData, setProposalData] = useState({
    eventId: "",
    sponsorshipPackages: [
      { benefits: "", cost: "" },
      { benefits: "", cost: "" },
      { benefits: "", cost: "" },
    ],
    description: "",
  });

  const [currentPackage, setCurrentPackage] = useState(0);

  useEffect(() => {
    // Simulating fetching event data
    const fetchEvent = async () => {
      const fetchedEvent = {
        id: "ajksdhbabnoa",
        title: "Spandana",
        category: "Music",
        location: "Sample Venue",
        datetime: "2022-12-31T23:59:59.999Z",
        organizer: "Sample Organizer",
        coverImage: "https://picsum.photos/400/200",
        album: [
          "https://picsum.photos/400",
          "https://picsum.photos/300",
          "https://picsum.photos/500",
        ],
        coverImage: "https://picsum.photos/400/200",
      };
      setEvent(fetchedEvent);
    };

    fetchEvent();
  }, []);

  const handlePackageChange = (index, name, value) => {
    setProposalData((prevData) => {
      const updatedPackages = [...prevData.sponsorshipPackages];
      updatedPackages[index] = { ...updatedPackages[index], [name]: value };
      return { ...prevData, sponsorshipPackages: updatedPackages };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(proposalData);
  };

  const nextPackage = () => {
    setCurrentPackage((prevIndex) =>
      prevIndex === proposalData.sponsorshipPackages.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const prevPackage = () => {
    setCurrentPackage((prevIndex) =>
      prevIndex === 0
        ? proposalData.sponsorshipPackages.length - 1
        : prevIndex - 1
    );
  };

  return (
    <>
      <OrganizersNavbar />
      <Container>
        <Grid gap="8" mdCols="520px 1fr" className="md:flex">
          {/* Right Side Content (Album Sidebar) */}
          <div className="bg-white rounded-md shadow-md p-6 md:mt-0 md:ml-8">
            <Heading className="text-3xl md:text-4xl font-bold text-center my-8">
              Send Proposal
            </Heading>
            <div>
              <div className="mb-8">
                <EventCard event={event} />
              </div>
              <AlbumCarousel album={event?.album} />
            </div>
          </div>
          {/* Left Side Content */}
          <div className="" style={{ maxHeight: "calc(100vh - 160px)" }}>
            <div className="bg-white rounded-md shadow-md p-6 mb-8">
              <div className="mt-8">
                <Heading className="text-2xl font-bold my-4 text-center">
                  Packages
                </Heading>
                <div className="flex justify-between items-center my-4">
                  {/* Previous Package Button */}
                  <Button
                    className={`px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none ${
                      currentPackage === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={prevPackage}
                    disabled={currentPackage === 0}
                  >
                    <MdNavigateBefore />
                  </Button>
                  {/* Package Carousel */}
                  <div className="relative flex-grow overflow-hidden rounded-lg shadow-md max-w-[320px]">
                    <div className="flex transition-transform duration-300 ease-in-out transform -translate-x-[${currentPackage * 100}%]">
                      {proposalData.sponsorshipPackages.map((pkg, index) => (
                        <div
                          key={index}
                          className={`w-full flex-shrink-0 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm ${
                            index === currentPackage ? "" : "hidden"
                          }`}
                        >
                          <Heading className="text-lg font-bold mb-2 bg-secondary p-2 px-4 rounded shadow">
                            Package - {index + 1}
                          </Heading>
                          <div className="flex flex-col gap-4 w-full">
                            {/* Benefits */}
                            <div className="flex flex-col">
                              <Heading className="text-lg font-bold mb-1">
                                Benefits
                              </Heading>
                              <textarea
                                className="w-full h-32 px-3 py-2 border border-gray-300 rounded bg-white text-black resize-vertical"
                                name="benefits"
                                value={pkg.benefits}
                                onChange={(e) =>
                                  handlePackageChange(
                                    index,
                                    "benefits",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            {/* Cost */}
                            <div className="flex flex-col">
                              <Heading className="text-lg font-bold mb-1">
                                Cost
                              </Heading>
                              <input
                                className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
                                name="cost"
                                value={pkg.cost}
                                onChange={(e) =>
                                  handlePackageChange(
                                    index,
                                    "cost",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Next Package Button */}
                  <Button
                    className={`px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none ${
                      currentPackage ===
                      proposalData.sponsorshipPackages.length - 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={nextPackage}
                    disabled={
                      currentPackage ===
                      proposalData.sponsorshipPackages.length - 1
                    }
                  >
                    <MdNavigateNext />
                  </Button>
                </div>
                {/* Dots */}
                <div className="flex justify-center mt-5">
                  {proposalData.sponsorshipPackages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 mx-1 rounded-full ${
                        index === currentPackage ? "bg-primary" : "bg-gray-100"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <hr className="my-5" />
              {/* Description Section */}
              <div className="mt-8">
                <Heading className="text-2xl font-bold mb-4">
                  Description
                </Heading>
                <div className="bg-gray-100 rounded-md p-4">
                  <RichTextEditor
                    value={proposalData.description}
                    onChange={(value) =>
                      setProposalData({ ...proposalData, description: value })
                    }
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="my-8 flex justify-center">
                <CustomButton text="Submit Proposal" onClick={handleSubmit} />
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default SendProposalPage;
