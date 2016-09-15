
function setup() {

    createCanvas(600, 500);
    setFrameRate(30);

}

function draw() {
    background(51);
    drawCircleHalves(width/2,height/2,width)
    noLoop();
}

//Simplest recursion
function drawCircle(x,y,r) {
	stroke(255);
	noFill();
	ellipse(x,y,r,r);

	if(r>2){
		r *= 0.8;
		drawCircle(x,y,r);
	}
}

function drawCircleHalves(x,y,r) {
	stroke(255);
	noFill();
	ellipse(x,y,r,r);

	if(r>2){
		drawCircle(x+r/2, y, r/2);
		drawCircle(x-r/2, y, r/2);
	}
}

