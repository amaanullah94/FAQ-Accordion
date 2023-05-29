import React from 'react';
import './App.css';
import Function from './Function'

function App() {
  return (
    <div className="App">
      <h1>Project 2: FAQ/Accordion</h1>

      <div className='main-container'>
        <h3>Frequently Asked Questions</h3>

        <div className="child-container">
          
          {array.map((value) => (
            <Function key={value.id} value={value} />

          ))}

        </div>


      </div>

    </div>
  );
}

const array = [
  {
    id: 1,
    title: 'Is this a good product?',
    info: 'hello i am row-1',

  },
  {
    id: 2,
    title: 'Is this a good product?',
    info: 'hello i am row-2'
  },

  {
    id: 3,
    title: 'Is this a good product?',
    info: 'hello I am row-3'
  }


]

export default App;
