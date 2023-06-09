import React from "react";
import styled from "styled-components";
import { FaHome, FaUserCircle, FaRegQuestionCircle, FaAngleDown} from "react-icons/fa";
import { Button, ButtonGroup,  IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import LogoPic from '../assets/logo.svg';

function Header() {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <HeaderLeft>
          <Logo src={LogoPic} />
          <Menu>
            <MenuButton as={Button} color='#003F91'  rightIcon={<FaAngleDown/>}>
              All Boards  
            </MenuButton>
            <MenuList>
              <MenuItem>Board 1</MenuItem>
              <MenuItem>Board 2</MenuItem>
              <MenuItem>Board 3</MenuItem>
              <MenuItem>Board 4</MenuItem>
              <MenuItem>Board 5</MenuItem>
            </MenuList>
          </Menu>
        </HeaderLeft>
        <HeaderRight>
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


const HeaderContainer = styled.nav`
  width: 100%;
  background-color:#003F91;
  display: flex;
  flex-direction: column;
`;

const HeaderLeft = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  width: 50%;
`;

const Logo = styled.img`
  margin: 15px;
  height: auto;
  max-width: 100px;
`;

const HeaderRight = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 50px;
  width: 50%;
`

const HeaderInnerContainer = styled.div`
  width: auto;
  height: 80px;
  display: flex;
`;

const HeaderNavigationContainer = styled.div`
  display: flex;
`; 

export default Header;
