import React from 'react';
import styled from "styled-components";

const AboutPage = () => {
  return (
    <AboutContainer>
      {/* This element displays a large, bold text element */}
      <div>
        <BoldText>
          <b>About us</b>
        </BoldText>
        <BodyText>
            On PosterBoy, you can create, delete, and view posts with a few clicks of a button.
        </BodyText>
      </div>
    </AboutContainer>
  );
}

// This component is used to style the home page
const AboutContainer = styled.div`
  background-color: aliceblue;
  height: 500px;
`

// This component is used to style the large, bold text element
const BoldText = styled.div`
  font-size: 56px;
  text-align: center;
  margin-top: 50px;
`;

// This component is used to style the large, bold text element
const BodyText = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export default AboutPage;