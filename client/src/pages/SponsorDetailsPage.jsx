import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sponsors, events } from "../dummy_data/data";
import { Button } from "../components/Buttons";
import { Container, Grid, Heading, Box, Avatar, Badge, Card, Flex } from "@radix-ui/themes";
import EventCard from "../components/EventCard"; // Import the EventCard component

const SponsorDetailsPage = () => {
  const { id } = useParams();
  const [sponsor, setSponsor] = useState(null);
  const [sponsorEvents, setSponsorEvents] = useState([]);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const sponsorData = sponsors.find((sponsor) => sponsor.id === parseInt(id));
    setSponsor(sponsorData);

    const relatedEvents = events.filter((event) =>
      sponsorData.categories.includes(event.category)
    );
    setSponsorEvents(relatedEvents);
  }, [id]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (comment) => {
    setComments([...comments, comment]);
  };

  if (!sponsor) return <div>Loading...</div>;

  return (
    <Container>
      <Heading size="3xl" className="text-center my-5">
        {sponsor.name}
      </Heading>
      <Grid gap="3" mdcols="1fr 2fr" className="md:flex">
        <Box maxWidth="700px">
          <Card className="p-5">
            <Flex direction="column" align="start" justify="center" gap="5">
              <Box>
                <Flex gapX="4">
                  <Avatar src="/" fallback={"?"} size="6" radius="full" className="cursor-pointer" />
                  <Box>
                    <Flex className="h-full" direction="column" align="start" justify="center">
                      <Box className="text-black font-bold">{sponsor.name}</Box>
                      <Box>{sponsor.location}</Box>
                      <Badge mt="1" color="purple">
                        {sponsor.status}
                      </Badge>
                    </Flex>
                  </Box>
                  <Box className="ml-auto">
                    <Flex gap="2">
                      <Button text="Like" onClick={handleLike} />
                      <div>{likes} Likes</div>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Flex direction="column" align="start" justify="center" gapY="4">
                <Box>
                  <Flex className="text-sm" direction="column" align="start" justify="center">
                    <Box>{sponsor.description}</Box>
                  </Flex>
                </Box>
                <Box className="text-sm">
                  <Box className="text-black font-bold mb-2">Interested Categories</Box>
                  <Flex gap="2">
                    {sponsor.categories.map((category, index) => (
                      <Badge key={index} color="blue">
                        {category}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </Flex>
              <Flex direction="column" align="start" justify="center" gapY="4">
                <CommentSection comments={comments} onComment={handleComment} />
              </Flex>
            </Flex>
          </Card>
        </Box>
      </Grid>
      <Box className="mt-8">
        <Heading size="xl" className="text-center my-5">
          Past Sponsored Events
        </Heading>
        <Grid gap="3" mdcols="1fr 2fr" className="md:flex">
          {sponsorEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

const CommentSection = ({ comments, onComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText) {
      onComment(commentText);
      setCommentText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment"
          className="border p-2 rounded w-full mb-2"
        />
        <Button text="Submit" type="submit" />
      </form>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="border-b pb-2 mb-2">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorDetailsPage;

