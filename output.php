<?

// set up PHP defaults
$colorTop = "#000000";
$colorBottom = "#aaaaaa";

// top color is submitted, use it
if ($_GET["topColor"]) {
  $colorTop = $_GET["topColor"];
}

// if bottom color is submitted, use it 
if ($_GET["bottomColor"]) {
  $colorBottom = $_GET["bottomColor"];
}

?><!DOCTYPE html>

<html lang="en" onclick="jump()">
<head>

	<!-- meta tags and title -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Output</title>

	<!-- external and internal CSS -->
	<link rel="stylesheet" href="styles.css" media="all">
	<style>
    body {
      background-image: linear-gradient(180deg, <?= $colorTop; ?>, <?= $colorBottom; ?>);
    }
	</style>

	<!-- external and internal JavaScript -->
	<script type="text/javascript" src="scripts.js" defer></script>
	<script>
		// in-page JavaScript here
	</script>

</head>

<body>
  
  <!-- lines 46-50 adapted from https://github.com/Beat0154/FlappyBird -->
    <div id="game">
        <div id="block"></div>
        <div id="hole"></div>
        <div id="character"></div>
    </div>
  
   <div id="score">score:</div>
   
  <div id="finalAlert">
    <div id= alertBox>
      <h2> GAME OVER</h2>
      <button class="button2" type="submit" onclick="window.location.reload();">RESTART GAME</button>
    </div>
  </div>
  
</body>

</html>