import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostIt from './../components/post-it-done';
import { Text } from '@chakra-ui/react'
import pbMouseIconNormal from '../assets/pb_mouse_icon_normal.png';
import pbMouseIconClicked from '../assets/pb_mouse_icon_clicked.png';
import { Box } from "@chakra-ui/react"

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
      <HomeContainer>
        <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient='linear(to-l, #FFFFFF, #FFCF00)' margin-top='-50px'>
              <Text
                bgGradient='linear-gradient(180deg, #003F91, #003138)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <b>About Us</b>
              </Text>
            </Box>
        </div>
        {/* This component displays a post-it note with a welcome message */}
        <PostItContainer style={{ marginBottom: "100px" }}>
          <PostIt author="@PosterBoy" content="We're PosterBoy. A team of 7 developers, apart of RCOS - Rensselaer Center for Open Source. This is our Arch Summer 23 semester project. We've set out to build a radically different social network. Our users have more control, both through using our site, but also on the development side. As a fully open-source project, we're completely transparent in our operations. Unsure? Check the code out your self on our GitHub repository in the footer below."/>
        </PostItContainer>
      </HomeContainer>
      <SecondHomeContainer>
        <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient='linear(to-l, #FFFFFF, #FFCF00)' margin-top='-50px'>
              <Text
                bgGradient='linear-gradient(180deg, #5F0A87, #A4508B)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <b>Our Vision</b>
              </Text>
            </Box>
        </div>
        {/* This component displays a post-it note with a welcome message */}
        <PostItContainer style={{ marginBottom: "100px" }}>
          <PostIt author="@PosterBoy" content="PosterBoy is comprised of our frontend and backend components. Our frontend using React.js, HTML, CSS, & JavaScript, while our backend is using Django (Python), PostgreSQL."/>
        </PostItContainer>
      </SecondHomeContainer>
      <HomeContainer>
        <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient='linear(to-l, #FFFFFF, #FFCF00)' margin-top='-50px'>
              <Text
                bgGradient='linear-gradient(180deg, #FF0000, #A4508B)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <b>Feedback</b>
              </Text>
            </Box>
        </div>
        {/* This component displays a post-it note with a welcome message */}
        <PostItContainer style={{ marginBottom: "100px" }}>
          <PostIt author="@PosterBoy" content="We're open to feedback. PosterBoy revolves around providing users with a unique digital environment to share ideas where only the best survive. If you have any feedback on something we could do better, or an idea for our website, please reach out to our team."/>
        </PostItContainer>
      </HomeContainer>
    </>
  );
}

// This component is used to style the home page
const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#FFFFFF, #003F91);
`;

const SecondHomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#003F91, #FFFFFF);
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