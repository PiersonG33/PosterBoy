import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram} from "react-icons/fa";
import { ButtonGroup,  IconButton } from '@chakra-ui/react'

// This component represents the footer of the Official PosterBoy Website!
function Footer() {
  return (
    <FooterContainer>
        <FooterLeft>
          {/* This element showcases how cool PosterBoy is ;) */}
          <FooterText>PosterBoy is a pretty cool website...</FooterText>
        </FooterLeft>
        <FooterRight>
          {/* This component displays social media icons */}
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
    </FooterContainer>
  );
}

// This component is used to style the footer
const FooterContainer = styled.div`
  background-color: #003F91;
  color: white;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// This component is used to style the left side of the footer
const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// This component is used to style the right side of the footer
const FooterRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// This component is used to style the text element in the footer
const FooterText = styled.div`
  font-size: 18px;
  text-align: center;
`;

export default Footer;