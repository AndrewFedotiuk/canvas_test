import {gameStart} from './core';
import {randomGenerator, withAndHeight} from './_partitions';
import {images, GameItem} from './imagesCreator'
import appleImage from "../../img/fruits-section/apple.png";
import bananaImage from "../../img/fruits-section/banana.png";

const canvas = document.getElementById('fruitsWindow');
const context = canvas.getContext('2d');

canvas.width = withAndHeight.width;
canvas.height = withAndHeight.height;

gameStart(draw);

function draw() {
	context.clearRect(0, 0, withAndHeight.width, withAndHeight.height);

	createItems();

	images.forEach((fruit) => {
		if(!fruit.loaded){
			return;
		}
		fruit.moveUp();

		context.drawImage(fruit.image, fruit.x, fruit.y, fruit.width, fruit.height);
	});
}

canvas.onclick = (event) => {
	const dx = (window.innerWidth - withAndHeight.width) / 2;

	const x = (event.pageX - dx),
	y = (event.pageY - 10);

	images.forEach((fruit) => {
		if(cursorIsRect(x, y, fruit)){
			const currentItem = fruit.die();

			images.splice(currentItem, 1);
		}
	})
};

function cursorIsRect(positionX, positionY, fruit){
	return positionX > fruit.x && positionX < fruit.x + fruit.width &&
		   positionY > fruit.y && positionY < fruit.y + fruit.height
}

function createItems(counter = randomGenerator(0, 100)){
	switch (counter) {
		case 0:
			const newApple = new GameItem(appleImage, 100);
			newApple.loaded = true;
			images.push(newApple);
			break;
		case 1:
			const newBanana = new GameItem(bananaImage, 100);
			newBanana.loaded = true;
			images.push(newBanana);
			break;
	}
}



