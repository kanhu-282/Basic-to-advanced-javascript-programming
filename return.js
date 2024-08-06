0
let str = ["hii","hello","bye","!"]

function concat(str){
    let result ="";

    for(let i= 0; i < str.length; i++){
        result += str[i];
        
    }
    console.log(result);
    return result;
   
}
concat(str);
// let arr = ["hii", "hello", "bye", "!"];

// function concat(arr) {
//     let result = "";

//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     console.log(result);
//     return result;
// }

// concat(arr);
