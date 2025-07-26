// JavaScript source code

//Kristen Bauer 7-25-2025

"use strict"; //"use strict";


var num; //= Number(document.getElementById('num').value); //had to google value
console.log(num);

function add() {
  let addp = document.getElementById('add');
  let output = '';
  for (var i = 1; i < 11; i++) {
    var total = i + num;
    var addition = `${i} + ${num} = ${total}, \n`; //why no new line?
    output = output + addition;
  }
  addp.textContent= output;
}

function sub() {
  let addp = document.getElementById('sub');
  let output = '';
  let i = 0;
  while (i < 11) {
    var total = i - num;
    var subtraction = `${i} - ${num} = ${total}, \n`; //I googled this multiple times. Why no new line?
    output = output + subtraction;
    i++;
  }
  addp.textContent = output;
}

function mult() {
  let addp = document.getElementById('mult');
  let output = '';
  let i = 0;
  do {
    var total = i * num;
    var multiply = `${i} * ${num} = ${total}, \n`; //Why no new line!?
    output = output + multiply;
    i++;
  } while (i < 11)
  addp.textContent = output;
}

function div() {
  let addp = document.getElementById('div');
  let output = '';
  for (var i = 1; i < 11; i++) {
    var total = i / num;
    var addition = `${i} / ${num} = ${total.toFixed(2)}, \n`; //why no new line, hmm?
    output = output + addition;
  }
  addp.textContent = output;
}

function run() {
  num = Number(document.getElementById('num').value);
  add();
  sub();
  mult();
  div();
}

document.getElementById('cal').addEventListener('click', run);
//document.getElementById('cal').addEventListener('click', add);
//document.getElementById('cal').addEventListener('click', sub);
//document.getElementById('cal').addEventListener('click', mult);
//document.getElementById('cal').addEventListener('click', div);