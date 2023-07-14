import { Space } from 'react-zoomable-ui';
import styled from "styled-components";
import React from 'react';
import Board_Pic from "../assets/board_new.jpg";
import PostIt from "./post-it.jsx";

import {
  Button
} from '@chakra-ui/react';

const imageWidth = 2621;
const imageHeight = 1805;

class BoardCanvas extends React.Component {
  state = {
    postItInProgress: null
  };

  handleClick = (event) => {
    const boardRect = this.boardRef.getBoundingClientRect();
  
    const scaleX = this.boardRef.width / boardRect.width;
    const scaleY = this.boardRef.height / boardRect.height;
  
    const mouseX = (event.clientX - boardRect.left) * scaleX;
    const mouseY = (event.clientY - boardRect.top) * scaleY;
  
    const postItPosition = { left: mouseX, top: mouseY };
    const p = <PostInProgress position={postItPosition} />; // Use JSX syntax
    this.setState({ postItInProgress: p }); // Update state key
  
    // ...
  
  };

  render() {
    const { postItInProgress } = this.state; // Update state key
  
    return (
      <BoardContainer>
        <Space style={{ backgroundColor: '#FFCF0030' }}>
          <BoardImage
            src={Board_Pic}
            alt="The Amazing Cork Board"
            onClick={this.handleClick}
            ref={(ref) => (this.boardRef = ref)}
          />
  
          {postItInProgress} {/* Render the postItInProgress component */}
  
          {/* Other post-its should render too */}
        </Space>
      </BoardContainer>
    );
  }
}

function PostInProgress({position}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const userText = event.target.previousSibling.innerText;
    // Do something with the user-entered text

    console.log(userText);
    // Additional logic or function calls can be added here
  };

  return (
    <PostItContainer left={position.left} top={position.top}>
      <PostIt body={
        <div>
          <div
            contentEditable="true"
            style={{
              padding: '10px',
              textAlign: 'left'
            }}
          />
      
          <Button
            onClick={handleSubmit}
            style={{
              display: 'block',
              margin: '10px 0',
              padding: '8px 16px',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Submit
          </Button>
        </div>
      }/>
    </PostItContainer>
  );
}


function Board() {
  return (
    <BoardContainer>
      <BoardCanvas />
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  height: 76vw;
  width: 100vw;
  position: relative;
`;

const BoardImage = styled.img`
  display: block;
  width: 100%;
`;

// Update the left and top CSS properties in PostItContainer
const PostItContainer = styled.div`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  z-index: 9999;
`;

export default Board;