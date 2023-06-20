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
          <HeaderText>
            Username
          </HeaderText>
          <SecondaryText>
            Level 10
          </SecondaryText>
        </Flex>
        <Flex justify='space-between' w='100%' px='36px'>
          <Flex flexDirection='column'>
            <HeaderText>
              5
            </HeaderText>
            <SecondaryText>
              Post-Its Remaining
            </SecondaryText>
          </Flex>
          <Flex flexDirection='column'>
            <HeaderText>
              7
            </HeaderText>
            <SecondaryText>
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
  align-items: center;
  direction: column;
`
const HeaderText = styled.h1`
  font-weight: 700;
  color:#003F91;
`

const SecondaryText = styled.h2`
  font-weight: 500;
  font-size: smaller;
  color:#003F9190;
`