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

  //  Template Literals
  //4.0 - Use a function as a template when outputting text

  let me = {name: "mitchell", age: 29};

  function myAge (str, age){
    let ageIf = age > 10 ? 'old' : 'young';
    return `${str[0]}${ageIf} at ${age}`;
  }

  let templaceLiteral = myAge`Mitchell is ${me.age}`;

  // Spread Syntax
  //  Merge objects together

  const pik = {name: 'Pikachu'};
  const stats = { hp: 40, attack: 50, defense: 45};

  //Bad Code
  //  Creates an hp key on the pik object and assigns it the value of stats.hp
  //  this would be 3 lines of code to add hp, attack, and defense to the pik object
  //pik['hp'] = stats.hp

  // 5.0 - Good Code
  // The bad code is updating the original variable.
  // We can merge the two variables together into a new variable
  let spreadSyntax = {...pik, ...stats};

  // The spread Syntax can also be used to add values to an array
  let list = [ 1, 2, 3, 4];

  //Bad Code, one push per item added
  // list.push(5)

  //5.1 - Good Code
  list = [...list, 5, 6, 7,];

  //Note, you can place the original array (...list in the example above) in the start, middle, or end of the 'merge' depending how you want the new list to be ordered
  // Also, you can place a comma after the last element in the array and it will not give an error


  




  return (
    <div className="App">
      {/** 1.0 **/ }{(console.log({foo, bar, baz}))} 
      {/** 2.0 **/ }{(console.table([foo, bar, baz]))}
      {/** 3.2 **/ }{(console.log(feed(turtle)))}
      {/** 4.0 **/ }{(console.log(templaceLiteral))}
      {/** 5.0 **/ }{(console.log(spreadSyntax))}
      {/** 5.1 **/ }{(console.log(list))}
      <h1>hello</h1>
    
    </div>
  );
}

export default App;
