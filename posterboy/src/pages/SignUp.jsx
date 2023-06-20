import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  setShowPassword,
  HStack,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaEyeSlash, FaEye } from "react-icons/fa";


function SignUp() {

  const [showPassword, setShowPassword] = useState(false);

  return(
    <SignUpContainer>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <HStack spacing={0}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={0}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Get ready to move your fingers!
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                <FormControl id="username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" />
                </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={0}>
          
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <Apple></Apple>
              <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div>
            </Stack>
          </Box>
        </Stack>
      </HStack>
    </Flex>
    </SignUpContainer>
  );
}

function Apple() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
    script.async = true;
    script.onload = () => {
      window.AppleID.auth.init({
        clientId: "[CLIENT_ID]",
        scope: "[SCOPES]",
        redirectURI: "[REDIRECT_URI]",
        state: "[STATE]",
        nonce: "[NONCE]",
        usePopup: true
      });
    };
    document.body.appendChild(script);
  }, []);
}

// This component is used to style the home page
const SignUpContainer = styled.div`
  background-color: aliceblue;
  height: 500px;
`

export default SignUp;