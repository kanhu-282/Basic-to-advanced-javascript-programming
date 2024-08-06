// // async function greeat(){
// //     return "hello";
// // }

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) +1;
//             console.log(num);
//             return num;
//         }, 2000);
//     });
// }
// async function demo(){
//      await getNum();
//      getNum();
//      getNum();
// }

let url ="https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
    }catch(e){
        console.log("error - ",e);
    }
}
