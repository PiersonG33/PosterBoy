import { Space } from 'react-zoomable-ui';

import Board_Pic from "../assets/board_stock_pic.png";

const imageWidth = 2621;
const imageHeight = 1805;

function Board() {
  return (
    <div style={{ width: '100vw', height: '90vw', position: "relative" }}>
      <Space style={{ backgroundColor: '#FFCF0030' }} >
        <img src={Board_Pic} width={imageWidth} height={imageHeight} alt="The Amazing Cork Board" />
    </Space>

      {/* </Space> */}
    </div>
  )
}

export default Board