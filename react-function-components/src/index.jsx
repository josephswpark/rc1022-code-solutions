import React from 'react';
import ReactDom from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

const button = document.querySelector('#root');
const root = ReactDom.createRoot(button);
root.render(CustomButton());
