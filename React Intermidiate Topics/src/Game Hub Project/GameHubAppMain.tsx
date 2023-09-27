import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import GameHubApp from "./GameHubApp";
import "./index.css";
import theme from "./theme";

const GameHubAppMain = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <GameHubApp />
    </ChakraProvider>
  );
};

export default GameHubAppMain;
