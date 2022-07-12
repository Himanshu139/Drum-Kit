// for(let index = 0; index<7 ; index++)
var noOfButtons = document.querySelectorAll(".drum").length;
for (let index = 0; index < noOfButtons ; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",handleclick);
}
// if parenthesis are added in the above statement after handleclick, then this'll just be a normal function call, code inside the function will get executed no matter what
function handleclick()
{
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

// below is a decleration of anonymous function

document.addEventListener("keydown", function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});


// below is an alternative way of doing the same thing done in the above line of code. 


// document.addEventListener("keydown",handlePress);
// handlePress is a callback function
// function handlePress(event){
//     makesound(event.key);
// }
function makesound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(presentKey){
document.querySelector("."+presentKey).classList.add("pressed");
setTimeout(animation,100);
function animation(){
    document.querySelector("."+presentKey).classList.remove("pressed");
}
}