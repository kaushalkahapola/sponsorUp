import React, { useState, useEffect } from "react";
import OrganizerSideBar from "../components/OrganizerSideBar";
import OrganizersNavbar from "../components/OrganizersNavbar";
import { Container, Grid } from "@radix-ui/themes";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { Button } from "../components/Buttons";
import getEvents from "../firebase/getEvents"; // Ensure this function is available

const MyEvents = () => {
  const [searchText, setSearchText] = useState("");
  const [eventsList, setEventsList] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const filterEvents = () => {
      let filtered = eventsList;

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
  }, [searchText, eventsList]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getEvents();
        setEventsList(events);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle error fetching events
      }
    };

    fetchEvents();
  }, []);

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
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
                      <EventCard key={index} event={event} />
                    ))
                  ) : (
                    <p>No events found.</p>
                  )}
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
