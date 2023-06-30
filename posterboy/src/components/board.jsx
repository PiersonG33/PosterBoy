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
    postItPosition: null
  };

  handleClick = (event) => {
    const boardRect = this.boardRef.getBoundingClientRect();
    
    const scaleX = this.boardRef.width / boardRect.width,
     scaleY = this.boardRef.height / boardRect.height;  

    const mouseX = (event.clientX - boardRect.left)*scaleX;
    const mouseY = (event.clientY - boardRect.top)*scaleY;

    const postItPosition = { left: mouseX, top: mouseY };
    this.setState({ postItPosition });
  };

  render() {
    const { postItPosition } = this.state;

    return (
      <BoardContainer>
        <Space style={{ backgroundColor: '#FFCF0030' }}>
          <BoardImage
            src={Board_Pic}
            alt="The Amazing Cork Board"
            onClick={this.handleClick}
            ref={(ref) => (this.boardRef = ref)}
          />
          {postItPosition && (
            <PostItContainer left={postItPosition.left} top={postItPosition.top}>
              <PostInProgress position={postItPosition} />
            </PostItContainer>
          )}
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
    <PostIt body={
      <div>
        <div
          contentEditable="true"
          style={{
            padding: '10px',
            textAlign: 'left'
          }}
        >
          Start typing your post here...
        </div>
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
  height: 90vw;
  width: 100vw;
  position: relative;
`;

const BoardImage = styled.img`
  display: block;
  width: 100%;
`;

const PostItContainer = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  z-index: 9999;
`;

export default Board;