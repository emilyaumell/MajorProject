// code adapted from: https://github.com/Beat0154/FlappyBird
// I'm sorry for this mess, I tried to do my best with adapting the code from the tutorial above
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

// randomizes the hole in each block 
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*70)+10);
    hole.style.top = random + "vh";
    counter++;
});

// sets game over when character touches top/side/bottom of blocks and holes
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  var cTop = -(500-characterTop);
  
  // running score for each block passing
  document.getElementById("score").innerHTML = counter;
  
  // sets alert for the score and game over/restart
   
  if ( 
      (characterTop > window.innerHeight) || 
      ( 
          (blockLeft < 50) && 
          (blockLeft > -50) && 
          ( 
              (cTop < holeTop) || 
              (cTop > holeTop + 150) 
          ) 
      ) 
    ) {
        console.log("Game over. Score: "+(counter-1)); // new DOM on line 21 div element 
      
    // here is where to output a final score
      
      document.getElementById("finalAlert").classList.add("showAlert");
      // add code to hide the vertical bar and the duck
      
    
      //document.getElementById("finalAlert").style.display = "visible";
      // document.getElementById("").classList.add("yourshowCSS");
      
        character.style.top = 100 + "px";
        counter=0;
    }
},10);
// sets bpounds for jump count
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}