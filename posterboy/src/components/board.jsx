import React, { useState, useRef, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import styled from 'styled-components';
import Board_Pic from '../assets/board_new.jpg';
import PostInProgress from './postInProgress';
import {PostItDone} from './post-it';

const BID = '1';

function BoardCanvas() {
  const [postItInProgress, setPostItInProgress] = useState(null);
  const [mouseClickStartPosition, setMouseClickStartPosition] = useState(null);
  const [wasMoved, setWasMoved] = useState(false);
  const [existingPosts, setExistingPosts] = useState([]);

  const boardRef = useRef(null);

  // Handle mouse down event
  const handleMouseDown = (event) => {
    setMouseClickStartPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Handle mouse up event
  const handleMouseUp = (event) => {
    setMouseClickStartPosition(null);

    if (!wasMoved) {
      makePost(event);
    } else {
      setWasMoved(false);
    }
  };

  // Create a new post
  const makePost = (event) => {
    const boardRect = boardRef.current.getBoundingClientRect();
    const scaleX = boardRef.current.width / boardRect.width;
    const scaleY = boardRef.current.height / boardRect.height;
    const mouseX = (event.clientX - boardRect.left) * scaleX;
    const mouseY = (event.clientY - boardRect.top) * scaleY;
    const postItPosition = { left: mouseX, top: mouseY };
    setPostItInProgress(<PostInProgress position={postItPosition} boardRef={boardRef} BID={BID} />);
  };


  const dummyPosition = { left: 100, top: 100 };

  // Handle dragging to determine if it's a drag or click event
  const handleDrag = (event) => {
    const minDistance = 10;
    if (mouseClickStartPosition) {
      const { x: x1, y: y1 } = mouseClickStartPosition;
      const { clientX: x2, clientY: y2 } = event;
      const distance = Math.hypot(x2 - x1, y2 - y1);
      if (distance > minDistance) {
        setWasMoved(true);
      }
    }
  };

  // Load existing posts from API
  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {

    const url = `http://localhost:8000/api/posts/${BID}/`;
    const options = { method: 'GET' };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setExistingPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  return (
    <BoardContainer
      onMouseDown={handleMouseDown}
      onMouseMove={handleDrag}
      onMouseUp={handleMouseUp}
      onLoad={loadPosts}
    >
      <TransformWrapper centerOnInit={true} doubleClick={{ disabled: true }} limitToBounds={true}>
        <TransformComponent>
          {postItInProgress} {/* Render the postItInProgress component */}
          <BoardImage src={Board_Pic} alt="The Amazing Cork Board" ref={boardRef} />

          {/* Render existing posts */}
          {existingPosts.map((post, index) => (
            <div key={index} style={{ position: 'absolute', left: post.left, top: post.top }}>
              {/* Render each post here, you might need to replace 'div' with the correct component */}
              <div>{post.title}</div>
              <div>{post.content}</div>
            </div>
          ))}

          <PostItDone
            author='Joe Freedom'
            content='dummy'
            position={dummyPosition}
            score="3"
          />

        </TransformComponent>
      </TransformWrapper>
    </BoardContainer>
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

export default Board;