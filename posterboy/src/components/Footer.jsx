import React from "react";
import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { ButtonGroup,  IconButton } from '@chakra-ui/react'
import RCOSLogo from '../assets/rcos_logo.svg';
import { COLORS } from '../colors.js'


const comments = [
  "I like vertebrae", 
  "Reddit faces no chance.", 
  "The up and coming social media application.", 
  "Don't worry, we recycle the post-its.",
  "Go outside and touch grass.", 
  "Made by CS majors from RPI.", 
  "This definitely won't be a problem down the road.",
  "Lower your expectations.",
  "My Mom told me to do this.",
  "We do web stuff because web stuff is fun."
]

// This component represents the footer of the Official PosterBoy Website!
function Footer() {
  let num = Math.floor(Math.random() * 6);
  return (
    <FooterContainer>
        <FooterLeft>
          {/* This element showcases how cool PosterBoy is ;) */}
          <FooterText>PosterBoy. {comments[num]}</FooterText>
        </FooterLeft>
        <FooterRight>
          {/* This component displays social media icons */}
          <ButtonGroup variant="ghost" marginRight="1rem">
            <IconButton as="a" color={COLORS.jonquil} href="https://github.com/PiersonG33/PosterBoy/tree/main" aria-label="Github" icon={<FaGithubSquare fontSize="1.75rem" />} />
            <IconButton as="a" color={COLORS.jonquil} href="https://new.rcos.io/" aria-label="Github" icon={<img src={RCOSLogo} alt="RCOS Logo" style={{ height: "1.54rem", width: "1.54rem" }} />} />
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
  height: 12vh;
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