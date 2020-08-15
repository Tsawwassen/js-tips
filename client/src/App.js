import React from 'react';
import './App.css';
import fetch from 'node-fetch';

function App() {

  ////////////////////////////////////////
  // Console Log examples
  ////////////////////////////////////////
  
  let foo = { name: 'tom', sex: 'm'};
  let bar = { name: 'tam', sex: 'f'};
  let baz = { name: 'tim', sex: 'm'};

  // 1.0 - When doing a console log, putting the variable inside {} will log the variable name and the content (JSON format)
  // console.log({foo, bar, baz}) prints  {foo: {…}, bar: {…}, baz: {…}} ## The {...} can be expanded to view the variable

  // 1.1 -  Console log variables with common properties in a table format
  // console.table([foo, bar, baz]) prints the object array in a nice table format

  ////////////////////////////////////////
  //  Object Destructoring examples
  ////////////////////////////////////////

  const turtle ={ name: 'bob', legs: 4, diet: 'food'};
  // 2.0 - The below code is not very clean because we are repeating animal a lot
  //If the animal object was more complicated, there would be even more animal typed out
  /*
  function feed (animal){
    return `Feed ${animal.name} eats ${animal.diet}`;
  }
  */ 

  // 2.1 - In this code, we only define the object keys that the function needs, so when we call the function, we only need to pass in the object that has the keys, 
  // and the function will extract those key values for us.
  /*
  function feed ({name, diet}){
    return `Feed ${name} eats ${diet}`;
  }
  */
  //2.2 - Because having {} in the defined function variables is not ideal, you can extract the needed values into a local variable
  function feed(animal){
    const {name, diet} = animal;
    return `Feed ${name} eats ${diet} easy mode`;
  }

  ////////////////////////////////////////
  //  Template Literal examples
  ////////////////////////////////////////

  //3.0 - Use a function as a template when outputting text

  let me = {name: "mitchell", age: 29};

  function myAge (str, age){
    let ageIf = age > 10 ? 'old' : 'young';
    return `${str[0]}${ageIf} at ${age}`;
  }

  let templaceLiteral = myAge`Mitchell is ${me.age}`;

  ////////////////////////////////////////
  // Spread Syntax examples 
  //   Merging objects together
  ////////////////////////////////////////

  const pik = {name: 'Pikachu'};
  const stats = { hp: 40, attack: 50, defense: 45};

  //Bad Code
  //  Creates an hp key on the pik object and assigns it the value of stats.hp
  //  this would be 3 lines of code to add hp, attack, and defense to the pik object
  //pik['hp'] = stats.hp

  // 4.0 - Good Code
  // The bad code is updating the original variable.
  // We can merge the two variables together into a new variable
  let spreadSyntax = {...pik, ...stats};

  // The spread Syntax can also be used to add values to an array
  let list = [ 1, 2, 3, 4];

  //Bad Code, one push per item added
  // list.push(5)

  //4.1 - Good Code
  list = [...list, 5, 6, 7,];

  //Note, you can place the original array (...list in the example above) in the start, middle, or end of the 'merge' depending how you want the new list to be ordered
  // Also, you can place a comma after the last element in the array and it will not give an error

  ////////////////////////////////////////
  // Loop examples
  ////////////////////////////////////////

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
  // 5.0 - Reduce takes total value, acc, and current value to sum up all elemets in an array
  let total = orders.reduce((acc, cur) => acc + cur );

  // 5.1 - Map will do something to every element in an array and return an array
  let withTax = orders.map(v => v * 2);

  // 5.2 - Filter will check every element in an array and return a filtered array (not the best definition)
  let highValue = orders.filter(v => v > 5);

  ////////////////////////////////////////
  //Async Await examples
  ////////////////////////////////////////

  const random = () => {
    return Promise.resolve(Math.random());
  }

  //Bad Code, using .then too much
  /*
    cont sumRandomAsyncNums = () => {
       let first;
       let second;
       let third; 

       return random()
        .then( v =>{
          first = v;
          return random();
        })
        .then( v =>{
          second = v;
          return random();
        })
        .then( v =>{
          third = v;
          return random();
        })
    }
  */
  //Good Code
  // 6.0 using async
  const sumRandomAsyncNums = async() => {
    let first = await random();
    let second = await random();
    let third = await random(); 

    return (`Result ${first + second + third}`);
  }

  ////////////////////////////////////////
  // Fetch example
  ////////////////////////////////////////
  // The main thing to remember is that fetch/then code is made to make async code read like sync code


  // 7.0 - Making a fetch request
const testFetch = () => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; //Prevents an error when doing the fetch request
  const url = "https://example.com"; //Endpoint
  fetch(proxyurl + url) // Fetching data from the server
    .then(contents => console.log("WELCOME!!!")) //This code is run after data has been fetched
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) //Catch any errors that could be thrown in the fetch or any then sections

  console.log("hello!!!"); //This log is printed before the WELCOME log

  //The main thread gets to the fetch line, and pushs it onto the callback thread, and then continues on the main thread and lob 'hello'
  // Once the main thread is done, it will go to the callback thread, fetch data, then log 'welcome'
}
  
  // 7.1 - Making a promise function
  // Putting the async keyword before the argument brackets will make a function return a promise object
  const getFruit = async(name) => {
    const fruit ={
      pineapple: 11,
      peach: 22,
      strawberry: 33
    }

    // Note, using the async keyword in the arguments does code magic to return a promise object
    // If we did not have the async keyword, we can still return a promise object
    //    return Promise.resolve(fruits[name]);
    return fruit[name];

  }

  //Async + await
  const makeSmoothie = async() => {

    //Instead of using multiple .then statements, we can use the await keyword.
    // The await keyword is like saying pause the execution of the code until getFruit returns a value
    const a = await getFruit('pineapple');
    const b = await getFruit('peach');
    const c = await getFruit('strawberry');

    //If we were to use .then chains, it would be difficult to use the promissed variables together
    // await resolves that problem
    // The code would look like this
    /**
      const makeSmoothie = () => {
        let a;
        return getFruit('pineapple')
              .then (v=> {
                v = a;
                return getFruit('strawberry')
              })
              .then (v => v + a)
      }

    **/

    return [a, b, c];

    //Second note,
    //The above makeSmoothie call is not ideal.
    //When using async/await, avoid pausing the event loop when it does not need to be paused.
    // Example
    /*
    try{
      const a =  getFruit('pineapple');
      const b =  getFruit('peach');
      const c =  getFruit('strawberry');

      const smoothie = await Promise.all([a, b, c]);
      return smoothie;
    } catch(err){
      console.log(err);
    }

    */
    // Promise.all allows all promises in the array to run concurrently, and allow the promise to be at that index in the array

    //Another benefit of async/await is we can put all async functions in a try/catch block
    //By using try/catch blocks, we can dictate how the user of this promise's code will flow if an error is thrown in this function
    // ie in the catch block, if we return a value, the user's code will continue with the next .then call, but if we throw an error, the users .catch block will start executing
    // TLDR : return is like ignoring the error and sending a new value, and throwing is stopping the .then chain and going to the .catch code


  }

  const printAsyncAwait = () => {
    return makeSmoothie().then(console.log);
  }

  // 7.2 - Using async/await loop
  const smoothieLoop = () => {
    const fruits = ['pineapple', 'peach','strawberry', ];

    const smoothie = fruits.map(v => getFruit(v));

    const fruitLoop = async() => {
      for await (const s of smoothie){
        console.log(`Inside fruitLoop ${s}`);
      }
    }

    fruitLoop(); 
    return "hello";
  }



  // 7.3 - Using async/await condition
  const fruitInspection = async() => {
    if(await getFruit('peach') === 22){
      return "You have a peach";
    } else{ 
      return "You do not have a peach";
    }
  }

  const fruitIf = () => {
     fruitInspection()
     .then(v => console.log(v));
  }

  return (
    <div className="App">
      {/** 1.0 **/ }{(console.log({foo, bar, baz}))} 
      {/** 1.1 **/ }{(console.table([foo, bar, baz]))}
      {/** 2.2 **/ }{(console.log(feed(turtle)))}
      {/** 3.0 **/ }{(console.log(templaceLiteral))}
      {/** 4.0 **/ }{(console.log(spreadSyntax))}
      {/** 4.1 **/ }{(console.log(list))}
      {/** 5.0 **/ }{(console.log(total))}
      {/** 5.1 **/ }{(console.log(withTax))}
      {/** 5.2 **/ }{(console.log(highValue))}
      {/** 6.0 **/ }{(console.log(sumRandomAsyncNums()))}
      {/** 7.0 **/ }{(console.log(testFetch()))}
      {/** 7.1 **/ }{(console.log(printAsyncAwait()))}
      {/** 7.2 **/ }{(console.log(smoothieLoop()))}
      {/** 7.3 **/ }{(console.log(fruitIf()))}
      <h1>hello</h1>
    
    </div>
  );
}
/**
  Key things to remember
    - If you are going to have an await call inside a function, that function needs to be async
    
**/

export default App;
