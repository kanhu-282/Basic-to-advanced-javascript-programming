// // console.log("hi thre!");
// setInterval(() =>{
//     console.log("Apna kanhu");
// },2000)
// console.log("welcome");

// how to stop setInterval
let id =setInterval(() =>{
    console.log("Apna kanhu");
},4000)
console.log(id);
clearInterval(id);

let id2 =setInterval(() =>{
    console.log("mo kanhu");
},4000)
console.log(id2);
clearInterval(id2);