import React from "react";
import { Card, Flex, Box, Avatar, Badge } from "@radix-ui/themes";
import { Button } from "./Buttons";

const SponsorCard = ({
  name = "Company Name",
  location = "Location",
  status = "status",
  description = "Description about the company",
  categories = ["Music", "Education", "IT"],
}) => {
  return (
    <div className="font-poppins text-gray">
      <Box maxWidth="700px">
        <Card className="p-5">
          <Flex direction="column" align="start" justify="center" gap="5">
            <Box>
              <Flex gapX="4">
                <Avatar
                  src="/"
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
                    <Box className="text-black font-bold">{name}</Box>
                    <Box>{location}</Box>
                    <Badge mt="1" color="purple">
                      {status}
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
                  <Box>{description}</Box>
                </Flex>
              </Box>
              <Box className="text-sm">
                <Box className="text-black font-bold mb-2">
                  Interested Categories
                </Box>
                <Flex gap="2">
                  {categories.map((category, index) => (
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
