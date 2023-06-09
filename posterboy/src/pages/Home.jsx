import React from "react";
import styled from "styled-components";
import PostIt from './../components/post-it';

function Home() {
  return(
    <HomeContainer>
      <PostIt 
        title   = "Welcome to PosterBoy!" 
        content = "Click 'start' to begin!" 
        author  = "the PosterBoy Team"
      />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: aliceblue;
  height: 500px;
`

export default Home