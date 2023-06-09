import React from "react";
import styled from "styled-components";
import PostIt from './../components/post-it';
import { Text } from '@chakra-ui/react'

const BoldText = styled.div`
  font-size: 72px;
  text-align: center;
  margin-top: 50px;
`;

function Home() {
  return(
    <HomeContainer>
      <div>
        <BoldText>
          <b>PosterBoy is the next evolution of online social interactions.</b>
        </BoldText>
      </div>
      <PostIt content="Welcome to PosterBoy!" />
    </HomeContainer>
    
  );
}

const HomeContainer = styled.div`
  background-color: aliceblue;
  height: 500px;
`

export default Home