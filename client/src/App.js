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

  // Spread Syntax - Merge objects together

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


  //Loops
  let orders = [4, 5, 6];

  //Bad Code
  /*
  let total = 0;
  let withTax = [];
  let highValue = [];
  for ( STANDARD LOOP ){

    //Reduce
    total += orders[i];

    //Map
    withTax.push(orders[i] * 1.1);

    //Filter
    if(orders[i] > 5){
      highValue.push(orders[i]);
    }
  }
  */

  // Good Code
  // 6.0 - Reduce takes total value, acc, and current value to sum up all elemets in an array
  let total = orders.reduce((acc, cur) => acc + cur );

  // 6.1 - Map will do something to every element in an array and return an array
  let withTax = orders.map(v => v * 2);

  //6.2 - Filter will check every element in an array and return a filtered array (not the best definition)
  let highValue = orders.filter(v => v > 5);

  




  return (
    <div className="App">
      {/** 1.0 **/ }{(console.log({foo, bar, baz}))} 
      {/** 2.0 **/ }{(console.table([foo, bar, baz]))}
      {/** 3.2 **/ }{(console.log(feed(turtle)))}
      {/** 4.0 **/ }{(console.log(templaceLiteral))}
      {/** 5.0 **/ }{(console.log(spreadSyntax))}
      {/** 5.1 **/ }{(console.log(list))}
      {/** 6.0 **/ }{(console.log(total))}
      {/** 6.1 **/ }{(console.log(withTax))}
      {/** 6.2 **/ }{(console.log(highValue))}
      <h1>hello</h1>
    
    </div>
  );
}

export default App;
