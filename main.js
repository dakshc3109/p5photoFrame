var video; 
function preload(){

}

function setup(){
    var canvas = createCanvas(1000, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
   


    fill(232, 159, 245);
    stroke(227, 104, 104);
    circle(90, 500, 80, 80);

    fill(225, 255, 74);
    stroke(225, 255, 74);
    rect(130, 480, 750, 40);

    fill(232, 159, 245);
    stroke(227, 104, 104);
    circle(920, 500, 80, 80);

    
    fill(232, 159, 245);
    stroke(227, 104, 104);
    circle(90, 100, 80, 80);

    fill(225, 255, 74);
    stroke(225, 255, 74);
    rect(130, 80, 750, 40);

    fill(232, 159, 245);
    stroke(227, 104, 104);
    circle(920, 100, 80, 80);

    
    fill(225, 255, 74);
    stroke(225, 255, 74);
    rect(72, 140, 40, 320);

    fill(225, 255, 74);
    stroke(225, 255, 74);
    rect(902, 140, 40, 320);
}

function draw(){
    image(video, 500, 500, 200, 200);
}

function take_snapshot(){
    save('myfilter.png')
}