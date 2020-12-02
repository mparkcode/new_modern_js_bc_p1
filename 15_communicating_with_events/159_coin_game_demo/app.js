function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin')

const keys = {
	"ArrowDown": {
		"pos": 'top',
		"value": 50,
		"scale": 1
	},
	"ArrowUp": {
		"pos": 'top',
		"value": -50,
		"scale": 1
	},
	"ArrowRight": {
		"pos": 'left',
		"value": 50,
		"scale": 1
	},
	"ArrowLeft": {
		"pos": 'left',
		"value": -50,
		"scale": -1
	}
}

window.addEventListener('keyup', function(e){
	if(keys.hasOwnProperty(e.key)){
		const {pos,value,scale} = keys[e.key]
		avatar.style[pos] = move(avatar,value,pos)
		avatar.style.transform = `scale(${scale},1)`
	}
	if(isTouching(avatar,coin)) moveCoin();
})

const move = (element, value, topOrLeft) =>{
	const currPos = extractPos(element.style[topOrLeft]);
	return `${currPos + value}px`
}

const extractPos = (pos) => {
	if(!pos) return 100;
	return parseInt(pos.slice(0,-2));
}

const moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight)
	const x = Math.floor(Math.random() * window.innerWidth)
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
}

moveCoin()