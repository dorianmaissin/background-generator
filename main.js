let colorOne = document.querySelector("#firstColor");
let colorTwo = document.querySelector("#secondColor");
const randomBtn = document.querySelector("#randomColor");
const background = document.querySelector("body");
const leftArrow = document.querySelector("#leftArrow")
const topArrow = document.querySelector("#topArrow")
const rightArrow = document.querySelector("#rightArrow")
const bottomArrow = document.querySelector("#bottomArrow")
const resultDisplay = document.querySelector("h3")
let a,b,c,d,e,f   
let rgbaOne,rgbaTwo
let rgbaOneValue,rgbaTwoValue

function apply(first, second) {
     background.style.backgroundImage = "linear-gradient(to right, " + first.value + ", " + second.value + ")";
     rgbaOne = first.value
     rgbaTwo = second.value
     resultDisplay.innerHTML ="linear-gradient (to right, " + first.value + ", " + second.value + ")";
}

function randomLinear(){
    a = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    d = Math.floor(Math.random() * 256);
    e = Math.floor(Math.random() * 256);
    f = Math.floor(Math.random() * 256);
    rgbaOne = "rgb(" + a + "," + b + "," + c + ")";
    rgbaTwo = "rgb(" + d + "," + e + "," + f + ")";
    background.style.backgroundImage = "linear-gradient(to right, " + rgbaOne + ", " + rgbaTwo + ")";
    colorOne.value = rgbaOneValue
    colorTwo.value = rgbaTwoValue
    resultDisplay.innerHTML = "linear-gradient (to right, " + rgbaOne + ", " + rgbaTwo + ")";
}

function swipDirection(direction){
    background.style.backgroundImage = "linear-gradient(to " + direction + ", " + rgbaOne + ", " + rgbaTwo + ")";
    resultDisplay.innerHTML =  "linear-gradient(to " + direction + ", " + rgbaOne + ", " + rgbaTwo + ")"  
}

colorOne.addEventListener('input', function() {
    apply(colorOne,colorTwo);
});
colorTwo.addEventListener('input', function() {
    apply(colorOne,colorTwo);
});

topArrow.addEventListener('click', function(){
    swipDirection('top')
})
bottomArrow.addEventListener('click', function(){
    swipDirection('bottom')
})
leftArrow.addEventListener('click', function(){
    swipDirection('left')
})
rightArrow.addEventListener('click', function(){
    swipDirection('right')
})

randomBtn.addEventListener('click',randomLinear)


