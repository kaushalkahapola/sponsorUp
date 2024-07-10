import React from "react";
import { Card, Flex, Box, Badge } from "@radix-ui/themes";
import { Button } from "./Buttons";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";

/**
 * EventCard component displays information about an event.
 *
 * @component
 * @param {Object} event - The event object containing event details.
 * @param {string} event.title - The title of the event.
 * @param {string} event.category - The category of the event.
 * @param {string} event.datetime - The date and time of the event.
 * @param {string} event.description - The description of the event.
 * @param {string} event.location - The location of the event.
 * @param {string} event.organizer - The organizer of the event.
 * @param {string} event.coverImage - The URL of the cover image for the event.
 * @param {string[]} event.album - An array of URLs for the event photo album.
 * @returns {JSX.Element} The rendered EventCard component.
 */
const EventCard = ({
  event = {
    title: "Sample Event",
    category: "General",
    datetime: "2022-12-31T23:59:59.999Z",
    description: "This is a sample event description.",
    location: "Sample Location",
    organizer: "Sample Organizer",
    coverImage: "https://picsum.photos/400/200",
    album: [
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
    ],
  },
}) => {
  const {
    title,
    category,
    datetime,
    description,
    location,
    organizer,
    coverImage,
    album,
  } = event;

  // Function to format date and time
  const formatDateTime = (datetime) => {
    const eventDate = new Date(datetime);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDateTime = eventDate.toLocaleDateString("en-US", options);
    const day = eventDate.getDate();
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
        ? "rd"
        : "th";
    return formattedDateTime.replace(/\d+/, day + suffix);
  };

  const coverImageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "150px",
    overflow: "hidden",
    borderRadius: "8px",
  };

  const coverImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      "linear-gradient(270deg, rgba(0, 0, 0, 0), transparent 10%, rgba(0, 0, 0, 0.8))",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "15px",
    borderRadius: "8px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "4px",
  };
  const infoStyle = {
    fontSize: "16px",
    marginBottom: "0px",
  };

  const placeTimeStyle = {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "14px",
    marginTop: "4px",
  };

  const organizerStyle = {
    display: "flex",
    alignSelf: "flex-end",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginTop: "0px",
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.7)",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector("img").style.transform = "scale(1.05)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector("img").style.transform = "scale(1)";
  };

  return (
    <div className="font-poppins text-gray">
      <Box>
        <Card className="p-4">
          <Flex direction={"column"} gap="5">
            <Box
              style={coverImageContainerStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={coverImage} alt={title} style={coverImageStyle} />
              <Box style={overlayStyle}>
                <Box style={titleStyle}>{title}</Box>
                <Box
                  style={{
                    ...infoStyle,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={placeTimeStyle}>
                    <MdLocationOn className="me-1" /> {location}
                  </div>
                  <div style={placeTimeStyle}>
                    <AiOutlineClockCircle className="me-1" />{" "}
                    {formatDateTime(datetime)}
                  </div>
                </Box>
                <Box style={organizerStyle}>
                  <FaUserTie className="me-1" />
                  {organizer}
                </Box>
              </Box>
            </Box>
            <Flex direction="column" align="start" justify="center" gapY="4">
              <Box>
                <Flex
                  className="text-sm"
                  direction="column"
                  align="start"
                  justify="center"
                >
                  <Box>{description}</Box>
                </Flex>
              </Box>
            </Flex>
            <div className="text-sm flex">
              <Button className="me-2" text="learn more" />
              <Box className="text-sm ms-2 mt-2">
                <Flex gap="2">
                  <Badge color="blue">{category}</Badge>
                </Flex>
              </Box>
            </div>
          </Flex>
        </Card>
      </Box>
    </div>
  );
};

export default EventCard;
