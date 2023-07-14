import React from "react";
import styled from "styled-components";
import Board from "../components/board.jsx";

// This component represents the home page of the application
function BoardPage() {
  return(
    <BoardContainer>
      <CorkBoard>
        <Board/>
      </CorkBoard>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`

const CorkBoard = styled.div`
  height: 76vh;
  width: 100vw;
  background-color: #FFCF0070;
  text-align: center;
  justify-content: center;
`

export default BoardPage