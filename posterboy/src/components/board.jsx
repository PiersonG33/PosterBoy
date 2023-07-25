import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";
import Board_Pic from "../assets/board_new.jpg";
import PostInProgress from "./postInProgress.jsx";

// const imageWidth = 2621;
// const imageHeight = 1805;

const BID = "1";

class BoardCanvas extends React.Component {
  state = {
    postItInProgress: null,
    mouseIsDown: false,
    wasMoved: false,
  };

  handleMouseUp = (event) => {

    this.setState({
      mouseIsDown: false
    });

    if (this.state.wasMoved)
    {
      this.setState({
        wasMoved: false
      });
    }

    else
    {
      this.makePost(event);
    }
  }


  makePost = (event) => {
    const boardRect = this.boardRef.getBoundingClientRect();
  
    const scaleX = this.boardRef.width / boardRect.width;
    const scaleY = this.boardRef.height / boardRect.height;
  
    const mouseX = (event.clientX - boardRect.left) * scaleX;
    const mouseY = (event.clientY - boardRect.top) * scaleY;
  
    const postItPosition = { left: mouseX, top: mouseY };
    const postInProgress = <PostInProgress 
      position={postItPosition} 
      boardRef={this} 
    />; // Use JSX syntax
    this.setState({ postItInProgress: postInProgress }); // Update state key
  };

  handleDrag(event) {
    // Might want to have it so you need to move a
    // minimum distance before it counts as a drag
    if (this.state.mouseIsDown) {
      this.setState({
        wasMoved: true
      });
    }
  }

  async loadPosts() {
    const options = { 
      method: "GET"
    };

    const url = `http://localhost:8000/api/posts/${BID}/`;


    await  fetch(url, options)
      .then(response => response.json())
      .then(data => console.log(data));
  }
  

  render() {
    const { postItInProgress } = this.state; // Update state key

    return (
      <BoardContainer 
        onMouseDown = {() => this.setState({mouseIsDown: true })}
        onMouseMove = {(event) => this.handleDrag(event) }
        onMouseUp   = {(event) => this.handleMouseUp(event) }
        onComponentDidMount   = {() => this.loadPosts() }
      >
        <TransformWrapper 
          centerOnInit={true}
          doubleClick={{disabled: true}}
          limitToBounds={true}
        >
          <TransformComponent>
            {postItInProgress} {/* Render the postItInProgress component */}
            <BoardImage
              src={Board_Pic}
              alt="The Amazing Cork Board"
              ref={(ref) => (this.boardRef = ref)}
            />
            
            {/* Other post-its should render too */}
          </TransformComponent>
        </TransformWrapper>
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

const BoardContainer = styled.div`
  height: 76vh;
  width: 100%;
  position: relative;
`;

const BoardImage = styled.img`
  display: block;
  width: 100vw;
`;

export default Board;