import React from "react";
import { Card, CardBody, CardFooter, Box } from '@chakra-ui/react'

// "content" is the text inside the post-it
function PostIt(props) {
    return(
      <Card 
       bg="yellow.100" color="black"
       w="300px" h="300px"
      >
        <CardBody>
          {props.content}
        </CardBody>
        <CardFooter>
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
                borderLeftColor="yellow.200"
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
