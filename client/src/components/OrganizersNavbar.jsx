import React, { useState, useEffect } from "react";
import { Button } from "./Buttons";
import { Link, useLocation } from "react-router-dom";
import getUserType from "../firebase/getUserType";
import { auth } from "../firebase/firebase";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  AlertDialog,
  Flex,
  Text,
} from "@radix-ui/themes";
import SignOutFn from "../firebase/SignOut";
import { useNavigate } from "react-router-dom";

const OrganizersNavbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      const userType = await getUserType(user.uid);
      setUserType(userType);
      console.log(userType);
      console.log(user.uid);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const links = [
    {
      label: "Home",
      path: "/account/dashboard",
    },
    userType === "organizer" && {
      label: "My Events",
      path: "/account/myevents",
    },
    {
      label: "Search Events",
      path: "/events",
    },
  ];

  return (
    <nav className="fixed-navbar border-b border-b-gray-100 mb-6 px-5 font-poppins bg-white">
      <Container>
        <Flex align="center" py="3" justify="between">
          <Flex gap="6" align="center">
            <Link to="/" className="text-gray-400 font-bold text-2xl">
              Sponsor<span className="text-primary">Up</span>
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
                src={user?.photoURL || "/"}
                fallback={user?.displayName?.charAt(0) || "?"}
                size="2"
                radius="full"
                className="cursor-pointer"
              />
            </button>
          </Box>
          {/* Profile and Menu */}
          <Flex gap="3" align="center" className="hidden md:inline-flex">
            {/* Create Event Button */}
            {/* {location.pathname !== "/events/new" && userType == "organizer" && (
              <div className="hidden md:block text-sm">
                <Link to="/events/new">
                  <Button text="+ Create Event" />
                </Link>
              </div>
            )} */}
            {/* Avatar and Dropdown Menu */}
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <div className="hidden md:block text-sm">
                  <Button text="Sign Out" variant="secondary" />
                </div>
              </AlertDialog.Trigger>
              <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Sign out</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  Are you sure you want to sign out?
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button text="cancel" variant="secondary" />
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button
                      id="signout-btn"
                      text="Sign out"
                      minWidth="200px"
                      onClick={() => SignOutFn(auth, navigate)}
                    />
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
            <Link to={"/account/settings"}>
              <button>
                <Avatar
                  src={user?.photoURL || "/"}
                  fallback={user?.displayName?.charAt(0) || "?"}
                  size="2"
                  radius="full"
                  className="cursor-pointer"
                />
              </button>
            </Link>
            {/* User Info */}
            {user && (
              <Flex
                direction="column"
                justify="center"
                align="start"
                className="hidden md:inline-flex"
              >
                <Text size="2" weight="medium">
                  {userType || "Hello User"}
                </Text>
                <Text size="1" weight="light">
                  {user.email || "example@gmail.com"}
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
            {/* {location.pathname !== "/events/new" && userType == "organizer" && (
              <Link to="/events/new">
                <Button
                  variant="secondary"
                  text="Create event"
                  className="btn bg-gray-50 text-purple-500 md:ml-4 px-3 py-1 rounded duration-50 md:static"
                />
              </Link>
            )} */}
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button text="Sign Out" />
              </AlertDialog.Trigger>
              <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Sign out</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  Are you sure you want to sign out?
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button text="cancel" variant="secondary" />
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button
                      id="signout-btn"
                      text="Sign out"
                      minWidth="200px"
                      onClick={() => SignOutFn(auth, navigate)}
                    />
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default OrganizersNavbar;
