import React, { useState, useEffect } from "react";
import { Container, Grid, Heading } from "@radix-ui/themes";
import OrganizersNavbar from "../components/OrganizersNavbar";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import SponsorCard from "../components/SponsorCard"; // Assuming SponsorCard component exists
import { sponsors } from "../dummy_data/data";
import { Button } from "../components/Buttons";

const SearchSponsors = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState([]);
  const [filteredSponsors, setFilteredSponsors] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State for sidebar toggle

  useEffect(() => {
    const fetchSponsors = () => {
      // Dummy initial content with SponsorCard data
      let filtered = sponsors;

      // Apply search text filter
      if (searchText.trim() !== "") {
        const lowercasedFilter = searchText.toLowerCase();
        filtered = filtered.filter((sponsor) =>
          sponsor.name.toLowerCase().includes(lowercasedFilter)
        );
      }

      setFilteredSponsors(filtered);
    };

    fetchSponsors();
  }, [searchText]);

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

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const searchBtnClicked = async () => {
    // Perform search logic here if needed
  };

  return (
    <>
      <OrganizersNavbar />
      <Container>
        <Heading size="3xl" className="text-center my-5">
          Find Sponsors
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
          {!isSmallScreen && ( // Render Filters in grid for non-small screens
            <div className="bg-white rounded-md shadow-md pt-3 p-6 md:mt-0 md:ml-8">
              <Filters onApplyFilters={setFilters} />
            </div>
          )}
          <div className="md:w-3/4">
            <div className="grid px-5 py-7 gap-6 md:grid-cols-1 xl:grid-cols-2">
              {filteredSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} />
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
            onClick={toggleFilters}
          />
        </div>
      )}
      {isSmallScreen && ( // Render off-canvas sidebar for small screens
        <div className={`off-canvas-sidebar ${isFilterOpen ? "show" : ""}`}>
            <Filters onApplyFilters={setFilters} />
        </div>
      )}
      {isSmallScreen && ( // Render off-canvas overlay for small screens
        <div
          className={`off-canvas-overlay ${isFilterOpen ? "show" : ""}`}
          onClick={toggleFilters}
        ></div>
      )}
    </>
  );
};

export default SearchSponsors;
