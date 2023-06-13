import React from "react";
import styled from "styled-components";
import { FaHome, FaUserCircle, FaRegQuestionCircle, FaAngleDown} from "react-icons/fa";
import { Button, ButtonGroup,  IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
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
              All Boards  
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
            <IconButton as="a" href="/" color='#FFCF00' aria-label="Home" icon={<FaHome fontSize="1.75rem" />} />
            <IconButton as="a" href="/" color='#FFCF00' aria-label="Profile" icon={<FaUserCircle fontSize="1.75rem" />} />
            <IconButton as="a" href="/" color='#FFCF00' aria-label="Help" icon={<FaRegQuestionCircle fontSize="1.75rem" />} />
          </ButtonGroup>
        </HeaderRight>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}

// This component is used to style the header
const HeaderContainer = styled.div`
  background-color: #003F91;
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
  height: 160px;
`;

export default Header;