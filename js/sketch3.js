function setup(){
	createCanvas(700,700);
}

function calcColor (dist, maxDist){
	var move = int((dist*1.0)/maxDist*245);
	move+=5;
	return move;
}

function calcRadius (dist, maxDist, maxRadius, minRadius){
	var move = int((dist*1.0)/maxDist*((maxRadius-minRadius)));
	move+=minRadius;
	return move;
}



function draw(){
	clear();
	for (i = 0; i < 20; i++){
		for (j=0; j < 20; j++){
			var d2 = dist(mouseX, mouseY, i*30+15, j*30+15);
			var calculation = calcColor(d2,700);
			var radius = calcRadius(d2,700,30,3);
			var col =color(calculation+50,calculation+25,calculation+100);
			fill(col);
			ellipse(i*30+15, j*30+15, radius, radius);
		}
	}
}