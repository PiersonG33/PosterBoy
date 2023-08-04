import React from "react";
import { Card, CardBody, CardFooter, Box, IconButton } from '@chakra-ui/react'
import { AiFillDelete } from "react-icons/ai";
import styled from "styled-components";

/*
  The color of the post-it. This could become an argument of the
  class rather than a constant in the future, for differently-colored
  post-its.
*/
const postItHue = "yellow";

// The color of the background.
const backgroundColor = "aliceblue";

// These are helper values that are light and dark versions of the color.
const lightColor = postItHue.concat(".100");
const darkColor = postItHue.concat(".200");
let width = "500px";
let height = "300px";

export function PostIt({ body, lowerLeft}) {
  return (
    <Card bg={lightColor} color="black" w={width} h={height}>
      <CardBody>{body}</CardBody>
      <CardFooter>
        {lowerLeft}
        <DogEar />
      </CardFooter>
    </Card>
  );
}

/* 
  This is the little dog-ear in the lower-right corner.
  It's kinda buggy, in that there is a shadow where there 
  shouldn't be in the corner, so if that can't be fixed,
  you can comment/remove the invocation of the code
  in PostIt and that'll get rid of the dog-ear.
*/
function DogEar() {return <div>
    <Box
      position="absolute"
      bottom={0} right={0}
      borderBottomWidth={50}
      borderLeftWidth={50}
      borderLeftColor={darkColor}
    />
    <Box
      position="absolute"
      bottom={0} right={0}
      borderTopWidth={50}
      borderTopColor="transparent"
      borderRightWidth={50}
      borderRightColor={backgroundColor}
    />
  </div>
};

function DeleteWidget({score}) {
  return <div>
    <IconButton
      icon={<AiFillDelete/>}
      onClick={() => console.error( "Can't do that yet!")}
    />
    <i> Score: <b>{score}</b></i>
  </div>;

}

// "content" is the text inside the post-it
export function PostItDone({author, content, position, score}) {


  return <PostItContainer
    left={position.left} top={position.top}
    onMouseDown={(event) => event.stopPropagation()}
    onMouseUp={(event) => event.stopPropagation()}
  ><PostIt 
    body={<div><b>{author}</b> {content}</div>}
    lowerLeft={<DeleteWidget score={score}/>}
  /></PostItContainer>;
}

// Update the left and top CSS properties in PostItContainer
export const PostItContainer = styled.div`
position: absolute;
left: ${props => props.left}px;
top: ${props => props.top}px;
z-index: 9;
`;
