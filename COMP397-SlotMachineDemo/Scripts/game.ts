﻿// CreateJS Boilerplate for COMP397


// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas; // Reference to the HTML 5 Canvas element
var stage: createjs.Stage; // Reference to the Stage


// GAME OBJECTS
var game: createjs.Container; // Main Game Container Object
var background: createjs.Bitmap;
var spinButton: createjs.Bitmap;
var betMaxButton: createjs.Bitmap;
var betOneButton: createjs.Bitmap;
var resetButton: createjs.Bitmap;
var powerButton: createjs.Bitmap;


// FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function init() {



    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); // Parent Object
    stage.enableMouseOver(20); // Turn on Mouse Over events

    createjs.Ticker.setFPS(60); // Set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}


// GAMELOOP
function gameLoop() {
    stage.update();
}

function buttonClicked() {

}

function buttonOut() {

}

function buttonOver() {

}


function main() {
    game = new createjs.Container(); // Instantiates the Game Container

    background = new createjs.Bitmap("assets/images/background.png");
    game.addChild(background); // Add the background to the game container

    spinButton = new createjs.Bitmap("assets/images/spinButton.png");
    game.addChild(spinButton);
    spinButton.x = 410;
    spinButton.y = 545;


    stage.addChild(game); // Adds the Game Container to the Stage
    

}



