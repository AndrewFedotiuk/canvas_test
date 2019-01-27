import appleImage from "../../img/fruits-section/apple.png";
import bananaImage from "../../img/fruits-section/banana.png";
import boomImage from "../../img/fruits-section/boom.png";
import { randomGenerator, withAndHeight } from "./_partitions";


class GameItem {
	constructor(image, score, w = 33, h = 33) {
		this.image = new Image();
		this.imageScr = image;
		this.width = w;
		this.height = h;
		this.score = score;
		this.speed = randomGenerator(1, 5);
		this.x = randomGenerator(0, withAndHeight.width - 100);
		this.y = withAndHeight.height;
		this.loaded = false;
		this.onPick = false;
		this.rotateKey = randomGenerator(1, 2);
	}

	writeSrc() {
		this.image.src = this.imageScr;
	}

	loadImage() {
		this.image.onload = () => {
			this.loaded = true;
		};
	}

	moveUp(){
		if(this.onPick){
			this.moveDown();
		}else if(this.y <= 50){
			this.onPick = true;
		}else {
			this.y -= this.speed;
		}
	}

	moveDown(){
		if(this.y >= withAndHeight.height){
			this.onPick = false;
			this.x = randomGenerator(0, withAndHeight.width);
			this.speed = randomGenerator(1, 5);
		}else {
			this.y += this.speed;
		}
	}

	rotate(deg, dx, dy, context){
		deg = deg * (Math.PI / 180);

		if(this.rotateKey === 2) deg = -deg;

		context.save();
		context.translate(dx, dy);
		context.rotate(deg);
		context.translate(-dx, -dy);

	}

	die(){
		return images.indexOf(this);
	}
}

const apple = new GameItem(appleImage, 100);
const banana = new GameItem(bananaImage, 200, 63, 25);
const boom = new GameItem(boomImage, 'boom!!!', 33, 34);

const images = [
	apple,
	banana,
	boom
];

images.forEach((item) => {
	item.writeSrc();
	item.loadImage();
});

// function createItems(counter = randomGenerator(0, 100)){
// 	switch (counter) {
// 		case 0:
// 			const newApple = new GameItem(appleImage, 100);
// 			newApple.loaded = true;
// 			images.push(newApple);
// 			break;
// 		case 1:
// 			const newBanana = new GameItem(bananaImage, 100);
// 			newBanana.loaded = true;
// 			images.push(newBanana);
// 			break;
//      case 2:
// 			const newBoom = new GameItem(newBoom, 'boom');
// 			newBoom.loaded = true;
// 			images.push(newBoom);
// 			break;
// 	}
// }

export {images, GameItem};



