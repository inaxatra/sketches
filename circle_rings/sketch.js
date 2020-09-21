var theta = 0;

function setup() {
	can = createCanvas(800, 800);
	can.position(0,0);
	background(0);
	angleMode(DEGREES);
	createLoop({duration:3, framesPerSecond:25, gif:true});
}

function caption(){
	textSize(22)
	fill(0)
	stroke(255)
	text("- By Naxatra", 660, 775)
}


function X(x){
	return 400+x;
}

function Y(y){
	return 400-y;
}

function draw() {

	let x = 200*cos(theta)
	let y = 200*sin(theta)


	// stroke(255)
	strokeWeight(3)
	// line(X(-400), Y(0), X(400), Y(0))
	// line(X(0), Y(-400), X(0), Y(400))

	noFill()
	stroke(137)
	// stroke(random(0,255), random(0,255), random(0,255));

	// ellipse(X(0), Y(0), 400)

	ellipse(X(x), Y(y), 400)

	theta = theta + 10;
	caption()
}