import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostItDone } from './../components/post-it';
import { Text, Box } from '@chakra-ui/react'
import pbMouseIconNormal from '../assets/pb_mouse_icon_normal.png';
import pbMouseIconClicked from '../assets/pb_mouse_icon_clicked.png';
import { COLORS } from '../colors.js'

const maroon_mid = '#A4508B';

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

  const backgroundGradient = `linear(to-l, #FFFFFF, ${COLORS.jonquil})`;

  return(
    <>
      <HomeContainer>
        <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient={backgroundGradient} margin-top='-50px'>
              <Text
                bgGradient={`linear-gradient(180deg, ${COLORS.marian_blue}, #003138)`}
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <h1>Want to Contribute?</h1>
              </Text>
            </Box>
        </div>
        {/* This component displays a post-it note with a welcome message */}
        <PostItContainer style={{ marginBottom: "100px" }}>
          <PostItDone
            author="@PosterBoy"
            content={
              <div>
                We're always looking for ways to improve our site. <br />
                If you have any suggestions or feedback, please let us know! Here are some ways you can contribute:
              </div>
            }
          />
        </PostItContainer>
        <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient={backgroundGradient} margin-top='-50px'>
              <Text
                bgGradient={`linear-gradient(180deg, ${COLORS.marian_blue}, #003138)`}
                bgClip='text'
                fontSize='3xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <h1>• Submit a bug report or feature request on our GitHub repository</h1>
              </Text>
            </Box>

            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient={backgroundGradient} margin='25px'>
              <Text
                bgGradient={`linear-gradient(180deg, ${COLORS.marian_blue}, #003138)`}
                bgClip='text'
                fontSize='3xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <h1>• Contribute code to our open-source project on GitHub</h1>
              </Text>
            </Box>

            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient={backgroundGradient} margin='25px'>
              <Text
                bgGradient={`linear-gradient(180deg, ${COLORS.marian_blue}, #003138)`}
                bgClip='text'
                fontSize='3xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <h1>• Spread the word about our site on social media</h1>
              </Text>
            </Box>
        </div>
        </HomeContainer>
        <SecondHomeContainer>
        <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient={backgroundGradient} margin-top='-50px'>
              <Text
                bgGradient={`linear-gradient(180deg, #5F0A87, ${maroon_mid})`}
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <h1>TBD</h1>
              </Text>
            </Box>
        </div>
        {/* This component displays a post-it note with a welcome message */}
        <PostItContainer style={{ marginBottom: "100px" }}>
          <PostItDone author="@PosterBoy" content="TBD"/>
        </PostItContainer>
      </SecondHomeContainer>
      <HomeContainer>
        <div>
            <Box boxShadow='dark-lg' p='6' rounded='md' bgGradient={backgroundGradient} margin-top='-50px'>
              <Text
                bgGradient={`linear-gradient(180deg, #FF0000, ${maroon_mid})`}
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                /*</Box>textShadow='0px 0px 0px #000000'*/
              >
                <h1>TBD</h1>
              </Text>
            </Box>
        </div>
        {/* This component displays a post-it note with a welcome message */}
        <PostItContainer style={{ marginBottom: "100px" }}>
          <PostItDone author="@PosterBoy" content="TBD"/>
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
  background-image: linear-gradient(#FFFFFF, #5da9e9);
  margin-top: 3em;
`;

const SecondHomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#5da9e9, #FFFFFF);
`;

// This component is used to style the post-it container
const PostItContainer = styled.div`
  margin-top: 5rem;
`;

export default Home;