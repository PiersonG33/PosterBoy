import React from "react";
import { Card, CardBody, CardFooter, Box } from '@chakra-ui/react'

// The color of the post-it. This could become an argument of the class rather than a constant in the future,
// for differently-colored post-its.
const postItHue = "yellow";

// These are helper functions to generate light and dark variations of the color.
function lightColor({hue})
{ return postItHue.concat(".100"); }

function darkColor({hue})
{ return postItHue.concat(".100"); }

// "content" is the text inside the post-it
function PostIt(props) {
    return(
      <Card 
       bg={lightColor({postItHue})} color="black"
       w="500px" h="300px"
      >
        {/* Show content of the Post in the main section. */}
        <CardBody>  {props.content} </CardBody>
        <CardFooter>

            {/* The author of the post, shown in italics. */}
            <i>-- {props.author}</i>

            {/* 
              This is the little dog-ear in the lower-right corner.
              It's kinda buggy, in that there is a shadow where there 
              shouldn't be in the corner, so if that can't be fixed,
              you can comment/remove this code and that'll get rid of
              the dog-ear.
              */}
            <Box
                position="absolute"
                bottom={0}
                right={0}
                borderBottomWidth={50}
                borderBottomColor="transparent"
                borderBottomStyle="solid"
                borderLeftWidth={50}
                borderLeftColor={darkColor({postItHue})}
                borderLeftStyle="solid"
            />
            <Box
                position="absolute"
                bottom={0}
                right={0}
                borderTopWidth={50}
                borderTopColor="transparent"
                borderTopStyle="solid"
                borderRightWidth={50}
                borderRightColor="aliceblue"
                borderRightStyle="solid"
            />
        </CardFooter>
      </Card>
    );
  }

  export default PostIt
