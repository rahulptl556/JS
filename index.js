
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

/*
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
*/

// setTimeout Code 
/*
   function name (){
      console.log('Hi');
   }

   setTimeout( function() {
      console.log('hello');
   }, 4000);
*/

         // ASYNC 
/*
   setTimeout(function(){
      console.log("third");
   },3000)

   function first(){
      console.log("First");
   }
   first();

   console.log("second");
*/

                  // Promises 
/*
   let firstPromise = new Promise(function(resolve,reject){
      setTimeout(function(){
         console.log("Hi Im inside the promise");
      },5000);

      resolve();
   // reject(new Error("sirji error aa rahe h"));
   })
*/

           // then() & catch() method
/*
   let p = new Promise(function(resolve,reject){
      setTimeout(function(){
         console.log("This is me");
      },3000);
      //resolve(912313);
      reject(new Error("sirji error aa rahe h"));
   })

   p.then((value) => {console.log(value)}, (error) => {console.log("Recieved Errors")});

   //p.catch((error) => {console.log("Recieved an error")});

   console.log("Hello");
*/

        // Playing with 2 promises
/*
   let p1 = new Promise(function(resolve,reject){
      setTimeout(() => {console.log("Promise1 Started")},2000 );
      resolve();
   })

   let output = p1.then(() => {
      let p2 = new Promise(function(resolve,reject){
         setTimeout(() => {console.log("Promise2 Started")},3000 );
         resolve("wada 2 resolved")
      });
      return p2;
   });

   output.then((value => {console.log(value)}));
*/

      //ASYNC Function
// async function abcd(){
//    return 7;
// }
// console.log(abcd)

//ASYNC AWAIT

// async function weather(){
   
//    let delhi = new Promise((resolve,reject) => {
//       setTimeout(() => {
//          resolve("Delhi is Hot")
//       },2000);
//    })
   
      
//    let hyd = new Promise((resolve,reject) => {
//       setTimeout(() => {
//          resolve("Hyd is cold")
//       },4000);
//    })

//    let dM =  delhi;
//    let hM = await hyd;

//    return [dM,hM];

// }

// CLOSURE

// function outer(){
//    console.log("Hi");
//    let a = 5;
   
//    function inner(){
//       let a = 3;
//       console.log(a);
//       inner1()
//          function inner1(){
//             let a = 7;
//             console.log(a);
//             inner2()
//                function inner2(){
//                   console.log(a);
//                }
//          }
//    }
//    return inner();
// }
// outer();

