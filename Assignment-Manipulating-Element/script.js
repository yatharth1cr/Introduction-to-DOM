/*
Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)
*/

// Your code goes here
function createInputElm(labels, type = 'text') {
  let label = document.createElement('label');
  let input = document.createElement('input');
  input.setAttribute('type', type);
  label.append(input);
  return label;
}
console.log(createInputElm());

// TEST
console.log(createInputElm('Your name'), 1); //<label>Your name: <input type="text"></label>
console.log(createInputElm('Your age', 'number'), 1); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`
// Your code goes here
function createInputEl(labels, type = 'text') {
  return `<label> ${labels} <input type = ${type}> </label>`;
}
// TEST
console.log(createInputEl('Your name'), 2); //<label>Your name: <input type="text"></label>
console.log(createInputEl('Your age', 'number'), 2); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(arr = []) {
  let ul = document.createElement('ul');
  arr.forEach((el) => {
    let li = document.createElement('li');
    li.innerText = el;
    ul.append(li);
  });
  return ul;
  console.log(ul);
}
//TEST
console.log(createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']), 3);
console.log(createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']), 3);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
      <p>Learn DOM</p>
      <input type="checkbox" checked name="" id="">
      <span>X</span>
    </li>
  </ul>
  */
// Your code goes here
function createTodoList(arr = []) {}

// TEST
console.log(
  createTodoList(
    [
      { name: 'Learn DOM', isDone: false },
      { name: 'Learn JS', isDone: true },
    ],
    4
  )
);
console.log(
  createTodoList(
    [
      { name: 'Learn DOM', isDone: false },
      { name: 'Learn React', isDone: true },
      { name: 'Learn JS', isDone: true },
    ],
    4
  )
);
