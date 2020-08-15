import React from 'react';
import './App.css';

function App() {
  
  let foo = { name: 'tom', sex: 'm'};
  let bar = { name: 'tam', sex: 'f'};
  let baz = { name: 'tim', sex: 'm'};

  // 1.0 - When doing a console log, putting the variable inside {} will log the variable name and the content (JSON format)
  // console.log({foo, bar, baz}) prints  {foo: {…}, bar: {…}, baz: {…}} ## The {...} can be expanded to view the variable

  // 2.0 -  Console log variables with common properties in a table format
  // console.table([foo, bar, baz]) prints the object array in a nice table format


  const turtle ={ name: 'bob', legs: 4, diet: 'food'};

  //  Object Destructoring

  // 3.0 - The below code is not very clean because we are repeating animal a lot
  //If the animal object was more complicated, there would be even more animal typed out
  /*
  function feed (animal){
    return `Feed ${animal.name} eats ${animal.diet}`;
  }
  */ 

  // 3.1 - In this code, we only define the object keys that the function needs, so when we call the function, we only need to pass in the object that has the keys, 
  // and the function will extract those key values for us.
  /*
  function feed ({name, diet}){
    return `Feed ${name} eats ${diet}`;
  }
  */
  //3.2 - Because having {} in the defined function variables is not ideal, you can extract the needed values into a local variable
  function feed(animal){
    const {name, diet} = animal;
    return `Feed ${name} eats ${diet} easy mode`;
  }
  




  return (
    <div className="App">
      {/** 1.0 **/ }{(console.log({foo, bar, baz}))} 
      {/** 2.0 **/ }{(console.table([foo, bar, baz]))}
      {/** 3.2 **/ }{(console.log(feed(turtle)))}
      <h1>hello</h1>
    
    </div>
  );
}

export default App;
