import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostIt from './../components/post-it';
import { Text } from '@chakra-ui/react'
import LogoAnimation from '../assets/logo_animation.mp4';
import pbMouseIconNormal from '../assets/pb_mouse_icon_normal.png';
import pbMouseIconClicked from '../assets/pb_mouse_icon_clicked.png';
import { Box } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react";
import rcosImage from "../assets/red_full_rcos_logo.png";

const AboutPage = () => {
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

  return (
    <AboutContainer>
      {/* This element displays a large, bold text element */}
        <AllText>
          <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient='linear(180deg, #242424, #161616)'>
              <Text
                bgGradient='linear-gradient(180deg, #000000, #eb831c)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <b>About Us</b>
                </div>
              </div>
              </Text>
            </Box>
          </div>
          <PostItContainer style={{ marginBottom: "100px" }}>
            <PostIt author="@PosterBoy" content="On PosterBoy, you can create, delete, and view posts with a few clicks of a button.
              Write your ideas on a post-it and share it with the community.
              You only have a certain number of post-its per day so be mindful about what you write.
              Want to be a menace? Take someone else's post-it off the discussion board.
              Again, you only have a certain number of deletes per day so use with caution!"/>
          </PostItContainer>
          <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient='linear(to-l, #FFFFFF, #FFCF00)' margin-top='-50px'>
              <Text
                bgGradient='linear-gradient(180deg, #003F91, #003138)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <b>What makes PosterBoy different than any other social media site?</b>
              </Text>
            </Box>
          </div>
          <BodyText>
              We're just better!
          </BodyText>
          <BoldText>How to use our website</BoldText>
          <BodyText>
            Check how many post-its you have remaining. This number resets everyday.
            Create a new post by clicking anywhere on the board that does not have a post-it.

            If you want to delete someone's post, click on their post and select <b>delete</b>.
          </BodyText>
        </AllText>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  background-image: linear-gradient(#FFFFFF, #003F91);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AllText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 20px;
`;

const BodyText = styled.p`
  font-size: 24px;
  margin: 10px 0;
`;

// This component is used to style the home page
const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#FFFFFF, #003F91);
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

// This component is used to style the bold text element
const BoldText = styled(Text)`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 2rem;
  text-align: center;
`;

export default AboutPage;