import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

// const container = document.querySelector('#root');
// const root = ReactDOM.createRoot(container);

const info = [
  {
    id: 0,
    name: 'Hypertext Markup Language',
    description: 'Hypertext Markup Language (HTML) is the standard markup Language for creating webpages and web applications.With Cascading Style Sheets(CSS) and JavaScript, it forms a triad of conerstone technologies for the World Wide Web.'
  },
  {
    id: 1,
    name: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.CSS is a conernerstone technology of the World Wide Web alongside HTML and JavaScript.'
  },
  {
    id: 2,
    name: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification JavaScripthas curly- bracket syntax, dynamic typing, prototype - based object - orientation and first - class functions.'
  }
];

// root.render(<Accordion language={info}/>);
ReactDOM.render(<Accordion content={info} />, document.querySelector('#root'));
