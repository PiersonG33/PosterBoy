import React, {useEffect, useRef} from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";
import Board_Pic from "../assets/board_new.jpg";
import PostIt from "./post-it.jsx";
import { Button } from '@chakra-ui/react';

// const imageWidth = 2621;
// const imageHeight = 1805;

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

  

  render() {
    const { postItInProgress } = this.state; // Update state key

    return (
      <BoardContainer 
        onMouseDown = {() => this.setState({mouseIsDown: true })}
        onMouseMove = {(event) => this.handleDrag(event) }
        onMouseUp   = {(event) => this.handleMouseUp(event) }
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

function PostInProgress({position, boardRef}) {

  const textInputRef = useRef(null); // Create a ref for the text input element

  useEffect(() => {
    // This function will be executed when the component mounts on the screen.
    textInputRef.current.focus(); // Focus on the text input when the component mounts
    
  }, []); // The empty array [] as the second argument makes the effect run only once, on mount.

  const handleSubmit = (event) => {
    event.preventDefault();
    const userText = textInputRef.current.innerText; // Access the user-entered text
    // Do something with the user-entered text

    // Additional logic or function calls can be added here

    // Now delete the post:
    boardRef.setState({
      postItInProgress: null
    });
  };



  return (
    <PostItContainer 
      left={position.left} top={position.top}
      onMouseDown={(event) => event.stopPropagation()}
      onMouseUp={(event) => event.stopPropagation()} // This could be the cause of some future buggy weirdness with mouse inputs not working.
    >

      <PostIt 
        body={
          <div>
            <div 
              id="textinput"
              ref={textInputRef}
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
        }
      />
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
  height: 76vh;
  width: 100%;
  position: relative;
`;

const BoardImage = styled.img`
  display: block;
  width: 100vw;
`;

// Update the left and top CSS properties in PostItContainer
const PostItContainer = styled.div`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  z-index: 9;
`;

export default Board;