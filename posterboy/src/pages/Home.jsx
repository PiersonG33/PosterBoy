import React from "react";
import styled from "styled-components";

// This component represents the home page of the application
function Home() {
  return(
    <HomeContainer>
      {/* This element displays a large, bold text element */}
      <div>
        <BoldText>
          <b>PosterBoy is the next evolution of online social interaction.</b>
        </BoldText>
      </div>
    </HomeContainer>
  );
}

// This component is used to style the home page
const HomeContainer = styled.div`
  background-color: aliceblue;
  height: 500px;
`

// This component is used to style the large, bold text element
const BoldText = styled.div`
  font-size: 72px;
  text-align: center;
  margin-top: 50px;
`;

export default Home