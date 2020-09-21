function setup() {
	createCanvas(800,800);
	background(0)
	// rectMode(CENTER)
	createLoop({duration:5, framesPerSecond:25, gif:true});

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
	noStroke()
	for(let i=-400; i<400; i=i+50){
		for(let j=-350; j<=400; j=j+50){
			fill(random(0, 255),random(0, 255),random(0, 255))
			rect(X(i), Y(j), 50, 50)
		}
	}

	strokeWeight(5)
	stroke(255,0,0)
	point(X(0), Y(0))

	caption()
}