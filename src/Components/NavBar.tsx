import { HStack, Image, Link } from "@chakra-ui/react";
import Game_icon from ".././assets/Designer-transformed.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Link href="/">
        <Image boxSize="60px" alt="navbar_img" src={Game_icon} />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
