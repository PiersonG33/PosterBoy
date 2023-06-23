import styled from "styled-components";
import React from "react";
import { Flex, Image } from "@chakra-ui/react";


function BoardCounter() {
  return (
    <CounterContainer>
      <Flex
        borderRadius='20px'
        p='20px'
        w={{ base: "315px", md: "345px" }}
        alignItems='center'
        direction='column'>
        <Flex flexDirection='column' mb='30px'>
          <Image
            src='https://i.ibb.co/B3gYTYs/Profile-Image.png'
            mx='auto'
            width='68px'
            height='68px'
            borderRadius='50%'
          />
          <HeaderText
            fontWeight='600'
            textAlign='center'
            fontSize='xl'>
            Username
          </HeaderText>
          <SecondaryText
            textAlign='center'
            fontSize='sm'
            fontWeight='500'>
            Level 10
          </SecondaryText>
        </Flex>
        <Flex justify='space-between' w='100%' px='36px'>
          <Flex flexDirection='column'>
            <HeaderText
              fontWeight='600'
              fontSize='xl'
              textAlign='center'>
              5
            </HeaderText>
            <SecondaryText fontWeight='500'>
              Post-Its Remaining
            </SecondaryText>
          </Flex>
          <Flex flexDirection='column'>
            <HeaderText
              fontWeight='600'
              fontSize='xl'
              textAlign='center'>
              7
            </HeaderText>
            <SecondaryText fontWeight='500'>
              Deletes Remaining
            </SecondaryText>
          </Flex>
        </Flex>
      </Flex>
    </CounterContainer>
  )
}

export default BoardCounter

const CounterContainer = styled.div`
  border-radius: 25px;
  background-color: white;
  margin: 20px 40px 0 0;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10;
`
const HeaderText = styled.h1`
  
`

const SecondaryText = styled.h2`
`