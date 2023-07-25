import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";
import Board_Pic from "../assets/board_new.jpg";
import { PostItDone } from "./post-it.jsx";
import PostInProgress from "./postInProgress.jsx";

// const imageWidth = 2621;
// const imageHeight = 1805;

// dummy value:
const BID = "1";


class BoardCanvas extends React.Component {
  state = {
    postItInProgress: null,
    mouseIsDown: false,
    wasMoved: false,
    existingPosts: []
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
    const url = `http://localhost:8000/api/posts/${BID}/`;
    const options = { method: "GET" };

    await fetch(url, options)
      .then(response => console.log(response))
      .then(data => this.setState({
        existingPosts: data
      }));

    console.log("now posts:");
    console.log(this.state.existingPosts);
  }
  

  render() {
    const { postItInProgress } = this.state; // Update state key

    return (
      <BoardContainer 
        onMouseDown = {() => this.setState({mouseIsDown: true })}
        onMouseMove = {(event) => this.handleDrag(event) }
        onMouseUp   = {(event) => this.handleMouseUp(event) }
        onLoad   = {() => this.loadPosts() }
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

            {/* Render existing posts */}

            {this.state.existingPosts && this.state.existingPosts.length > 0 && this.state.existingPosts.map((post, index) => (
              <div key={index} style={{ position: 'absolute', left: post.left, top: post.top }}>
                {/* Render each post here, you might need to replace 'div' with the correct component */}
                <div>{post.title}</div>
                <div>{post.content}</div>
              </div>
            ))}

  
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