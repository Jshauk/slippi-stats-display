$(document).ready(function() {
  
    $.getJSON('output.json', function(data) {
					
		//These are text values that don't need to be rounded
		var p1killMoves = data.btsSummary[0]['results'][0];//most used kill moves
		var p2killMoves = data.btsSummary[0]['results'][1];
		var p1neutralOp = data.btsSummary[1]['results'][0];//most common neutral opener
		var p2neutralOp = data.btsSummary[1]['results'][1];
		//Rounding these to 1 decimal place if necessary
		var p1opk       = Math.round(data.btsSummary[2]['results'][0] * 10) / 10;//openings per kill
		var p2opk       = Math.round(data.btsSummary[2]['results'][1] * 10) / 10; 
		var p1totalDmg  = Math.round(data.btsSummary[3]['results'][0] * 10) / 10;//total damage
		var p2totalDmg  = Math.round(data.btsSummary[3]['results'][1] * 10) / 10;
		var p1random1   = Math.round(data.btsSummary[4]['results'][0] * 10) / 10;//random stats
		var p2random1   = Math.round(data.btsSummary[4]['results'][1] * 10) / 10;
		var p1random2   = Math.round(data.btsSummary[5]['results'][0] * 10) / 10;
		var p2random2   = Math.round(data.btsSummary[5]['results'][1] * 10) / 10;
		var rngText1   = data.btsSummary[4]['name'];//title for random stats
		var rngText2   = data.btsSummary[5]['name'];
				
		//injecting values into the html	
		document.getElementById("p1Move").innerHTML = p1killMoves;
		document.getElementById("p2Move").innerHTML = p2killMoves;
		document.getElementById("p1Open").innerHTML = p1neutralOp;
		document.getElementById("p2Open").innerHTML = p2neutralOp;
		document.getElementById("p1Opk").innerHTML  = p1opk;
		document.getElementById("p2Opk").innerHTML  = p2opk;
		document.getElementById("p1Dmg").innerHTML  = p1totalDmg;
		document.getElementById("p2Dmg").innerHTML  = p2totalDmg;
		//first random stat
		document.getElementById("p1rng1").innerHTML = p1random1;
      document.getElementById("textRng1").innerHTML = '<span>' + rngText1 + '</span>';
		document.getElementById("p2rng1").innerHTML = p2random1;
		//second random stat
		document.getElementById("p1rng2").innerHTML = p1random2;
      document.getElementById("textRng2").innerHTML = '<span>' + rngText2 + '</span>';
		document.getElementById("p2rng2").innerHTML = p2random2;
	

		
		
//      $.each(data.games, function(i, f) {
//		   var opk = [p1opk,p2opk]
//           var tblRow = "<tr>" + "<td>" + f.stage['name'] + "</td>" +
//           "<td>" + f.players[0]['characterName'] + "</td>" + "<td>" + f.players[1]['characterName'] + 
//		   "</td>" + "<td>" + opk[i] + "</td>" + "</tr>"
//           $(tblRow).appendTo("#userdata tbody");
		
		//$.each(data.games, function())
		

     });

   });
   
