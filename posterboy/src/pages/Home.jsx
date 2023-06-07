import React from "react";
import styled from "styled-components";

function Home() {
  return(
    <HomeContainer>
      <p>Hello!</p>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: aliceblue;
  height: 500px;
`

export default Home