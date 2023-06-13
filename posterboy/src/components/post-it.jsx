import React from "react";
import { Card, CardBody, CardHeader, CardFooter, Box } from '@chakra-ui/react'

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
const width = "500px";
const height = "300px";

// "content" is the text inside the post-it
function PostIt(props) {
    return(
      <Card 
       bg={lightColor} color="black"
       w={width} h={height}
      >
        {/* Show title of the Post in the header. */}
        <CardHeader> <b>{props.title}</b> </CardHeader>


        {/* Show content of the Post in the main section. */}
        <CardBody>  {props.content} </CardBody>
        
        <CardFooter>

            {/* The author of the post, shown in italics. */}
            <i>--&nbsp;{props.author}</i>

            {/* 
              This is the little dog-ear in the lower-right corner.
              It's kinda buggy, in that there is a shadow where there 
              shouldn't be in the corner, so if that can't be fixed,
              you can comment/remove this code and that'll get rid of
              the dog-ear.
              */}
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
        </CardFooter>
      </Card>
    );
  }

  export default PostIt
