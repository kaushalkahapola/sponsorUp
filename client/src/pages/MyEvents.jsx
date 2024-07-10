import React from "react";
import OrganizerSideBar from "../components/OrganizerSideBar";
import OrganizersNavbar from "../components/OrganizersNavbar";
import { Container, Grid, Heading } from "@radix-ui/themes";
import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
import { events } from "../dummy_data/data";
import SearchBar from "../components/SearchBar";

const MyEvents = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const filterEvents = () => {
      let filtered = events;

      // Apply search text filter
      if (searchText.trim() !== "") {
        const lowercasedFilter = searchText.toLowerCase();
        filtered = filtered.filter((event) =>
          event.title.toLowerCase().includes(lowercasedFilter)
        );
      }

      setFilteredEvents(filtered);
    };

    filterEvents();
  }, [searchText]);

  const searchBtnClicked = async () => {
    // Perform search logic here if needed
  };

  return (
    <div>
      <OrganizersNavbar />
      <Container>
        <div className="flex">
          <OrganizerSideBar selectedMenu="My Events" />
          <div className="w-full mx-5">
            <SearchBar
              placeholder="Search for events"
              searchText={searchText}
              setSearchText={setSearchText}
              onSearchButtonClick={searchBtnClicked}
            />
            <Grid gap="3" className="flex-row">
              <div className="">
                <div className="grid px-5 py-7 gap-6 md:grid-cols-1 lg:grid-cols-2">
                  {filteredEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </div>
              </div>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyEvents;
