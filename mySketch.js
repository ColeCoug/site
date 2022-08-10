//Slight modification of code posted by it looks like 4 different people on OpenProcessing
//Don't know who to credit but this is super cool, I only edited it but it is teaching me a lot about shaders

let Shader,palette;
let speed = 111;//256;
let n = 0.7;//0.8;
let t = 0;
let moving = true;
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  canvas.parent('sketch-container');
  pixelDensity(1);
  noStroke();
}
function draw() {
	if(moving){
		t++;
	}
	drawCircle();
  shader(Shader);
	Shader.setUniform('pal',palette);
	Shader.setUniform('c',[sin(t/speed)*n,cos(t/speed)*n]);
  rect(0,0,width,height);
  drawCircle();

  let xLabel = document.getElementById('x-label');
  xLabel.innerText = 'X: ' + mouseX;

  let yLabel = document.getElementById('y-label');
  yLabel.innerText = 'Y: ' + mouseY;

}

function drawCircle(){
	fill(255);
	circle(mouseX, mouseY, 130);
}

function mousePressed(){
	moving = !moving;

}

// function mousePressed() {save("Frozen_Fractal");}
function preload() {
  Shader=new p5.Shader(this._renderer,"shader.vert","shader.frag");
	palette=loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAABCAYAAAAxWXB3AAAAAXNSR0IArs4c6QAAAGRJREFUOE9jZGBg+M8ABiwMDAwcSDQyGyZHSIyQPDZzOJCsZoE6AUaDnIRDDGwUmjqYGNwrUHmQOnQxFoQc3FVIykE+AWNai7EwMPxhQOAfFLBB5gyE/uHlAeTYGM5sUEphYAAAjJafAWvSA74AAAAASUVORK5CYII=");
}

// float x=(z.x+z.y)*(z.x-z.y)+c.x;
// 				float y=2.*z.y*z.x+c.y;