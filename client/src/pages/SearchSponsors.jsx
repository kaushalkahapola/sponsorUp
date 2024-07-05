import React, { useState, useEffect } from "react";
import { Container, Grid, Heading } from "@radix-ui/themes";
import OrganizersNavbar from "../components/OrganizersNavbar";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import SponsorCard from "../components/SponsorCard"; // Assuming SponsorCard component exists
import { sponsors } from "../dummy_data/data";

const SearchSponsors = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, SetFilters] = useState([]);

  const [showFilters, setShowFilters] = useState(false);
  const [filteredSponsors, setFilteredSponsors] = useState([]);

  useEffect(() => {
    // Dummy initial content with SponsorCard data

    setFilteredSponsors(sponsors);
  }, []);

  useEffect(() => {
    //While typing
  }, [searchText, filters]);

  async function search(searchText, filters) {
    //fetch
    console.log(searchText);
  }

  const searchBtnClicked = async () => {
    await search(searchText, filters);
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
          {/* Left Side Content (Filters) */}
          <div className="bg-white rounded-md shadow-md pt-3 p-6 md:mt-0 md:ml-8">
            <div className="md:block">
              <Filters />
            </div>
          </div>
          {/* Right Side Content (Sponsor Cards) */}
          <div className="md:w-3/4">
            <div className="grid px-5 py-7 gap-6 md:grid-cols-1 xl:grid-cols-2">
              {filteredSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  name={sponsor.name}
                  location={sponsor.location}
                  status={sponsor.status}
                  description={sponsor.description}
                  categories={sponsor.categories}
                />
              ))}
            </div>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default SearchSponsors;
