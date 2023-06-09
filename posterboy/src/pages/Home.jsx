import React from "react";
import styled from "styled-components";
import PostIt from './../components/post-it';

function Home() {
  return(
    <HomeContainer>

      {/* This post-it is here for debugging and messing around with the formatting. */}
      <PostIt 
        title   = "Welcome to PosterBoy!" 
        content = "Posterboy is the website of the future. All other websites are run by out-of-touch boomers. Join now, or be left behind! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
        author  = "PosterBoy Team"
      />
      
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: aliceblue;
  height: 500px;
`

export default Home