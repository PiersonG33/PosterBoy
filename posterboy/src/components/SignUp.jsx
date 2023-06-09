import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
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
      <SignUpContainer >
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
              <Heading fontSize={'4xl'} textAlign={'center'} color={'black'}>
                Sign up
              </Heading>
              <FormControl id="username" isRequired>
                <FormLabel color={'black'}> Username</FormLabel>
                <Input type="text" />
              </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel color={'black'}> Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={'black'}> Password</FormLabel>
              <InputGroup>
                <Input color={'black'} type={showPassword ? 'text' : 'password'} />
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
          </Stack>
        </Box>
      </SignUpContainer>
  );
}

// function Apple() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
//     script.async = true;
//     script.onload = () => {
//       window.AppleID.auth.init({
//         clientId: "[CLIENT_ID]",
//         scope: "[SCOPES]",
//         redirectURI: "[REDIRECT_URI]",
//         state: "[STATE]",
//         nonce: "[NONCE]",
//         usePopup: true
//       });
//     };
//     document.body.appendChild(script);
//   }, []);
// }


const SignUpContainer = styled.section`
  position: relative;
  z-index: 11;
  font-size: 12px;
  height: 70%;
  width: 30%;
  margin: auto;
  top: 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export default SignUp;