import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sponsors, events } from "../dummy_data/data";
import { Button } from "../components/Buttons";
import {
  Container,
  Grid,
  Heading,
  Box,
  Avatar,
  Badge,
  Card,
  Flex,
} from "@radix-ui/themes";
import EventCard from "../components/EventCard";
import { FaHeart, FaRegHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SponsorDetailsPage = () => {
  const { id } = useParams();
  const [sponsor, setSponsor] = useState(null);
  const [sponsorEvents, setSponsorEvents] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
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
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleComment = (comment) => {
    setComments([...comments, comment]);
  };

  if (!sponsor) return <div>Loading...</div>;

  return (
    <Container>
      <div className="flex py-10">
        <Heading className="text-3xl pe-10">{sponsor.name}</Heading>
        <Link to={`./sendproposal`}>
          <Button text="Send Proposal" />
        </Link>
      </div>
      <Grid gap="3" templateColumns="2fr 3fr" className="md:flex">
        <Box maxWidth="700px" height="auto">
          <Card className="p-5" style={{ height: "100%" }}>
            <Flex
              direction="column"
              align="start"
              justify="center"
              gap="5"
              style={{ height: "100%" }}
            >
              <Box>
                <Flex gap="4">
                  <Avatar
                    src="/"
                    fallback={"?"}
                    size="6"
                    radius="full"
                    className="cursor-pointer"
                  />
                  <Box>
                    <Flex direction="column" align="start" justify="center">
                      <Box className="text-black font-bold">{sponsor.name}</Box>
                      <Box>{sponsor.location}</Box>
                      <Badge mt="1" color="purple">
                        {sponsor.status}
                      </Badge>
                    </Flex>
                  </Box>
                  <Box className="ml-auto">
                    <Flex gap="2" align="center">
                      {liked ? (
                        <FaHeart
                          onClick={handleLike}
                          className="cursor-pointer text-primary-500"
                        />
                      ) : (
                        <FaRegHeart
                          onClick={handleLike}
                          className="cursor-pointer text-primary-500"
                        />
                      )}
                      <div>{likes} Likes</div>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex
                  direction="column"
                  align="start"
                  justify="center"
                  gapY="4"
                >
                  <Box>
                    <Box className="text-sm">{sponsor.description}</Box>
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
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <CommentSection comments={comments} onComment={handleComment} />
              </Box>
            </Flex>
          </Card>
        </Box>
        <Box maxWidth="700px" height="auto">
          <Card className="p-5" style={{ height: "100%" }}>
            <Heading size="xl" className="text-center my-5">
              Past Sponsored Events
            </Heading>
            <Flex gap="2" align="center" justify="space-between">
              <FaArrowLeft className="cursor-pointer" />
              <Box className="overflow-hidden">
                <Grid
                  gap="3"
                  templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                  className="md:flex"
                >
                  {sponsorEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </Grid>
              </Box>
              <FaArrowRight className="cursor-pointer" />
            </Flex>
          </Card>
        </Box>
      </Grid>
      <Box
        className="mt-8 bg-primary-500 p-5 rounded-lg"
        style={{ height: "600px" }}
      >
        <Heading size="xl" className="text-center text-white mb-5">
          Photo Gallery
        </Heading>
        <Gallery
          images={[
            "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
            "https://cdn.pixabay.com/photo/2019/04/13/22/50/concert-4125832_640.jpg",
            "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_640.jpg",
            "https://cdn.pixabay.com/photo/2016/12/28/20/30/wedding-1937022_640.jpg",
            "https://cdn.pixabay.com/photo/2016/11/18/17/47/iphone-1836071_640.jpg",
            "https://cdn.pixabay.com/photo/2020/07/27/13/18/woman-5442400_640.jpg",
            "https://cdn.pixabay.com/photo/2020/06/07/13/33/fireworks-5270439_640.jpg",
            "https://cdn.pixabay.com/photo/2017/09/25/18/08/concert-2786075_640.jpg",
          ]}
        />
      </Box>
    </Container>
  );
};

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box
      className="relative flex items-center justify-center"
      style={{ height: "100%" }}
    >
      <FaArrowLeft
        onClick={handlePrev}
        className="cursor-pointer absolute left-0 text-white"
      />
      <Box className="flex items-center justify-center overflow-hidden h-full w-full">
        <img
          src={images[currentIndex]}
          alt="gallery"
          className="max-h-full max-w-full object-contain"
        />
      </Box>
      <FaArrowRight
        onClick={handleNext}
        className="cursor-pointer absolute right-0 text-white"
      />
      <Box className="absolute bottom-5 flex justify-center w-full">
        {images.map((_, index) => (
          <span
            key={index}
            className={`mx-1 h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-200"
            }`}
          ></span>
        ))}
      </Box>
    </Box>
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
