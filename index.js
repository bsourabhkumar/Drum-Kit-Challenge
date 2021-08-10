// Sound produced when button is clicked
var text;

// For click through Mouse
var numOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numOfDrumButtons; i++){
    
    // var text = document.querySelectorAll("button")[i].innerHTML;
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
                                 text = this.innerHTML;
                                 addSound(text);
                                 addAnimation(text);
                                });
    

}
// For keypress in keyboard
    for(var i=0; i<numOfDrumButtons; i++){
    
    // var text = document.querySelectorAll("button")[i].innerHTML;
    document.querySelectorAll(".drum")[i].addEventListener("keypress", function(evt){
                                 
                                 addSound(evt.key);
                                 addAnimation(evt.key);
                                });
  
}

// for Animation
function addAnimation(text){
    document.querySelector("."+text).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+text).classList.remove("pressed");}, 200);
}

// For Sound
function addSound(text){
   switch (text) {
       case "w":
           var tom1= new Audio("sounds/tom-1.mp3");
           tom1.play();
             break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
           
        break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
           
        break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
           
        break;
        case "j":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
           
        break; 
        case "k":
            var kickbass= new Audio("sounds/kick-bass.mp3");
            kickbass.play();
        break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        default: console.log("No button clicked");
        break;
   }
}