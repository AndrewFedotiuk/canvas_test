import { randomGenerator, withAndHeight, fruitsOptions } from "./_partitions";

const gravity = 1;

class GameItem {
	constructor(image, score, w, h) {
		this.image = new Image();
		this.imageScr = image;
		this.width = w;
		this.height = h;
		this.score = score;
		this.speed = GameItem.setDefaultSpeed();
		this.x = randomGenerator(0, withAndHeight.width - 100);
		this.y = withAndHeight.height;
		this.loaded = false;
		this.onPick = false;
		this.rotateKey = randomGenerator(1, 2);
		this.moveRight = this.getPath();
		this.accelerationRate = randomGenerator(28, 45) / 1000;
	}

	writeSrc() {
		this.image.src = this.imageScr;
	}

	loadImage() {
		this.image.onload = () => {
			this.loaded = true;
		};
	}

	getPath(){
		return this.x <= withAndHeight.width / 2;
	}

	moveUp(){
		if(this.onPick){
			this.moveDown();

		}else if(this.speed < 0.1){
			this.onPick = true;

		}else {
			if(this.moveRight){
				this.x += gravity;
			}else {
				this.x -= gravity;
			}
			this.y -= (this.speed -= this.accelerationRate);
		}
	}

	moveDown(){
		if(this.y >= withAndHeight.height){
			this.onPick = false;
			this.x = randomGenerator(0, withAndHeight.width);
			this.moveRight = this.getPath();
			this.speed = GameItem.setDefaultSpeed();
		}
			if(this.moveRight){
				this.x += gravity;
			}else {
				this.x -= gravity;
			}
			this.y += (this.speed += this.accelerationRate);
	}

	rotate(deg, dx, dy, context){
		deg = deg * (Math.PI / 180);

		if(this.rotateKey === 2) deg = -deg;

		context.translate(dx, dy);
		context.rotate(deg);
		context.translate(-dx, -dy);
	}

	getCurrentIndex(){
		return images.indexOf(this);
	}

	static setDefaultSpeed(){
		return randomGenerator(38, 47) / 10;
	}
}

const images = fruitsOptions.map(item => createFruit(item));

function createFruit(item) {
	const fruit = new GameItem(...item);

	fruit.writeSrc();
	fruit.loadImage();

	return fruit;
}

function createItems(fruitsOptions){
	const key = randomGenerator(0, fruitsOptions.length - 1);

	return createFruit(fruitsOptions[key]);
}

export {images, GameItem, createItems};



