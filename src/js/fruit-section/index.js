import { gameStart } from './core';
import { randomGenerator, canvasParams, fruitsOptions } from './_partitions';
import { images, createItems } from './imagesCreator';

import background from '../../img/fruits-section/background.jpg';

const canvas = document.getElementById('fruitsWindow');
const context = canvas.getContext('2d');

const bg = new Image();
bg.src = background;


let score = 0,
	deg = 0;

canvas.width = canvasParams.width;
canvas.height = canvasParams.height;

gameStart(draw);

function draw() {
	context.clearRect(0, 0, canvasParams.width, canvasParams.height);

	context.drawImage(bg, 0, 0, canvasParams.width, canvasParams.height);

	context.font='30px Comic Sans MS';
	context.fillStyle = 'red';
	context.fillText(`Score: ${score}`, 10, 40);

	if (randomGenerator(0, 100) === 1 && images.length <= 8) {
		images.push(createItems(fruitsOptions));
	}

	images.forEach((fruit) => {
		if(!fruit.loaded){
			return;
		}

		deg += 1;
		context.save();

		const dx = fruit.x + fruit.width / 2;
		const dy = fruit.y + fruit.height / 2;

		fruit.rotate(deg, dx, dy, context);

		fruit.moveUp();

		context.drawImage(fruit.image, fruit.x, fruit.y, fruit.width, fruit.height);

		context.restore();

	});
}

canvas.onclick = (event) => {
	const dx = (window.innerWidth - canvasParams.width) / 2;

	const x = (event.pageX - dx),
	y = (event.pageY - 10);

	images.forEach((fruit) => {
		if(getCursorPosition(x, y, fruit)){

			const currentItem = fruit.getCurrentIndex();

			updateScore(fruit);

			images.splice(currentItem, 1);
		}
	})
};

function getCursorPosition(positionX, positionY, fruit){
	return positionX > fruit.x && positionX < fruit.x + fruit.width &&
		   positionY > fruit.y && positionY < fruit.y + fruit.height
}

function updateScore(item) {
	if(item.score !== 0){
		score += item.score;

	}else {
		alert(`You lose! Score: ${score}`);
		location.reload();
	}
}
