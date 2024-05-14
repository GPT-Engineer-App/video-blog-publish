import React from "react";
import { Container, VStack, Heading, Text, Box, Link, IconButton } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

const videos = [
  {
    title: "My First Video",
    description: "This is the description of my first video.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "My Second Video",
    description: "This is the description of my second video.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  // Add more videos here
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl">
          My YouTube Blog
        </Heading>
        {videos.map((video, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading as="h2" size="lg">
              {video.title}
            </Heading>
            <Text mt={4}>{video.description}</Text>
            <Link href={video.url} isExternal mt={4}>
              <IconButton aria-label="Watch on YouTube" icon={<FaYoutube />} size="lg" colorScheme="red" mt={4} />
            </Link>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
