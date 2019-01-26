import {gameStart, setGame} from './core';
import {randomGenerator, withAndHeight} from './_partitions';
import images from './imagesCreator'

const canvas = document.getElementById('fruitsWindow');
const context = canvas.getContext('2d');

gameStart(gameLoopUp);

function gameLoopUp(){
	drawRect();
	images[0].y -= 3;

	if(images[0].y <= 50){
		setGame(gameLoopDown);
	}
}

function gameLoopDown(){
	drawRect();
	images[0].y += 3;
	if(images[0].y >= withAndHeight.height){
		images[0].x = randomGenerator(0, withAndHeight.width);
		setGame(gameLoopUp);
	}
}

function drawRect() {
	context.clearRect(0, 0, withAndHeight.width, withAndHeight.height);
	context.drawImage(images[0].image, images[0].x, images[0].y, images[0].width, images[0].height);
}


// console.log(images);


