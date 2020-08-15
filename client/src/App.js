import React from 'react';
import './App.css';

function App() {


  
  let foo = { name: 'tom', sex: 'm'};
  let bar = { name: 'tam', sex: 'f'};
  let baz = { name: 'tim', sex: 'm'};

  //When doing a console log, putting the variable inside {} will log the variable name and the content (JSON format)
  // console.log({foo, bar, baz}) prints  {foo: {…}, bar: {…}, baz: {…}} ## The {...} can be expanded to view the variable

  //Console log variables with common properties in a table format
  // console.table([foo, bar, baz])

  return (
    <div className="App">
      {(console.log({foo, bar, baz}))} 
      {(console.table([foo, bar, baz]))}
      <h1>hello</h1>
    
    </div>
  );
}

export default App;
