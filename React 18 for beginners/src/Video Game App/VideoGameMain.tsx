import { ChakraProvider } from "@chakra-ui/react";
import Test from "./Test";
import VideoGameApp from "./VideoGameApp";

const VideoGameMain = () => {
  return (
    <ChakraProvider>
      <VideoGameApp />
    </ChakraProvider>
  );
};

export default VideoGameMain;
