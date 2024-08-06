const student ={
    name:"kanhu",
    age:25,
    class:12,
    subjects:["Html","css","javascript","react js"],
    username:"kanhu@123",
    password:"abcd"
};
// let username =student.username;
// let password=student.password;
// console.log(username);


// destructuring

let{username, password,...other}=student;
console.log(other);