import appleImage from "../../img/fruits-section/apple.png";
import bananaImage from "../../img/fruits-section/banana.png";
import boomImage from "../../img/fruits-section/boom.png";
import basahaImage from "../../img/fruits-section/basaha.png";
import peachImage from "../../img/fruits-section/peach.png";
import sandiaImage from "../../img/fruits-section/sandia.png";

function randomGenerator(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}

const fruitsOptions = [
	[appleImage, 100, 33, 33],
	[bananaImage, 200, 63, 25],
	[boomImage, 0, 33, 34],
	[basahaImage, 300, 34, 36],
	[peachImage, 250, 31, 29.5],
	[sandiaImage, 50, 98, 85],
];

const withAndHeight = {
	width : 600,
	height : 400
};

export {randomGenerator, withAndHeight, fruitsOptions}