import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram} from "react-icons/fa";
import { ButtonGroup,  IconButton } from '@chakra-ui/react'
import LogoPic from '../assets/logo.svg';

function Header() {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <HeaderLeft>
          <Logo src={LogoPic} />
        </HeaderLeft>
        <HeaderCenter>
          <HeaderNavigationContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/Board">Board</StyledLink>
            <StyledLink to="/">Link_1</StyledLink>
            <StyledLink to="/">Link_2</StyledLink>
          </HeaderNavigationContainer>
        </HeaderCenter>
        <HeaderRight>
        <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="/"
              aria-label="Facebook"
              icon={<FaFacebookSquare fontSize="1.25rem" />}
            />
            <IconButton as="a" href="/" aria-label="Instagram" icon={<FaInstagram fontSize="1.25rem" />} />
            <IconButton as="a" href="/" aria-label="Github" icon={<FaGithubSquare fontSize="1.25rem" />} />
            <IconButton as="a" href="/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.25rem" />} />
          </ButtonGroup>
        </HeaderRight>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}


const HeaderContainer = styled.nav`
  width: 100%;
  background-color: #FDBA74;
  display: flex;
  flex-direction: column;
`;

const HeaderLeft = styled.div`
  flex: 30%;
  display: flex;
  justify-content: center;
  
`;

const Logo = styled.img`
  margin: 10px;
  height: auto;
  max-width: 180px;
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 50px;
`

const HeaderInnerContainer = styled.div`
  width: auto;
  height: 80px;
  display: flex;
`;

const HeaderNavigationContainer = styled.div`
  display: flex;
`; 

const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: black solid 3px;
  font-weight: bolder;
  color: black;
  font-size: large;
  margin: 20px;
  font-family: 'Work Sans', sans-serif;
  &:hover{
    color: white;
    border-bottom: white solid 3px;
  }
`;

export default Header;