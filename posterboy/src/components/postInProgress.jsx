import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import { Button } from '@chakra-ui/react';
import { PostIt } from './post-it.jsx';

export function PostInProgress({position, boardRef}) {

    const textInputRef = useRef(null); // Create a ref for the text input element
  
    useEffect(() => {
      // This function will be executed when the component mounts on the screen.
      textInputRef.current.focus(); 
      // Focus on the text input when the component mounts
      
    }, []); // The empty array [] as the second argument makes the effect run only once, on mount.
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const userText = textInputRef.current.innerText; // Access the user-entered text
  
      //console.log(userText);
  
      // Submit the stuff to the server.
  
      const BID = "1" // board id. set to dummy value of 1 here
  
      const options = { 
        method: "POST",
        json: JSON.stringify({
          message: userText,
          message_type: "post",
          userid: "<uid>",
          boardid: BID,
          color:'yellow',
          date: "DEFAULT",
          score: 1,
          x: position.left,
          y: position.top
        })
      };
  
      const url = `http://localhost:8000/api/getboard/${BID}/`;
  
  
      await fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data));
  
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

// Update the left and top CSS properties in PostItContainer
const PostItContainer = styled.div`
position: absolute;
left: ${props => props.left}px;
top: ${props => props.top}px;
z-index: 9;
`;

  export default PostInProgress;