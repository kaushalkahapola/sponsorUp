import React, { useState, useEffect } from "react";
import { Card, Flex, Box } from "@radix-ui/themes";
import { events, sponsors, proposals } from "../dummy_data/data";
import { Button } from "./Buttons";
import { Link } from "react-router-dom";

const ProposalCard = ({ proposalId }) => {
  const [event, setEvent] = useState({});
  const [sponsor, setSponsor] = useState({});
  const [proposal, setProposal] = useState({});

  useEffect(() => {
    // Fetch proposal data
    const fetchProposal = async (id) => {
      const proposal = proposals.find((proposal) => proposal.id === id);
      setProposal(proposal);
    };

    fetchProposal(proposalId);
  }, [proposalId]);

  useEffect(() => {
    // Fetch event data
    const fetchEvent = async (id) => {
      const event = events.find((event) => event.id === id);
      setEvent(event);
    };

    // Fetch sponsor data
    const fetchSponsor = async (id) => {
      const sponsor = sponsors.find((sponsor) => sponsor.id === id);
      setSponsor(sponsor);
    };

    if (proposal) {
      fetchEvent(proposal.eventId);
      fetchSponsor(proposal.sponsorId);
    }
  }, [proposal]);

  if (!event || !sponsor || !proposal) {
    return <div>Loading...</div>;
  }

  const getFirstLine = (description) => {
    console.log(description);
    return description.split("\n")[0];
  };

  return (
    <div className="font-poppins text-gray">
      <Box>
        <Card className="p-4">
          <Flex
            direction={{ initial: "column", md: "row" }}
            gap="5"
            justify="between"
            align="center"
          >
            <Box className="font-bold text-lg">{event.title}</Box>
            <Box className="text-md">{sponsor.name}</Box>
            <Box className="text-sm">{"getFirstLine(event.description)"}</Box>
            <Box className="text-sm">{proposal.status}</Box>
            <Link to={`/account/proposals/${proposal.id}`}>
              <Button text="Learn more" />
            </Link>
          </Flex>
        </Card>
      </Box>
    </div>
  );
};

export default ProposalCard;
