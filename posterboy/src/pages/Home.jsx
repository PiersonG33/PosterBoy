import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostItDone } from './../components/post-it';
import { Text } from '@chakra-ui/react'
import LogoAnimation from '../assets/logo_animation.mp4';
import pbMouseIconNormal from '../assets/pb_mouse_icon_normal.png';
import pbMouseIconClicked from '../assets/pb_mouse_icon_clicked.png';
import { Box } from "@chakra-ui/react"
import rcosImage from "../assets/red_full_rcos_logo.png";
import { COLORS } from "../colors.js"

// This function is used to implement the custom cursor. It is currently not in use. See GitHub issue #1.

function Home() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.width = "32px";
    cursor.style.height = "32px";
    cursor.style.backgroundImage = `url(${isClicked ? pbMouseIconClicked : pbMouseIconNormal})`;
    cursor.style.backgroundSize = "cover";
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999"; // Set the z-index to a high value
    document.body.appendChild(cursor);
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    document.body.style.cursor = "none";
  
    const handleClick = () => {
      setIsClicked(true);
      cursor.style.backgroundImage = `url(${pbMouseIconClicked})`;
    };
  
    const handleRelease = () => {
      setIsClicked(false);
      cursor.style.backgroundImage = `url(${pbMouseIconNormal})`;
    };
  
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("mouseup", handleRelease);
  
    return () => {
      document.body.removeChild(cursor);
      document.body.style.cursor = "default";
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("mouseup", handleRelease);
    };
  }, [isClicked]);

  return(
    <>
      {/* This element displays a looping video */}
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={LogoAnimation} type="video/mp4" />
        </video>
      </VideoContainer>
      <HomeContainer>
        {/* This element displays a large, bold text element */}
        <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient='linear(to-l, #FFFFFF, #FFCF00)'>
              <Text
                bgGradient='linear(to-l, #FF0000, #820000)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <b>Open-source, always. An&nbsp;&nbsp;</b>
                  <img src={rcosImage} alt="RCOS logo" style={{ width: "200px", maxWidth: "200px", marginTop: "15px" }}></img>
                </div>
                <b>&nbsp;&nbsp;project.</b>
              </div>
              </Text>
            </Box>
        </div>
        {/* This component displays a post-it note with a welcome message */}
        <PostItContainer style={{ marginBottom: "100px" }}>
          <PostItDone author="@PosterBoy" content="We're an open source, experimental social platform. Post your ideas to the world. Delete others that don't fit the vibe. It's a controversial idea - that's why we think you'll like it."/>
        </PostItContainer>
        <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient='linear(to-l, #FFFFFF, #FFCF00)' margin-top='-50px'>
              <Text
                bgGradient={`linear-gradient(180deg, ${COLORS.marian_blue}, #003138)`}
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <b>Think it. Post it. Erase it.</b>
              </Text>
            </Box>
        </div>
      </HomeContainer>
    </>
  );
}

// This component is used to style the home page
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#FFFFFF, ${COLORS.marian_blue});
`;

// This component is used to style the post-it container
const PostItContainer = styled.div`
  margin-top: 5rem;
`;

// This component is used to style the video container
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(500px);
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`

export default Home;