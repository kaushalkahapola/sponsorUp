import React, { useState, useEffect } from "react";
import { Container, Grid, Heading } from "@radix-ui/themes";
import OrganizersNavbar from "../components/OrganizersNavbar";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import EventCard from "../components/EventCard";
import { events } from "../dummy_data/data";
import { Button } from "../components/Buttons";

const SearchEventsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    categories: [],
    pricing: "",
    types: [],
    languages: [],
  });

  const [filteredEvents, setFilteredEvents] = useState(events);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State for sidebar toggle

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const filterEvents = () => {
      let filtered = events;

      // Apply category filter
      if (filters.categories.length > 0) {
        filtered = filtered.filter((event) =>
          filters.categories.includes(event.category)
        );
      }

      // Apply pricing filter
      if (filters.pricing) {
        filtered = filtered.filter((event) =>
          filters.pricing === "Below $100"
            ? event.price < 100
            : event.price >= 100
        );
      }

      // Apply type filter
      if (filters.types.length > 0) {
        filtered = filtered.filter((event) =>
          filters.types.includes(event.type)
        );
      }

      // Apply language filter
      if (filters.languages.length > 0) {
        filtered = filtered.filter((event) =>
          filters.languages.includes(event.language)
        );
      }

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
  }, [searchText, filters]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const searchBtnClicked = async () => {
    // Perform search logic here if needed
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
              placeholder="Search for events"
              searchText={searchText}
              setSearchText={setSearchText}
              onSearchButtonClick={searchBtnClicked}
            />
          </div>
        </div>
        <Grid gap="3" mdcols="1fr 2fr" className="md:flex">
          {!isSmallScreen && ( // Render Filters in grid for non-small screens
            <div className="bg-white rounded-md shadow-md pt-3 p-6 md:mt-0 md:ml-8">
              <Filters onApplyFilters={applyFilters} />
            </div>
          )}
          <div className="md:w-3/4">
            <div className="grid px-5 py-7 gap-6 md:grid-cols-1 xl:grid-cols-2">
              {filteredEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        </Grid>
      </Container>
      {isSmallScreen && ( // Render Filters button for small screens
        <div className="fixed bottom-5 right-5 z-50">
          <Button
            text="Filters"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
            onClick={() => setIsFilterOpen(true)}
          />
        </div>
      )}
      {isSmallScreen && ( // Render off-canvas sidebar for small screens
        <div className={`off-canvas-sidebar ${isFilterOpen ? "show" : ""}`}>
          <Filters onApplyFilters={applyFilters} />
        </div>
      )}
      {isSmallScreen && ( // Render off-canvas overlay for small screens
        <div
          className={`off-canvas-overlay ${isFilterOpen ? "show" : ""}`}
          onClick={() => setIsFilterOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SearchEventsPage;
