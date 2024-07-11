import React, { useState, useEffect } from "react";
import { Container, Grid, Heading, Button } from "@radix-ui/themes";
import OrganizersNavbar from "../components/OrganizersNavbar";
import RichTextEditor from "../components/TextEditor";
import EventCard from "../components/EventCard";
import AlbumCarousel from "../components/AlbumCarousel";
import { Button as CustomButton } from "../components/Buttons";
import { events } from "../dummy_data/data";
import Select from "react-select";

const maxPackages = 3;

const SendProposalPage = () => {
  const [eventsList, setEventsList] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [event, setEvent] = useState({});
  const [editorHtml, setEditorHtml] = useState("");

  const [proposalData, setProposalData] = useState({
    eventId: "",
    sponsorshipPackages: [{ benefits: "", price: "" }],
    description: "",
  });

  useEffect(() => {
    // Simulating fetching event data
    setEventsList(events); // Assuming events is an array of events from dummy data
    if (events.length > 0) {
      setSelectedEvent(events[0]); // Select the first event by default
    }
  }, []);

  useEffect(() => {
    // Fetch event data based on selectedEvent
    const fetchEvent = async () => {
      const fetchedEvent = events.find(
        (event) => event.id === selectedEvent?.id
      );
      if (fetchedEvent) {
        setProposalData((prevData) => ({
          ...prevData,
          eventId: fetchedEvent.id,
        }));
        setEvent(fetchedEvent);
      }
    };

    fetchEvent();
  }, [selectedEvent]);

  useEffect(() => {
    setProposalData((prevData) => ({ ...prevData, description: editorHtml }));
  }, [editorHtml]);

  const handlePackageChange = (index, name, value) => {
    setProposalData((prevData) => {
      const updatedPackages = [...prevData.sponsorshipPackages];
      updatedPackages[index] = { ...updatedPackages[index], [name]: value };
      return { ...prevData, sponsorshipPackages: updatedPackages };
    });
  };

  const addPackage = () => {
    setProposalData((prevData) => {
      if (prevData.sponsorshipPackages.length < maxPackages) {
        return {
          ...prevData,
          sponsorshipPackages: [
            ...prevData.sponsorshipPackages,
            { benefits: "", price: "" },
          ],
        };
      }
      return prevData;
    });
  };

  const removePackage = (index) => {
    setProposalData((prevData) => {
      const updatedPackages = prevData.sponsorshipPackages.filter(
        (_, i) => i !== index
      );
      return { ...prevData, sponsorshipPackages: updatedPackages };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validPackages = proposalData.sponsorshipPackages.filter(
      (pkg) => pkg.benefits && pkg.price
    );
    const validProposalData = {
      ...proposalData,
      sponsorshipPackages: validPackages,
    };
    console.log(validProposalData);
  };

  const handleEventChange = (selectedOption) => {
    setSelectedEvent(selectedOption);
  };

  return (
    <>
      <OrganizersNavbar />
      <Container>
        <div className="flex flex-col items-center">
          <Heading className="text-3xl lg:text-4xl font-bold text-center my-8">
            Send Proposal
          </Heading>
          <Grid gap="8" className="lg:flex w-full">
            {/* Left Side Content (Album Sidebar) */}
            <div className="bg-white rounded-md shadow-md p-6 md:mt-0 lg:ml-8 max-w-full lg:max-w-[420px] flex flex-col items-center">
              <div className="mb-4 w-full">
                <Heading className="text-md lg:text-lg text-center mb-3">
                  Event
                </Heading>
                <Select
                  id="eventSelect"
                  options={eventsList}
                  value={selectedEvent}
                  onChange={handleEventChange}
                  getOptionLabel={(option) =>
                    `${option.title} - ${option.location}`
                  }
                  getOptionValue={(option) => option.id}
                  placeholder="Search or select an event..."
                />
              </div>
              <div className="mb-8 w-full">
                <EventCard event={event} />
              </div>
              <AlbumCarousel album={event?.album} />
            </div>
            {/* Right Side Content */}
            <div className="bg-white rounded-md shadow-md p-4 md:p-6 mb-8 flex-grow max-w-full lg:max-w-[calc(100% - 420px)]">
              <PackageList
                proposalData={proposalData}
                handlePackageChange={handlePackageChange}
                addPackage={addPackage}
                removePackage={removePackage}
              />
              {/* Description Section */}
              <div className="mt-8">
                <Heading className="text-2xl font-bold mb-4 text-center">
                  Description
                </Heading>
                <div className="p-1 rounded shadow-lg">
                  <RichTextEditor
                    editorHtml={editorHtml}
                    setEditorHtml={setEditorHtml}
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="my-8 flex justify-center">
                <CustomButton text="Submit Proposal" onClick={handleSubmit} />
              </div>
            </div>
          </Grid>
        </div>
      </Container>
    </>
  );
};

const PackageList = ({
  proposalData,
  handlePackageChange,
  addPackage,
  removePackage,
}) => {
  return (
    <div className="mt-8 px-1">
      <Heading className="text-2xl font-bold my-4 text-center">
        Packages
      </Heading>
      <div className="flex flex-col items-center my-4 space-y-4">
        {proposalData.sponsorshipPackages.map((pkg, index) => (
          <div
            key={index}
            className="w-full p-4 bg-white rounded-lg shadow-sm border border-gray-300"
          >
            <div className="flex justify-between items-center">
              <Heading className="text-lg font-bold mb-2 bg-secondary p-2 px-4 rounded shadow">
                Package - {index + 1}
              </Heading>
              {proposalData.sponsorshipPackages.length > 1 && (
                <CustomButton
                  variant="danger"
                  onClick={() => removePackage(index)}
                  text="Remove"
                />
              )}
            </div>
            <div className="flex flex-col gap-4 w-full items-center">
              {/* Benefits */}
              <div className="flex flex-col items-center w-full mt-5">
                <Heading className="text-lg font-bold mb-1 text-center">
                  Benefits
                </Heading>
                <textarea
                  className="w-full h-52 px-3 py-2 border border-gray-300 rounded bg-white text-black resize-vertical text-center"
                  name="benefits"
                  value={pkg.benefits}
                  placeholder={`Why choose package ${index + 1}...?`}
                  onChange={(e) =>
                    handlePackageChange(index, "benefits", e.target.value)
                  }
                />
              </div>
              {/* Price */}
              <div className="flex flex-col items-center w-full">
                <Heading className="text-lg font-bold mb-1 text-center">
                  Price
                </Heading>
                <input
                  className="w-full max-w-[220px] px-3 py-2 border border-gray-300 rounded bg-white text-black text-center"
                  name="price"
                  value={pkg.price}
                  placeholder="Price in LKR..."
                  onChange={(e) => {
                    const value = e.target.value;
                    const floatRegex = /^[+-]?([0-9]*[.])?[0-9]*$/;
                    if (floatRegex.test(value) || value === "") {
                      handlePackageChange(index, "price", value);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        {proposalData.sponsorshipPackages.length < maxPackages && (
          <CustomButton text="Add Package" onClick={addPackage} />
        )}
      </div>
    </div>
  );
};

export default SendProposalPage;
