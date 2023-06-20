import { Space } from 'react-zoomable-ui';

import Board_Pic from "../assets/board_stock_pic.png";
import Counter from "boardCounter.jsx";

const imageWidth = 2621;
const imageHeight = 1805;

function Board() {
  return (
    <BoardContainer>
      <Counter/>
      <div style={{ width: '100vw', height: '90vw', position: "relative" }}>
        <Space style={{ backgroundColor: '#FFCF0030' }} >
          <img src={Board_Pic} width={imageWidth} height={imageHeight} alt="The Amazing Cork Board" />
        </Space>
      </div>
    </BoardContainer>

  )
}

export default Board