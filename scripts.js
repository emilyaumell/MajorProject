// code adapted from: https://github.com/Beat0154/FlappyBird
// I'm sorry for this mess, I tried to do my best with adapting the code from the tutorial above
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

// randomizes the hole in each block (lines 10-14 adapted from: https://github.com/Beat0154/FlappyBird )
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*70)+10);
    hole.style.top = random + "vh";
    counter++;
});

// sets game over when character touches top/side/bottom of blocks and holes (lines 17-24 adapted from: https://github.com/Beat0154/FlappyBird )
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
        console.log("Game over. Score: "+(counter-1)); 
      
    //output a final alert for end of game   
      document.getElementById("finalAlert").classList.add("showAlert");
      
    // add code to hide the vertical bar and the duck
      
        character.style.top = 100 + "px";
        counter=0;
    }
},10);

// sets bpounds for jump count (lines 55-70 adapted from: https://github.com/Beat0154/FlappyBird )
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