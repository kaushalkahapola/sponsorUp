import React, { useState, useEffect } from "react";
import { Container, Grid, Heading } from "@radix-ui/themes";
import OrganizersNavbar from "../components/OrganizersNavbar";
import EventsFilters from "../components/EventsFilters";
import SearchBar from "../components/SearchBar";
import EventCard from "../components/EventCard";

const SearchEventsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    // Dummy initial content with EventCard data
    const dummyInitial = [
      {
        title: "Music Concert",
        category: "Music",
        datetime: "2024-07-15T19:00:00Z",
        description: "A night of live music performances.",
        location: "New York City",
        organizer: "Music Fest Org",
        coverImage: "https://picsum.photos/400/200?random=1",
        album: [
          "https://via.placeholder.com/400x200?text=1",
          "https://via.placeholder.com/400x200?text=2",
          "https://via.placeholder.com/400x200?text=3",
        ],
      },
      {
        title: "Tech Conference",
        category: "Technology",
        datetime: "2024-08-20T09:00:00Z",
        description: "Latest trends in tech and innovation.",
        location: "San Francisco",
        organizer: "Tech Innovators",
        coverImage: "https://picsum.photos/400/200?random=2",
        album: [
          "https://via.placeholder.com/400x200?text=1",
          "https://via.placeholder.com/400x200?text=2",
          "https://via.placeholder.com/400x200?text=3",
        ],
      },
      {
        title: "Art Exhibition",
        category: "Art",
        datetime: "2024-09-10T10:00:00Z",
        description: "Showcasing modern art from local artists.",
        location: "London",
        organizer: "Art Gallery",
        coverImage: "https://picsum.photos/400/200?random=3",
        album: [
          "https://via.placeholder.com/400x200?text=1",
          "https://via.placeholder.com/400x200?text=2",
          "https://via.placeholder.com/400x200?text=3",
        ],
      },
    ];

    setFilteredEvents(dummyInitial);
  }, []);

  useEffect(() => {
    // Handle search and filter changes
    async function search(searchText, filters) {
      // Implement the search logic
      console.log(searchText);
    }

    search(searchText, filters);
  }, [searchText, filters]);

  const searchBtnClicked = async () => {
    await search(searchText, filters);
  };

  return (
    <>
      <OrganizersNavbar />
      <Container>
        <Heading size="3xl" className="text-center my-5">
          Find Events
        </Heading>
        <div className="flex justify-center mb-8">
          <div className="flex-1 justify-center max-w-screen-md">
            <SearchBar
              searchText={searchText}
              setSearchText={setSearchText}
              onSearchButtonClick={searchBtnClicked}
            />
          </div>
        </div>
        <Grid gap="3" mdcols="1fr 2fr" className="md:flex">
          {/* Left Side Content (Filters) */}
          <div className="bg-white rounded-md shadow-md pt-3 p-6 md:mt-0 md:ml-8">
            <div className="md:block">
              <EventsFilters />
            </div>
          </div>
          {/* Right Side Content (Event Cards) */}
          <div className="md:w-3/4">
            <div className="grid px-5 py-7 gap-6 md:grid-cols-1 xl:grid-cols-2">
              {filteredEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default SearchEventsPage;
