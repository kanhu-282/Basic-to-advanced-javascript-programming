let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
   ul.appendChild(item);

   let delBtn = document.createElement("button");//new btn element create
   delBtn.innerText = "delete";//delete bhitara taext adda kariba
   delBtn.classList.add('delete');//delete calass
   item.appendChild(delBtn);//
   ul.appendChild(item);
    inp.value =""; // kama kariba kana naama jou in put daucha taka auto matic blank kariba

});

// delete buttom work

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         // console.log("elemenet deleted");
//         //parent ku axis kariba pai navigation use kariaba
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }