import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Test from "./Test";
import theme from "./theme";
import VideoGameApp from "./VideoGameApp";

const VideoGameMain = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <VideoGameApp />
    </ChakraProvider>
  );
};

export default VideoGameMain;
