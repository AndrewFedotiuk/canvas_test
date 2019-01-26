import appleImage from '../../img/fruits-section/apple.png'

class GameItem {
	constructor(image, name, id){
		this.image
	}
}





function loadImage(image) {

	const result = {
		image,
		loaded: false
	};

	image.onload = ()=>{
		result.loaded = true;
	};

	return result
}