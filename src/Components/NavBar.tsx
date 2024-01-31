import { HStack, Image } from '@chakra-ui/react'
import Game_icon from  ".././assets/game-controller.png"
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image boxSize="60px" alt='navbar_img' src={Game_icon} />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar