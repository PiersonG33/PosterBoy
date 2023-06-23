import React from "react";
import styled from "styled-components";
import SignUp from "./SignUp";
import { FaHome, FaUserCircle, FaRegQuestionCircle, FaAngleDown} from "react-icons/fa";
import { 
  Button, ButtonGroup,  IconButton, 
  Menu, MenuButton, MenuList, MenuItem, 
  Tooltip
} from '@chakra-ui/react'

import LoginPopup from "./loginPopup";
import BoardCounter from './boardCounter';

import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent
} from '@chakra-ui/react'

import { Link } from "react-router-dom";
import LogoPic from '../assets/logo.svg';



// This component represents the header our website
function Header() {
  return (
    <HeaderContainer>
      <SignUpContainer>
        <SignUp/>
      </SignUpContainer>
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
              <IconButton as="a" href="/" color='#003F91' aria-label="Home" icon={<FaHome fontSize="1.75rem" alt />} />
            </Tooltip>

            <LoginOrProfile/>
            
            <Tooltip hasArrow label='About'>
              <IconButton as="a" href="/About" color='#003F91' aria-label="Help" icon={<FaRegQuestionCircle fontSize="1.75rem" />} />
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
                <IconButton as="a" href="#" color='#003F91' aria-label="Profile" icon={<FaUserCircle fontSize="1.75rem" />} />
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

                  <Stack spacing={2} direction='column' align='center'>
                    <Button
                      mt={4}
                      colorScheme='blue'
                      type='submit'
                    >
                      Log in
                    </Button>
                    
                      <Stack spacing={2} direction='row' align='center'>
                        <SignUpText>Don't have an account?</SignUpText><SignUpLink>Sign up here.</SignUpLink>
                      </Stack>
                  </Stack>
                </FormControl>
              </PopoverBody>
              </div>
            </PopoverContent>
          </Popover>


function LoginOrProfile() {

  let content;

  let logged_in = true; // Dummy variable, should actually check if logged in.

  if (logged_in)
  {
    content = <BoardCounter/>
  }
  else {
    content = <LoginPopup/>
  }

  return (
    <Popover>
      <PopoverTrigger>
          <IconButton as="a" href="#" color='#FFCF00' aria-label="Profile" icon={<FaUserCircle fontSize="1.75rem" />} />
      </PopoverTrigger>
      <PopoverContent>
        
        {content}

      </PopoverContent>
    </Popover>
  );
}

function signUpOverlay() {
  document.getElementById("signUpID").style.display = "block";
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

const SignUpContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 15px;
  color: white;
  transform: translate(-50%,-50%);
  z-index: 5;
  -ms-transform: translate(-50%,-50%);* Black background with opacity */
`

const SignUpText = styled.p`

`

const SignUpLink = styled.button`
  color: #003F91;
`

export default Header;