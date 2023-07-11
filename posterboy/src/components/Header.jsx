import React from "react";
import styled from "styled-components";
import { FaHome, FaUserCircle, FaRegQuestionCircle, FaAngleDown} from "react-icons/fa";
import { 
  Button, ButtonGroup,  IconButton, 
  Menu, MenuButton, MenuList, MenuItem, Input, Box,
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
import { FaSearch } from 'react-icons/fa';


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
          {/* This component displays a search bar */}
          <Box display="flex" alignItems="center">
            <Input
              placeholder="Search boards"
              mr={2}
              color="#003F91"
            />
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              bg="#003F91"
              color="white"
            />
          </Box>
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

function LoginOrProfile() {

  let content;

  let logged_in = false; // Dummy variable, should actually check if logged in.

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
          <IconButton as="a" href="#" 
          color='#003F91'
          aria-label="Profile" 
          icon={<FaUserCircle fontSize="1.75rem" />} 
          />
      </PopoverTrigger>
      <PopoverContent>
        
        {content}

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