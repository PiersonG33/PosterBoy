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
    setIsActive(isActive => !isActive);
    console.log(isActive);
  };

  return (
    <LoginContainer>
      <WindowView style={{display: isActive ? 'block' : 'none'}}>
        <Button onClick={handleClick}>X</Button>
        <SignUp/>
      </WindowView>
      <div style={{ color: 'black'}}>
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
    </LoginContainer>
    );
};

const LoginContainer = styled.div`
`

const WindowView = styled.div`
  position: fixed;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0,0.3);
`

export default LoginPopup;