import React, { useEffect, useRef, useState } from 'react';
import { Button, Tooltip } from '@chakra-ui/react';
import { PostIt, PostItContainer } from './post-it.jsx';

export function PostInProgress({position, boardRef, BID}) {

    const maxLines = 5; // Set the maximum number of lines here
    const textInputRef = useRef(null); // Create a ref for the text input element
    const lineHeight = 1.2; // Set the line height in em units, same as in maxHeight

    const maxChars = 200;

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Should also display some sort of clarification that you can't do that.
      }
    };

    useEffect(() => {
      // Focus on the text input when the component mounts onto the screen.
      textInputRef.current.focus();       
    }, []); // The empty array [] as the second argument makes the effect run only once, on mount.

    const handleSubmit = async (event) => {
      event.preventDefault();
      const userText = textInputRef.current.innerText.trim(); // Access the user-entered text
  
      //console.log(userText);
  
      // Submit the stuff to the server.
  
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
  
      const url = `http://localhost:8000/api/posts/${BID}/`;
  
      await fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data));
  
      // Now delete the post:
      boardRef.setState({ postItInProgress: null });

      boardRef.loadPosts();
    };
  
    
  
  const [buttonDisable, setButtonDisable] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <PostItContainer
      left={position.left} top={position.top}
      onMouseDown={(event) => event.stopPropagation()}
      onMouseUp={(event) => event.stopPropagation()}
    >

      <PostIt
        body={
          <div>
            <div
              id="textinput"
              ref={textInputRef}
              contentEditable="true"
              onInput={() => {
                const fullText = textInputRef.current.innerText;
                const userText = fullText.trim();
                setButtonDisable(userText.length === 0 || fullText.length > maxChars );
              }}
              onKeyDown={(event) => handleKeyDown(event)}
              style={{
                padding: '10px',
                textAlign: 'left',
                maxHeight: `${maxLines * lineHeight}em`,
              }}
            />

            <Button
              onClick={handleSubmit}
              onMouseOver={() => setShowTooltip(true)}
              onMouseOut={() => setShowTooltip(false)}
              isDisabled={buttonDisable}
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
              <Tooltip
              label="You need to enter text to make a post!"
              isOpen={showTooltip && buttonDisable} // Show tooltip only on hover or click when the button is disabled
              placement="top"
              closeDelay={0}
              bg="red.500"
              color="white"
              hasArrow
              >
                <span>
                  Submit
                </span>
              </Tooltip>
                
            </Button>
            
          </div>
        }
      />
    </PostItContainer>
  );
  }


  export default PostInProgress;