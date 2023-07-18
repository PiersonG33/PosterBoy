import React, {useState} from "react";
import styled from "styled-components";

import { 
  Stack,
  Button,
  Input,
  FormControl,
  FormLabel,
  PopoverArrow, 
  PopoverCloseButton, 
  PopoverHeader,  
  PopoverBody 
} from '@chakra-ui/react'

const LoginPopup = ({onChange}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    console.log(isActive);
    const newState = !isActive;
    setIsActive(newState);
    onChange(newState);
  };

  return (
    <LoginContainer>
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
  overflow: visible;
`

export default LoginPopup;