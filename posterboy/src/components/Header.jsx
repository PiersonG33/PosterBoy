import React from "react";
import styled from "styled-components";
import { FaHome, FaUserCircle, FaRegQuestionCircle, FaAngleDown} from "react-icons/fa";
import { 
  Button, ButtonGroup,  IconButton, 
  Menu, MenuButton, MenuList, MenuItem, 
  Tooltip
} from '@chakra-ui/react'

import {
  Input
} from '@chakra-ui/react'

import { 
  Stack
} from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react'

import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverArrow, 
  PopoverCloseButton, 
  PopoverHeader,  
  PopoverBody 
} from '@chakra-ui/react'

import { Link } from "react-router-dom";
import LogoPic from '../assets/logo.svg';



// This component represents the header our website
function Header() {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <HeaderLeft>
          <LogoContainer>
            {/* This component displays the logo image and links to the home page */}
            <Link to="/">
              <Logo src={LogoPic}/>
            </Link>
          </LogoContainer>
          {/* This component displays a dropdown menu, of which there are various options to choose - as noted below */}
          <Menu>
            <MenuButton as={Button} color='#003F91'  rightIcon={<FaAngleDown/>}>
              Find a board  
            </MenuButton>
            <MenuList color='#003F91'>
              <MenuItem>Board 1</MenuItem>
              <MenuItem>Board 2</MenuItem>
              <MenuItem>Board 3</MenuItem>
              <MenuItem>Board 4</MenuItem>
              <MenuItem>Board 5</MenuItem>
            </MenuList>
          </Menu>
        </HeaderLeft>
        <HeaderRight>
          {/* This component displays three icons that link to the home page, profile page, and help page */}
          <ButtonGroup variant="ghost">
            <Tooltip hasArrow label='Home Page'>
              <IconButton as="a" href="/" color='#FFCF00' aria-label="Home" icon={<FaHome fontSize="1.75rem" alt />} />
            </Tooltip>

            <LoginPopup/>
            
            <Tooltip hasArrow label='About'>
              <IconButton as="a" href="/About" color='#FFCF00' aria-label="Help" icon={<FaRegQuestionCircle fontSize="1.75rem" />} />
            </Tooltip>
            
          </ButtonGroup>
        </HeaderRight>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}

function LoginPopup() {
  return (
    <Popover>
            <PopoverTrigger>
                <IconButton as="a" href="#" color='#FFCF00' aria-label="Profile" icon={<FaUserCircle fontSize="1.75rem" />} />
            </PopoverTrigger>
            <PopoverContent>
              <div style={{ color: 'black' }}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <center><b>Log In</b></center>
              </PopoverHeader>
              <PopoverBody>

            

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' />
                <FormLabel>Password</FormLabel>
                <Input type='password' />

                <Stack spacing={2} direction='row' align='center'>
                  <Button
                    mt={4}
                    colorScheme='green'
                    type='submit'
                    isLoading = {false}
                  >
                    Log in
                  </Button>
                  
                  <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    variant='link'
                    as="a"
                    href="/SignUp"
                    isLoading = {false}
                  >
                    Sign up
                  </Button>

                </Stack>

              </FormControl>


              </PopoverBody>
              </div>
            </PopoverContent>
          </Popover>
  );
}

// This component is used to style the header
const HeaderContainer = styled.div`
  background-color: #FFFFFF;
  color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// This component is used to style the inner container of the header
const HeaderInnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

// This component is used to style the left side of the header
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

// This component is used to style the right side of the header
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

// This component is used to style the logo container
const LogoContainer = styled.div`
  padding-top: 2px;
  padding-right: 10px;
`;

// This component is used to style the logo image
const Logo = styled.img`
  height: 100px;
`;

export default Header;