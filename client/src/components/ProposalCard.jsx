import React, { useState, useEffect } from "react";
import { Card, Flex, Box, Text } from "@radix-ui/themes";
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
    if (!description) {
      return "";
    }
    return description.split("\n")[0];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "orange"; // Adjust color for pending status
      case "Approved":
        return "green"; // Adjust color for approved status
      case "Rejected":
        return "red"; // Adjust color for rejected status
      default:
        return "gray"; // Default color for unknown status
    }
  };

  return (
    <div className="font-poppins text-gray">
      <Box>
        <Card className="p-4">
          <Flex
            direction={{ initial: "column", md: "row" }}
            gap={{ initial: "3", md: "5" }}
            justify="between"
            align="center"
            className="items-center"
          >
            <div className="flex-1">
              <Box className="font-bold text-lg">{event.title}</Box>
              <Box className="text-md">{sponsor.name}</Box>
              <Box className="text-sm">{getFirstLine(event.description)}</Box>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center md:items-end">
              <Text
                size="sm"
                weight="medium"
                style={{ color: getStatusColor(proposal.status) }}
                className="mb-2 md:mb-0"
              >
                {proposal.status}
              </Text>
              <Link to={`/account/proposals/${proposal.id}`}>
                <Button text="Learn more" size="small" />
              </Link>
            </div>
          </Flex>
        </Card>
      </Box>
    </div>
  );
};

export default ProposalCard;
