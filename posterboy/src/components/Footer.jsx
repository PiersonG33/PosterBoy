import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram} from "react-icons/fa";
import { ButtonGroup,  IconButton } from '@chakra-ui/react'

function Footer() {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterLeft>
          <FooterText>PosterBoy is a pretty cool website...</FooterText>
        </FooterLeft>
        <FooterRight>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              color='#FFCF00' 
              href="/"
              aria-label="Facebook"
              icon={<FaFacebookSquare fontSize="1.25rem" />}
            />
            <IconButton as="a" color='#FFCF00' href="/" aria-label="Instagram" icon={<FaInstagram fontSize="1.25rem" />} />
            <IconButton as="a" color='#FFCF00' href="https://github.com/PiersonG33/PosterBoy/tree/front-end/posterboy" aria-label="Github" icon={<FaGithubSquare fontSize="1.25rem" />} />
            <IconButton as="a" color='#FFCF00' href="/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.25rem" />} />
          </ButtonGroup>
        </FooterRight>
      </FooterInnerContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #003F91;
  display: flex;
  flex-direction: column;
  color: black;
  font-family: 'Work Sans', sans-serif;
`;

const FooterInnerContainer = styled.div`
  width: auto;
  height: 80px;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const FooterLeft = styled.div`
  display: flex;
  flex: 50%;
  padding-left: 5%;
`;

const FooterRight = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3vw;
  position: relative;
`;

const FooterText = styled.p`
  margin: auto;
  opacity: 0.7;
  color: #FFCF00;
`

export default Footer;