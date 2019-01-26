import appleImage from "../../img/fruits-section/apple.png";
import bananaImage from "../../img/fruits-section/banana.png";
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

	die(){
		return images.indexOf(this);
	}
}

const apple = new GameItem(appleImage, 100);
const banana = new GameItem(bananaImage, 200, 63, 25);

const images = [
	apple,
	banana
];

images.forEach((item) => {
	item.writeSrc();
	item.loadImage();
});

export {images, GameItem};



