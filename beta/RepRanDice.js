// Set Default checks
document.getElementById("enableRotation").checked = true;
document.getElementById("enableTrick").checked = true;

function Main() {
var debug = 1
	//Trick Delcarations
	var tricks = ["Ollie","Kickflip","Heelflip","Shuv-It"]
	var stance = ["","Switch","Fakie","Nollie"]
	var rotation = ["","FS 180","BS 180"]
	
	//Set randomness
	var randTrick = Math.floor((Math.random() * tricks.length));
	var randStance = Math.floor((Math.random() * stance.length));
	var randBoardRotation = Math.floor((Math.random() * rotation.length));
	var randSpin = Math.floor((Math.random() * rotation.length));
	
	//Reset Display
	document.getElementById("stance").innerHTML = ""
	document.getElementById("trick").innerHTML = ""
	document.getElementById("boardRotation").innerHTML = ""
	document.getElementById("spin").innerHTML = ""

	//Get trick
	var currentTrick = tricks[randTrick]
	var currentStance = stance[randStance]
	var currentBoardRotation = rotation[randBoardRotation]
	var currentSpin = rotation[randSpin]
	
	//Display trick
	// stance
	if (document.getElementById("enableStance").checked==true)
	{
		document.getElementById("stance").innerHTML = currentStance
	}
	// end stance
	
	// trick
	if (document.getElementById("enableTrick").checked==true)
	{
		document.getElementById("trick").innerHTML = currentTrick
	}
	// end trick
	
	// board rotation
	if (document.getElementById("enableRotation").checked==true)
	{
		document.getElementById("boardRotation").innerHTML = currentBoardRotation
	}
	// end board rotation
	
	// spin
	if (document.getElementById("enableSpin").checked==true)
	{	
		document.getElementById("spin").innerHTML = currentSpin
	}
	//end spin
}
