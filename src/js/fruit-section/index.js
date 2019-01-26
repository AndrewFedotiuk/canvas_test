import {gameCycle, gameStart, gameStep, setGame} from './core';
import {randomGenerator} from './_partitions';
import appleImage from '../../img/fruits-section/apple.png'
import imagesCreator from './imagesCreator'

const canvas = document.getElementById('fruitsWindow');
const context = canvas.getContext('2d');

const width= 600,
	  height= 400,
	  imageSizes = 40;

let x = randomGenerator(0, width),
	y = height;

gameStart(gameLoopUp);


function gameLoopUp(){
	drawRect();
	y -= 3;

	if(y <= 50){
		setGame(gameLoopDown);
	}
}

function gameLoopDown(){
	drawRect();
	y += 3;
	if(y >= height){
		x = randomGenerator(0, width);
		setGame(gameLoopUp);
	}
}

function drawRect() {
	const img = new Image();

	img.onload = function() {
		context.clearRect(0, 0, width, height);
		context.drawImage(img, x, y, imageSizes, imageSizes);
	};
	img.src = appleImage;
}

function loadImage(image) {

	const result = {
		image,
		loaded: false
	};

	image.onload = ()=>{
		result.loaded = true;
	};

	return result
}


