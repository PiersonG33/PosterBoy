import React, {useState} from "react";
import styled from "styled-components";

import { 
  Stack,
  Button
} from '@chakra-ui/react'

import {
  Input,
  FormControl,
  FormLabel
} from '@chakra-ui/react'

import { 
  PopoverArrow, 
  PopoverCloseButton, 
  PopoverHeader,  
  PopoverBody 
} from '@chakra-ui/react'

import SignUp from "./SignUp";

function LoginPopup() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
    console.log(setIsActive);
  };

  return (
    <div>
      <SignUpContainer>
        <SignUp style={{display: isActive ? 'none' : 'block'}}/>
      </SignUpContainer>
      <div style={{ color: 'black' }}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <center><b>Log In</b></center>
        </PopoverHeader>

        <PopoverBody>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type='email' />
            <FormLabel>Password</FormLabel>
            <Input type='password' />

            <Stack spacing={2} direction='row' align='center'>
              <Button
                mt={4}
                colorScheme='green'
                type='submit'
                isLoading={false}
              >
                Log in
              </Button>

              <Button
                mt={4}
                colorScheme='teal'
                type='submit'
                variant='link'
                as="a"
                onClick={handleClick}
                isLoading={false}
              >
                Sign up
              </Button>
            </Stack>
          </FormControl>

        </PopoverBody>
      </div>
    </div>
    );
};

export default LoginPopup;