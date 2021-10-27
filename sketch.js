    var ball, ballimg; 
    var basket1, basket2, bakset1img, basket2img; 
    var wall1, wall2, wall3, wall4; 
    var wall5, wall6, wall7; 
    var tri_blue, tri_blue_img;
    var tri_red, tri_red2, tri_red_img;
    var tri_orange, tri_orange_img; 
    var paddle_lt, paddle_lt_img
    var paddle_rt, paddle_rt_img
    var star_bl, star_bl_img
    var star_rd, star_rd_img
    var back_img;
    var x, y;
    var score;

function preload(){

    ballimg=loadImage("images/ball.png");
    basket1img=loadImage("images/basket.png");
    basket2img=loadImage("images/basket.png");
    tri_blue_img=loadImage("images/triangle_blue.png");
    tri_orange_img=loadImage("images/triangle_orange.png");
    tri_red_img=loadImage("images/triangle_red.png");
    paddle_lt_img=loadImage("images/paddle_left.png");
    paddle_rt_img=loadImage("images/paddle_right.png");
    star_bl_img=loadImage("images/star_blue.png");
    star_rd_img=loadImage("images/star_red.png");
    back_img=loadImage("images/image1.png"); 
    score=0;   
}

function setup(){
    createCanvas(1000,800);
    ball=createSprite(690,50,10,10);
    ball.addImage(ballimg);
    basket1=createSprite(300,450,10,10);
    basket1.addImage(basket1img);
    basket1.scale=0.2
    basket2=createSprite(700,450,10,10);
    basket2.addImage(basket2img);
    basket2.scale=0.2
    tri_blue=createSprite(620,560,10,10);
    tri_blue.addImage(tri_blue_img);
    tri_red=createSprite(530,450,10,10);
    tri_red.addImage(tri_red_img);
    tri_red2=createSprite(530,450,10,10);
    tri_red2.addImage(tri_red_img);
    tri_orange=createSprite(450,500,10,10);
    tri_orange.addImage(tri_orange_img)
    paddle_lt=createSprite(470,600,10,10);
    paddle_lt.addImage(paddle_lt_img);
    paddle_lt.scale=0.5;
    paddle_rt=createSprite(490,600,10,10);
    paddle_rt.scale=0.5;
    paddle_rt.addImage(paddle_rt_img);
    star_bl=createSprite(220,610,10,10);
    star_bl.addImage(star_bl_img);
    star_rd=createSprite(430,640,10,10);
    star_rd.addImage(star_rd_img);
    wall1=createSprite(200,400,10,600);
    wall2=createSprite(800,400,10,600);
    wall3=createSprite(320,700,240,10);
    wall4=createSprite(680,700,240,10);
    wall5=createSprite(250,100,100,10);
    wall6=createSprite(500,100,100,10);
    wall7=createSprite(750,100,100,10);
}

function draw(){
    background(back_img);
    x=mouseX;
    y=mouseY;
    fill("white");
    text(x,50,50);

    fill("white");
    text(y,80,50);

    fill("white");
    textSize(45);
    textFont("Monaco");
    text("PIN-BALL-GAME",340,65);

    fill("white");
    textSize(20);
    textFont("Monaco");
    text("SCORE:"+score,215,135);

    ball.bounceOff(wall1);
    ball.bounceOff(wall2);
    ball.bounceOff(wall3);
    ball.bounceOff(wall4);
    ball.bounceOff(wall5);
    ball.bounceOff(wall6);
    ball.bounceOff(wall7);

    if(ball.isTouching(basket1)||ball.isTouching(basket2)){
        score=score+1;
    }

    if(ball.isTouching(star_rd)||ball.isTouching(star_bl)){
        score=score+1;
    }

    drawSprites();

    
}