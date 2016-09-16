
function setup() {

    createCanvas(1200, 900);
    setFrameRate(30);

}

function draw() {
    background(51);
    setFrameRate(2);

    cantor(44,0,330);
  // drawCircleAboveBelow(width/2,height/2,300)
   
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

function drawCircleAboveBelow(x,y,r) {
	stroke(255);
	noFill();
	ellipse(x,y,r,r);

	if(r>8){
		drawCircleAboveBelow(x+r/random(4), y, r/2);
		drawCircleAboveBelow(x-r/random(6), y, r/2);
		drawCircleAboveBelow(x, y+r/random(5), r/2);
		drawCircleAboveBelow(x, y-r/random(6), r/2);
	}
}

function cantor(x,y,length){
	var height = 30;
	if(length >= 1){

		noStroke();
		fill(255);
		rect(x,y,length,height/3);
		y+= height;

		cantor(x,y,length/3);
		cantor(x+length*2/3,y,length/3);
	}
}

function mousePressed(){
	console.log('press');
	 drawCircleAboveBelow(width/2,height/2,300);
}
