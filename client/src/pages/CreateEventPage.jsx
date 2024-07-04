import React, { useRef, useEffect, useState } from "react";
import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import OrganizersNavbar from "../components/OrganizersNavbar";
import Footer from "../components/Footer"; 

const CreateEventPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const coverRef = useRef(null);
  const generalRef = useRef(null);
  const locationRef = useRef(null);
  const packagesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust this value based on when you want to trigger the visibility
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (coverRef.current) observer.observe(coverRef.current);
    if (generalRef.current) observer.observe(generalRef.current);
    if (locationRef.current) observer.observe(locationRef.current);
    if (packagesRef.current) observer.observe(packagesRef.current);

    return () => {
      if (coverRef.current) observer.unobserve(coverRef.current);
      if (generalRef.current) observer.unobserve(generalRef.current);
      if (locationRef.current) observer.unobserve(locationRef.current);
      if (packagesRef.current) observer.unobserve(packagesRef.current);
    };
  }, []);

  return (
    <>
      <OrganizersNavbar/>
      <Container className="my-8" >
        <Grid columns={{ initial: "1", sm: "4" }} gap="5">
          <Box
            className="space-y-3 sticky-sidebar"
            gridColumn={{ sm: "span 1" }}
          >
            <Heading>Create Event</Heading>
            <Flex direction="column" gapY="4">
              <Text
                onClick={() => scrollToSection(coverRef)}
                style={{
                  color: activeSection === "cover" ? "blue" : "inherit",
                  cursor: "pointer",
                }}
              >
                Upload Cover
              </Text>
              <Text
                onClick={() => scrollToSection(generalRef)}
                style={{
                  color: activeSection === "general" ? "blue" : "inherit",
                  cursor: "pointer",
                }}
              >
                General Information
              </Text>
              <Text
                onClick={() => scrollToSection(locationRef)}
                style={{
                  color: activeSection === "location" ? "blue" : "inherit",
                  cursor: "pointer",
                }}
              >
                Location And Time
              </Text>
              <Text
                onClick={() => scrollToSection(packagesRef)}
                style={{
                  color: activeSection === "packages" ? "blue" : "inherit",
                  cursor: "pointer",
                }}
              >
                Packages
              </Text>
            </Flex>
          </Box>
          <Box gridColumn={{ xs: "span 4", sm: "span 3" }} marginLeft="220px"> {/* Adjust marginLeft based on your sidebar width */}
            <Flex className="space-y-96" direction="column" gapY="9">
              <div ref={coverRef} id="cover">
                <Heading>Upload Cover</Heading>
                <Text>Upload the cover image for the event here.</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
              </div>
              <div ref={generalRef} id="general">
                <Heading>General Information</Heading>
                <Text>Fill out the general information for the event here.</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
              </div>
              <div ref={locationRef} id="location">
                <Heading>Location And Time</Heading>
                <Text>Specify the location and time for the event here.</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
              </div>
              <div ref={packagesRef} id="packages">
                <Heading>Packages</Heading>
                <Text>Define the sponsorship packages for the event here.</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
                <Text>Placeholder content to create some space...</Text>
              </div>
            </Flex>
          </Box>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
};

export default CreateEventPage;
