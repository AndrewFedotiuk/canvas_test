const FPS = 1000 / 60;
let gameEngine;


const gameCycle = (()=>{
	return requestAnimationFrame ||
	webkitRequestAnimationFrame  ||
	mozReRequestAnimationFrame   ||
	oRequestAnimationFrame       ||
	msRequestAnimationFrame      ||
	function(collback) {
		setTimeout(collback, FPS);
	}
})();

const gameStart = callback => {
	gameEngine = callback;
	gameStep();
};

const gameStep = () => {
	gameEngine();
	gameCycle(gameStep)
};

const setGame = callback => {
	gameEngine = callback;
};



export {gameCycle, gameStart, gameStep, setGame}