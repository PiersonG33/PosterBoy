import React from "react";
import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { ButtonGroup,  IconButton } from '@chakra-ui/react'
import RCOSLogo from '../assets/rcos_logo.svg';

const FooterInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
`;

// This component represents the footer of the Official PosterBoy Website!
function Footer() {
  return (
    <FooterContainer>
        <FooterLeft>
          {/* This element showcases how cool PosterBoy is ;) */}
          <FooterText>PosterBoy. Reddit faces no chance.</FooterText>
        </FooterLeft>
        <FooterRight>
          {/* This component displays social media icons */}
          <ButtonGroup variant="ghost" marginRight="1rem">
            <IconButton as="a" color='#FFCF00' href="https://github.com/PiersonG33/PosterBoy/tree/front-end/posterboy" aria-label="Github" icon={<FaGithubSquare fontSize="1.75rem" />} />
            <IconButton as="a" color='#FFCF00' href="https://new.rcos.io/" aria-label="Github" icon={<img src={RCOSLogo} alt="RCOS Logo" style={{ height: "1.54rem", width: "1.54rem" }} />} />
            {/* The RCOS icon must always be 0.88x the size of the other normal buttons, to keep the visual sizes the same. */}
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