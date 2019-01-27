import {gameStart} from './core';
import {randomGenerator, withAndHeight} from './_partitions';
import {images, GameItem} from './imagesCreator';

const canvas = document.getElementById('fruitsWindow');
const context = canvas.getContext('2d');

let score = 0,
	deg = 0;

canvas.width = withAndHeight.width;
canvas.height = withAndHeight.height;

gameStart(draw);

function draw() {
	context.clearRect(0, 0, withAndHeight.width, withAndHeight.height);

	context.font="30px Comic Sans MS";
	context.fillStyle = "red";
	context.fillText(`Score: ${score}`, 10, 40);

	// createItems();


	images.forEach((fruit) => {
		if(!fruit.loaded){
			return;
		}

		deg += 1;

		const dx = fruit.x + fruit.width / 2;
		const dy = fruit.y + fruit.height / 2;


		fruit.rotate(deg, dx, dy, context);
		fruit.moveUp();

		context.drawImage(fruit.image, fruit.x, fruit.y, fruit.width, fruit.height);

		context.restore();

	});
}

canvas.onclick = (event) => {
	const dx = (window.innerWidth - withAndHeight.width) / 2;

	const x = (event.pageX - dx),
	y = (event.pageY - 10);

	images.forEach((fruit) => {
		if(getCursorPosition(x, y, fruit)){

			const currentItem = fruit.die();

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
	if(item.score !== 'boom!!!'){
		score += item.score;

	}else {
		alert(`You lose! Score: ${score}`);
		location.reload();
	}
}




