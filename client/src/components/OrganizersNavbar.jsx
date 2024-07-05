import React, { useState, useEffect } from "react";
import { Button } from "./Buttons";
import { Link, useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import { Organizers } from "../dummy_data/data"; // Adjust the path as needed

const OrganizersNavbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [organizer, setOrganizer] = useState(null);

  // Function to get a random organizer
  const getRandomOrganizer = () => {
    const randomIndex = Math.floor(Math.random() * Organizers.length);
    return Organizers[randomIndex];
  };

  useEffect(() => {
    setOrganizer(getRandomOrganizer());
  }, []);

  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "My Events",
      path: "/events",
    },
  ];

  return (
    <nav className="fixed-navbar border-b mb-6 px-5 font-poppins bg-white">
      <Container>
        <Flex align="center" py="3" justify="between">
          <Flex gap="6" align="center">
            <Link to="/" className="text-gray-400 font-bold text-2xl">
              Sponsor<span className="text-primary">Up</span>{" "}
            </Link>
            {/* Links */}
            <ul className="hidden lg:flex space-x-6 text-sm">
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-zinc-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          {/* Hamburger Menu Icon */}
          <Box className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              <Avatar
                src={organizer?.photoURL || "/"}
                fallback={organizer?.name?.charAt(0) || "?"}
                size="2"
                radius="full"
                className="cursor-pointer"
              />
            </button>
          </Box>
          {/* Profile and Menu */}
          <Flex gap="3" align="center" className="hidden md:inline-flex">
            {/* Create Event Button */}
            {location.pathname !== "/events/new" && (
              <div className="hidden md:block text-sm">
                <Link to="/events/new">
                  <Button text="+ Create Event" />
                </Link>
              </div>
            )}
            {/* Avatar and Dropdown Menu */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
              <button >
                <Avatar
                  src={organizer?.photoURL || "/"}
                  fallback={organizer?.name?.charAt(0) || "?"}
                  size="2"
                  radius="full"
                  className="cursor-pointer"
                />
              </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content variant="soft">
                <DropdownMenu.Label >
                  <Text size='5'>{organizer?.email || "example@gmail.com"}</Text>
                </DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Item color="">
                  <Link to='/signout'><Button text="Sign Out" /></Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            {/* User Info */}
            {organizer && (
              <Flex
                direction="column"
                justify="center"
                align="start"
                className="hidden md:inline-flex"
              >
                <Text size="2" weight="medium">
                  {organizer.name || "John Smith"}
                </Text>
                <Text size="1" weight="light">
                  {organizer.organization || "Test Organization"}
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
        {/* Mobile Menu */}
        <div
          className={`${
            open ? "block" : "hidden"
          } md:hidden absolute bg-white top-16 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}
        >
          {links.map((link, index) => (
            <Link key={index} to={link.path}>
              <span className="block md:inline-block md:mx-4 md:my-0 my-7 font-semibold text-gray-800 hover:text-blue-400 duration-500">
                {link.label}
              </span>
            </Link>
          ))}
          <div className="flex items-center justify-end my-4 mx-8 space-x-2">
            {location.pathname !== "/events/new" && (
              <Link to="/events/new">
                <Button
                  variant="secondary"
                  text="Create event"
                  className="btn bg-gray-50 text-purple-500 md:ml-4 px-3 py-1 rounded duration-50 md:static"
                />
              </Link>
            )}
            <Link to="/signout">
              <Button
                text="Sign out"
                className="btn bg-purple-500 text-white-100 md:ml-4 px-3 py-1 rounded duration-50 md:static"
              />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default OrganizersNavbar;
