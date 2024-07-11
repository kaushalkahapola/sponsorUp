import React, { useState, useEffect } from "react";
import OrganizerSideBar from "../components/OrganizerSideBar";
import OrganizersNavbar from "../components/OrganizersNavbar";
import { Container, Grid } from "@radix-ui/themes";
import { proposals, events } from "../dummy_data/data";
import SearchBar from "../components/SearchBar";
import ProposalCard from "../components/ProposalCard";

const Proposals = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredProposals, setFilteredProposals] = useState([]);

  useEffect(() => {
    const filterAndSortProposals = () => {
      // Filter proposals based on search text
      let filtered = proposals.filter((proposal) => {
        const event = events.find((event) => event.id === proposal.eventId);
        return (
          event && event.title.toLowerCase().includes(searchText.toLowerCase())
        );
      });

      // Sort filtered proposals by status (pending first, then approved)
      filtered.sort((a, b) => {
        if (a.status === "Pending" && b.status !== "Pending") return -1;
        if (b.status === "Pending" && a.status !== "Pending") return 1;
        return 0;
      });

      setFilteredProposals(filtered);
    };

    filterAndSortProposals();
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
            selectedMenu="Proposals"
            initialIsOpen={false} // Adjust as needed
            onMenuClick={(menuName) => console.log(`Menu clicked: ${menuName}`)} // Example callback
          />
          <div className="w-full">
            <SearchBar
              placeholder="Search for events"
              searchText={searchText}
              setSearchText={setSearchText}
              onSearchButtonClick={searchBtnClicked}
            />
            <Grid gap="3" className="flex-row">
              <div className="">
                <div className="grid px-5 py-7 gap-6 grid-cols-1">
                  {filteredProposals.map((proposal) => (
                    <ProposalCard key={proposal.id} proposalId={proposal.id} />
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

export default Proposals;
