import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
  document.getElementById('root')
);

try {
  const result = JSON.parse('');
  console.log(result);
} catch (err) {
  // 👇️ SyntaxError: Unexpected end of JSON input
  console.log('error', err);
}

reportWebVitals();
