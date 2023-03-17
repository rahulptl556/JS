
// document.addEventListener('click', function(){
//     console.log('I have clicked on the web page');
// });

// To use removeEventListner we need to create a function outside then pass it

// function eventListner(){
//     console.log('Hi this is me');
// }

// // addEventListner
// document.addEventListener('click',eventListner);

// // removeEventListner
// document.removeEventListener('click',eventListner);

// Document Fragment
const t1 = performance.now();

let fragment = document.createDocumentFragment();
 for(let i=0; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = 'This is para' + i;

    fragment.appendChild(para);
 }
 document.body.appendChild(fragment);

 const t2 = performance.now();
console.log('Time taken -> ' + (t2-t1) + 'ms');

const t3 = performance.now();

// Normal Method
let myDiv = document.createElement('div');
 for(let i=0; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = 'This is para' + i;

    myDiv.appendChild(para);
 }
 document.body.appendChild(myDiv);

 const t4 = performance.now();
console.log('Time taken -> ' + (t4-t3) + 'ms');

