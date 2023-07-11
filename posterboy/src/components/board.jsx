import { Space } from 'react-zoomable-ui';
import styled from "styled-components";
import Board_Pic from "../assets/board_new.jpg";

const imageWidth = 2621;
const imageHeight = 1805;

function Board() {
  return (
    <BoardContainer>
      <div>
        <Space style={{ backgroundColor: '#FFCF0030' }} >
          <img src={Board_Pic} width={imageWidth} height={imageHeight} alt="The Amazing Cork Board" />
        </Space>
      </div>
    </BoardContainer>

  )
}

export default Board

const BoardContainer = styled.div`
  height: 90vh;
  width: 100vw;
  position: relative;
`;