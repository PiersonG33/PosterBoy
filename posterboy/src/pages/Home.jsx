import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostIt from './../components/post-it';
import { Text } from '@chakra-ui/react'
import LogoAnimation from '../assets/logo_animation.mp4';
import pbMouseIconNormal from '../assets/pb_mouse_icon_normal.png';
import pbMouseIconClicked from '../assets/pb_mouse_icon_clicked.png';

// This component represents the home page of the application
function Home() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.width = "32px";
    cursor.style.height = "32px";
    cursor.style.backgroundImage = `url(${isClicked ? pbMouseIconClicked : pbMouseIconNormal})`;
    cursor.style.backgroundSize = "cover";
    cursor.style.position = "absolute";
    cursor.style.pointerEvents = "none";
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
        <PostIt author="@PosterBoy" content="Hello from the open-source world! It's much nicer over here ;)" />
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
`;

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