import React from "react";
import { Card, CardBody, CardFooter, Box } from '@chakra-ui/react'

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

function PostIt({ body }) {
  return (
    <Card bg={lightColor} color="black" w={width} h={height}>
      <CardBody>{body}</CardBody>
      <CardFooter>
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
      borderLeftColor={darkColor}/>
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

  export default PostIt
