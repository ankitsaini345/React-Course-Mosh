import { Button, Menu, MenuButton } from "@chakra-ui/react";
import useGameStore from "../store";

const ResetFilter = () => {
  const resetGameQuery = useGameStore((s) => s.resetGameQuery);

  return (
    <Menu>
      <MenuButton onClick={() => resetGameQuery()} as={Button}>
        Reset Filters
      </MenuButton>
    </Menu>
  );
};

export default ResetFilter;
