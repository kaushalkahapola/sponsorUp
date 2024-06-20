import React from "react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Link,
  Text,
} from "@radix-ui/themes";
import { Button } from "./Buttons";

const OrganizersNavbar = () => {
  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "My Events",
      path: "/",
    },
  ];

  return (
    <nav className="border-b mb-6 px-5 font-poppins">
      <Container>
        <Flex align="center" py="3" justify="between">
          <Flex gap='6' align="center">
            <Link href="/" className="text-gray-400 font-bold text-2xl">Sponsor<span className="text-primary">Up</span> </Link>
            <ul className="flex space-x-6 text-sm">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-zinc-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Flex>
            <Box>
              <Flex gap="3" align="center">
                <Button text="+ Create Event"/>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Avatar
                      src="/"
                      fallback={"?"}
                      size="2"
                      radius="full"
                      className="cursor-pointer"
                    />
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Label>
                      <Text size="2" className="font-poppins">example@gmail.com</Text>
                    </DropdownMenu.Label>
                    <DropdownMenu.Item>
                      <Text>SignOut</Text>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
                <Flex
                direction='column' justify='center' align='start'>
                <Text
                  size="2"
                  weight="medium"
                >{`John Smith`}</Text>
                <Text size='1' weight='light'>test Orginaztion</Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default OrganizersNavbar;
