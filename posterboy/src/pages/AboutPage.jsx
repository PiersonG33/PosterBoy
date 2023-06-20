import React from 'react';
import styled from "styled-components";

const AboutPage = () => {
  return (
    <AboutContainer>
      {/* This element displays a large, bold text element */}
        <AllText>
          <BoldText>
            <b>About PosterBoy</b>
          </BoldText>
          <BodyText>
              On PosterBoy, you can create, delete, and view posts with a few clicks of a button.
              Write your ideas on a post-it and share it with the community.
              You only have a certain number of post-its per day so be mindful about what you write.
              Want to be a menace? Take someone else's post-it off the discussion board.
              Again, you only have a certain number of deletes per day so use with caution!
          </BodyText>
          <BodyText>
              What makes PosterBoy different than any other social media site?
          </BodyText>
          <BodyText>
              We're just better!
          </BodyText>
        </AllText>
    </AboutContainer>
  );
}

// This component is used to style the home page
const AboutContainer = styled.div`
  background-color: aliceblue;
  align-items: center;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
`

const AllText = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 70%;
`

// This component is used to style the large, bold text element
const BoldText = styled.div`
  font-size: 56px;
  text-align: center;
  color: #003F91;
`;

// This component is used to style the large, bold text element
const BodyText = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export default AboutPage;