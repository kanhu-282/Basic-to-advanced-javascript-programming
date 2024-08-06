function sum(...args){
    for(let i=0; i< args.length;i++){
        console.log("you have us: ",args[i]);
    }
}
function min(){
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1);
}