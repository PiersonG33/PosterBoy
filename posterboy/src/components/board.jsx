import { Space } from 'react-zoomable-ui';
import styled from "styled-components";
import React from 'react';
import Board_Pic from "../assets/board_new.jpg";
import PostIt from "./post-it.jsx";

const imageWidth = 2621;
const imageHeight = 1805;

class BoardCanvas extends React.Component {
  state = {
    postItPosition: null
  };

  handleClick = (event) => {
    const boardRect = this.boardRef.getBoundingClientRect();
    const mouseX = event.pageX - boardRect.left - window.scrollX;
    const mouseY = event.pageY - boardRect.top - window.scrollY;
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
              <PostIt />
            </PostItContainer>
          )}
        </Space>
      </BoardContainer>
    );
  }
}

function Board() {
  return (
    <BoardContainer>
      <BoardCanvas />
    </BoardContainer>
  );
}

export default Board;

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