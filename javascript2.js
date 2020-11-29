$(document).ready(function() {
	
	$.getJSON('Resources/Texts/ScoreboardInfo.json', function(data){ 
	
		var p1Name = data.p1Name;
		var p2Name = data.p2Name;
		var p1Char = data.p1Character;
		var p2Char = data.p2Character;
		var p1Color= data.p1Skin;
		var p2Color= data.p2Skin;
		var score = data.p1Score + ' - ' + data.p2Score;
		
//		use names from MeleeStreamTool 
		document.getElementById("p1Name").innerHTML = p1Name;
		document.getElementById("p2Name").innerHTML = p2Name;
		
//		grab image paths based on variables
		var path1 = 'Resources/Characters/Portraits/' + p1Char + '/' + p1Color + '.png';
		var path2 = 'Resources/Characters/Portraits/' + p2Char + '/' + p2Color + '.png';
		
//		set the image sources
		document.getElementById("leftPic").src  = path1;
		document.getElementById("rightPic").src = path2;
		document.getElementById("scoreText").innerHTML = score;
		
	});
	
	
});