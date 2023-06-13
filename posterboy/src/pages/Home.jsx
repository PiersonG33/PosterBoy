import React from "react";
import styled from "styled-components";
import PostIt from './../components/post-it';
import { Text } from '@chakra-ui/react'
import LogoAnimation from '../assets/logo_animation.mp4';

// This component represents the home page of the application
function Home() {
  return(
    <HomeContainer>
      {/* This element displays a looping video */}
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={LogoAnimation} type="video/mp4" />
        </video>
      </VideoContainer>
      {/* This element displays a large, bold text element */}
      <div>
        <BoldText>
          <b>Think it. Post it. Erase it.</b>
        </BoldText>
      </div>
      {/* This component displays a post-it note with a welcome message */}
      <PostItContainer>
        <PostIt content="<BoldText>@PosterBoy</BoldText> Hello from the open-source world! It's much nicer over here ;)" />
      </PostItContainer>
    </HomeContainer>
  );
}

// This component is used to style the home page
const HomeContainer = styled.div`
  background-color: aliceblue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// This component is used to style the post-it container
const PostItContainer = styled.div`
  margin-top: 2rem;
`;

// This component is used to style the video container
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 50px);
  overflow: hidden;

  video {
    width: 100%;
    height: auto;
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

export default Home;
