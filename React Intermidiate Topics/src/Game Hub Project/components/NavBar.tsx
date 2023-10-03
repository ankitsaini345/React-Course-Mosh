import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import useGameStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const setsearchText = useGameStore((s) => s.setsearchText);

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={setsearchText} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
