let names =["kanhu","aman","Biku","asim","dixit","abc","Riku","pikunu","balia","kishan"];
//  let winner =names[0];
//  let runerup =names[1];
//  let secondRunnerup = names[2];

// destructuring
let[winner, runerup,  secondRunnerup,...other ] =names;
console.log(other);