h1 = document.querySelector("h1");

function changeColour(color, delay, nextColorChange) {
  //argument - color, delay,nextColorChange
  setTimeout(() => {
    h1.style.color = color;
    nextColorChange();
  }, delay);
}

// setTimeout(() => {
//     h1.style.color ='red';
// },1000);

// setTimeout(() => {
//     h1.style.color ='orange';
// },2000);

// setTimeout(() => {
//     h1.style.color ='blue';
// },3000);

changeColour("red", 1000, () => {
  changeColour("blue", 2000, () => {
    changeColour("green", 3000, () => {
      changeColour("yellow", 4000);
    });
  });
});


//call back nesting - is called call back hell
