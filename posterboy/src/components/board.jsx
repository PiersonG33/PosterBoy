import { Space } from 'react-zoomable-ui';
import styled from "styled-components";
import Board_Pic from "../assets/board_stock_pic.png";
import BoardCounter from './boardCounter';

const imageWidth = 2621;
const imageHeight = 1805;

function Board() {
  return (
    <BoardContainer>
      <BoardCounter/>
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
  height: 90vw;
  width: 100vw;
  position: relative;
`;