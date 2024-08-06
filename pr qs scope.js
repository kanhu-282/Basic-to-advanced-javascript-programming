let greet = "hello"; //global scope
function changeGreet(){
    let greet = "namaste";//function scooe
    console.log(greet);
    function innerGreet(){
        console.log(greet);//lexical scope
    }
       innerGreet();
}
console.log(greet);
changeGreet();