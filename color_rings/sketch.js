var d=10;
var v=10;

function setup() {
	can = createCanvas(800, 800);
	can.position(0,0);
	background(212, 0, 255);

	createLoop({duration:10, framesPerSecond:25, gif:true});
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

	// line(X(-400),Y(0),X(400),Y(0));
	// line(X(0),Y(-400),X(0),Y(400));

	//origin
	strokeWeight(10);
	stroke(200,180,87);
	point(X(0),Y(0));

	//ring
	stroke(random(0,255), random(0,255), random(0,255));
	strokeWeight(4);
	noFill();
	ellipse(X(0), Y(0), d);
	
	//change dir
	if(d==400*2 || d==0){
		v=-v;
	}

	//change speed
	d=d+v;
	caption()
}