import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      ></Switch>
      <Text whiteSpace="nowrap" margin={0}>
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
