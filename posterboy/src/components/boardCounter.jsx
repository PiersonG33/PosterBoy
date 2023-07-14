import styled from "styled-components";
import React from "react";
import { 
  Flex,
  Image,
  PopoverArrow, 
  PopoverCloseButton,
  PopoverBody 
} from '@chakra-ui/react'

function BoardCounter(props) {
  return (
    <div style={{ color: 'black' }}>
    <PopoverArrow />
    <PopoverCloseButton />

    <PopoverBody>
      <Flex
        borderRadius='20px'
        p='20px'
        w={{ base: "215px", md: "245px" }}
        alignItems='center'
        direction='column'>
        <Flex flexDirection='column' mb='30px'>
          <Image
            src={props.pfp}
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
    </PopoverBody>
    </div>
  )
}

export default BoardCounter

const HeaderText = styled.h1`
  font-weight: 700;
  color:#003F91;
`

const SecondaryText = styled.h2`
  font-weight: 500;
  font-size: smaller;
  color:#003F9190;
`