import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameHubApp from "./GameHubApp";
import "./index.css";
import theme from "./theme";

const GameHubAppMain = () => {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <GameHubApp />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default GameHubAppMain;
