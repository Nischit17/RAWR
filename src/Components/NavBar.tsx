import { HStack, Image, Text } from '@chakra-ui/react'
import Game_icon from  ".././assets/game-controller.png"

const NavBar = () => {
  return (
    <HStack>
        <Image boxSize="60px" alt='navbar_img' src={Game_icon} />
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar