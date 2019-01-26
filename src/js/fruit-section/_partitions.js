function randomGenerator(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}

const withAndHeight = {
	width : 600,
	height : 400
};

export {randomGenerator, withAndHeight}