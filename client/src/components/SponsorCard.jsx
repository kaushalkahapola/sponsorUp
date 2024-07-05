import React from "react";
import { Card, Flex, Box, Avatar, Badge } from "@radix-ui/themes";
import { Button } from "./Buttons";

const SponsorCard = ({
  sponsor = {
    name: "Company Name",
    location: "Location",
    status: "status",
    description: "Description about the company",
    categories: ["Music", "Education", "IT"],
    avatar: "",
  },
}) => {
  return (
    <div className="font-poppins text-gray">
      <Box maxWidth="700px">
        <Card className="p-5">
          <Flex direction="column" align="start" justify="center" gap="5">
            <Box>
              <Flex gapX="4">
                <Avatar
                  src={sponsor.avatar}
                  fallback={"?"}
                  size="6"
                  radius="full"
                  className="cursor-pointer"
                />
                <Box>
                  <Flex
                    className="h-full"
                    direction="column"
                    align="start"
                    justify="center"
                  >
                    <Box className="text-black font-bold">{sponsor.name}</Box>
                    <Box>{sponsor.location}</Box>
                    <Badge mt="1" color="purple">
                      {sponsor.status}
                    </Badge>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Flex direction="column" align="start" justify="center" gapY="4">
              <Box>
                <Flex
                  className=" text-sm"
                  direction="column"
                  align="start"
                  justify="center"
                >
                  <Box>{sponsor.description}</Box>
                </Flex>
              </Box>
              <Box className="text-sm">
                <Box className="text-black font-bold mb-2">
                  Interested Categories
                </Box>
                <Flex gap="2">
                  {sponsor.categories.map((category, index) => (
                    <Badge key={index} color="blue">
                      {category}
                    </Badge>
                  ))}
                  {/* <Badge color="orange">Music</Badge>
                  <Badge color="blue">Music</Badge>
                  <Badge color="green">Music</Badge> */}
                </Flex>
              </Box>
            </Flex>
            <div className="text-sm">
              <Button text="learn more" />
            </div>
          </Flex>
        </Card>
      </Box>
    </div>
  );
};

export default SponsorCard;
