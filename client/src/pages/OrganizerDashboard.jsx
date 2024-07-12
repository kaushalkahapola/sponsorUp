import OrganizerSideBar from "../components/OrganizerSideBar";
import OrganizersNavbar from "../components/OrganizersNavbar";
import { Container, Grid, Heading, Text, Table, Card, Flex, Avatar, Box } from "@radix-ui/themes";
import { events } from "../dummy_data/data";
import { sponsors } from "../dummy_data/data";

function Star({ filled }) {
  return <span className="text-yellow-500">{filled ? '★' : '☆'}</span>;
}

// StarRating Component
function StarRating({ rating }) {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
}

const OrganizerDashboard = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const firstevents = events.slice(0, 4);
  const firstSponsors = sponsors.slice(0, 2);
  return (
    <div>
      <OrganizersNavbar />
      <Container>
        <div className="flex">
          <OrganizerSideBar
            selectedMenu="Dashboard"
            initialIsOpen={false} // Adjust as needed
            onMenuClick={(menuName) => console.log(`Menu clicked: ${menuName}`)} // Example callback
          />
          <div className="w-full px-10 py-10 space-y-10">
            <div className="space-y-5">
              <Text className="text-gray-200">
                account / <span className="text-gray-900">Dashboard</span>
              </Text>
              <Heading>Dashboard</Heading>
            </div>
            <div className="recently-published space-y-5">
              <Heading>Recently Published</Heading>
              <Table.Root variant="surface">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>Events</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="hidden md:table-cell">
                      Date of the event
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="hidden md:table-cell">views</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {firstevents.map((event, index) => {
                    // Calculate days left
                    const eventDate = new Date(event.datetime);
                    const currentDate = new Date();
                    const timeDiff = eventDate - currentDate;
                    const daysLeft = Math.ceil(
                      timeDiff / (1000 * 60 * 60 * 24)
                    );

                    return (
                      <Table.Row key={index}>
                        <Table.RowHeaderCell>{event.title}</Table.RowHeaderCell>
                        <Table.Cell className="hidden md:table-cell">
                          <div>
                            {eventDate.toLocaleDateString("en-US", options)}
                          </div>
                          <div>
                            {daysLeft > 0
                              ? `${daysLeft} days left`
                              : "Event passed"}
                          </div>
                        </Table.Cell>{" "}
                        {/* Display days left */}
                        <Table.Cell className="hidden md:table-cell"s>{event.views}</Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table.Root>
            </div>
            <div className="reviews space-y-5">
              <Heading>Reviews</Heading>
              <Box className="w-full space-y-5">
              {firstSponsors.map((sponsor, index) => {
                
                return(
                <Card className="space-y-3">
                  <Flex key={index} gap="3" align="center">
                    <Avatar
                      size="3"
                      src={sponsor.avatar}
                      radius="full"
                      fallback="T"
                    />
                    <Box>
                      <Text as="div" size="2" weight="bold">
                        {sponsor.name}
                      </Text>

                    </Box>
                  </Flex>
                  <Box>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Box>
                  <Box>
                  <StarRating rating={3} />
                  </Box>
                </Card>
              )})}
              </Box>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrganizerDashboard;
