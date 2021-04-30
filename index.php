<!DOCTYPE html>
<html lang="en" onclick="jump()">
  
<head>
    <meta charset="UTF-8">
    <title>Flappy Duck</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
  
<form action="output.php" method="get" onsubmit="">
 
<div id="foreground">
  
  <div id="formBox">
    
  <img src="duck2.png" alt="duck">    
  <h1 class="title">Flappy Duck</h1>  
  <p>customize game background:</p>  
    
    <div class="formBlock">
    <label for="topColor">Top Color:</label>
      <input type="color" name="topColor" id="topColor"  value="#000000">
    </div>
    
    <div class="formBlock">
   <label for="bottomColor">Bottom Color:</label> 
      <input type="color" name="bottomColor" id="bottomColor" value="#aaaaaa">
    </div>  
      
    <div class="formBlock">
      <button class="button" type="submit">START GAME</button>
    </div>
      
  </div> 
 
  </div>
  
</body>
<script src="scripts.js"></script>
</html>
