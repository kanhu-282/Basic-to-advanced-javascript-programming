let.btn =document.querySelector("button");
btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("colour update");
});
function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.flour(Math.random()*255);
    let blue = Math.flour(Math.random()*255);
    let color = 'rgb(${red}, ${green}, ${blue})';
}