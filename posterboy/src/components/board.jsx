import { Space } from 'react-zoomable-ui';

import Board_Pic from "../assets/board_stock_pic.png";

const imageWidth = 2621;
const imageHeight = 1805;

function Board() {
  return (
    <div style={{ width: '100vw', height: '100vw', position: "relative" }}>
      <Space
        onCreate={viewPort => {
          viewPort.setBounds({ x: [0, imageWidth], y: [0, imageHeight] });
          viewPort.camera.centerFitAreaIntoView({
            left: 0,
            top: 0,
            width: imageWidth,
            height: imageHeight
          });
        }}
      >
        <img src={Board_Pic} width={imageWidth} height={imageHeight} alt="The Amazing Cork Board" />
      </Space>
    </div>
  )
}

export default Board