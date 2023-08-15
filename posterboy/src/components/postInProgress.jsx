import React, { useEffect, useRef, useState } from 'react';
import { Button, Tooltip } from '@chakra-ui/react';
import { PostIt, PostItContainer } from './post-it.jsx';

const lineHeight = 1.2; // Set the line height in em units, same as in maxHeight
const maxLines = 5; // Set the maximum number of lines here
const maxChars = 150;

export function PostInProgress({position, onSubmit, BID}) {

  
    const [buttonDisable, setButtonDisable] = useState(true);
    const [showTooltip, setShowTooltip] = useState(false);
    const [showEnterWarning, setShowEnterWarning] = useState(false);
    const [showCharLimitWarning, setShowCharLimitWarning] = useState(false);

    const textInputRef = useRef(null); // Create a ref for the text input element
  

    const handleKeyDown = (event) => {
      const fullText = textInputRef.current.innerText;
      if (fullText.length >= maxChars && event.key !== 'Delete' && event.key !== 'Backspace')
      {
        event.preventDefault();
        setShowCharLimitWarning(true); // Display some sort of clarification that you can't do that.
        setTimeout(() => setShowCharLimitWarning(false), 2000); // Hide the warning after 2 seconds
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        setShowEnterWarning(true); // Display some sort of clarification that you can't do that.
        setTimeout(() => setShowEnterWarning(false), 2000); // Hide the warning after 2 seconds
      }
    };

    useEffect(() => {
      // Focus on the text input when the component mounts onto the screen.
      textInputRef.current.focus();       
    }, []); // The empty array [] as the second argument makes the effect run only once, on mount.

    const handleSubmit = async (event) => {
      event.preventDefault();
      const userText = textInputRef.current.innerText.trim(); // Access the user-entered text
      
      // Submit the stuff to the server.
      const options = { 
        method: "POST",
        body: JSON.stringify({
          message: userText,
          message_type: 1,
          userid: 3,
          boardid: BID,
          color: 100,
          score: 1,
          x: position.left,
          y: position.top
        })
      };
      const url = `http://localhost:8000/api/posts/${BID}/`;
  
      await fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data));
  
      //Now have the board handle things
      onSubmit();
    };

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
                const passedCharacterLimit = (fullText.length > maxChars);

                setButtonDisable(false);

                if (passedCharacterLimit) {
                  textInputRef.current.innerText = fullText.substring(0, maxChars);
                }
                else if (userText.length === 0) {
                  setButtonDisable(true);
                }
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
                <span>Submit</span>
              </Tooltip>
                
            </Button>
            {showEnterWarning && (
              <div style={{ color: 'red', marginTop: '5px' }}><i>Posts must be one paragraph only.</i></div>
            )}
            {showCharLimitWarning && (
              <div style={{ color: 'red', marginTop: '5px' }}><i>You hit the character limit lol.</i></div>
            )}
            
          </div>
        }
      />
    </PostItContainer>
  );
  }

  export default PostInProgress;