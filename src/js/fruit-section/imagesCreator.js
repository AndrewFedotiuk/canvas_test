import appleImage from "../../img/fruits-section/apple.png";
import { randomGenerator, withAndHeight } from "./_partitions";


class GameItem {
	constructor(image, w = 40, h = 40) {
		this.image = new Image();
		this.imageScr = image;
		this.loaded = false;
		this.width = w;
		this.height = h;
		this.x = randomGenerator(0, withAndHeight.width);
		this.y = withAndHeight.height;
	}
	loadImage() {
		this.image.src = this.imageScr;
	}
}

const apple = new GameItem(appleImage);

imageLoad(apple);

const images = [
	apple
];

images.forEach((item) => {
	item.loadImage();
});

function imageLoad(fruit) {
	fruit.image.onload = () => {
		apple.loaded = true;
	};
}

export default images;



