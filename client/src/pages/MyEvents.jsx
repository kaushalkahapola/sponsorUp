import React, { useState, useEffect } from "react";
import OrganizerSideBar from "../components/OrganizerSideBar";
import OrganizersNavbar from "../components/OrganizersNavbar";
import { Container, Grid } from "@radix-ui/themes";
import EventCard from "../components/EventCard";
import { events } from "../dummy_data/data";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { Button } from "../components/Buttons";

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
          <OrganizerSideBar
            selectedMenu="My Events"
            initialIsOpen={false} // Adjust as needed
            onMenuClick={(menuName) => console.log(`Menu clicked: ${menuName}`)} // Example callback
          />
          <div className="w-full space-y-3">
            <SearchBar
              placeholder="Search for events"
              searchText={searchText}
              setSearchText={setSearchText}
              onSearchButtonClick={searchBtnClicked}
            />
            <div className="pl-5">
            <Link to="/events/new">
                <Button
                  variant="secondary"
                  text="Create event"
                />
              </Link>
              </div>
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
