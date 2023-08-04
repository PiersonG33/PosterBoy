import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './styling/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

class AspectRatioImage extends React.Component {
  render() {
    const { src, ratio } = this.props;
    const containerStyle = {
      position: 'relative',
      width: '100%',
      paddingTop: `${ratio * 100}%`, // Set the padding top based on the ratio
    };
    const imageStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Maintain the aspect ratio by covering the container
    };

    return (
      <div style={containerStyle}>
        <img src={src} alt="Aspect Ratio" style={imageStyle} />
      </div>
    );
  }
}

export default AspectRatioImage;

