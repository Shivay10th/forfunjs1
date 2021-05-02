/** @format */

const maindiv = document.getElementsByClassName('main')[0];
for (let i = 0; i < 23 * 23; i++) {
	const div = document.createElement('div');
	div.classList.add('square');
	maindiv.append(div);
}

const allDiv = document.getElementsByTagName('div');
for (let i = 1; i < allDiv.length; i++) {
	allDiv[i].addEventListener('mouseover', handleMouseOver);
	allDiv[i].addEventListener('mouseout', handleMouseOut);
}

function handleMouseOut() {
	this.style.background = '#232323';
}

function handleMouseOver() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	this.style.background = `rgb(${r},${g},${b})`;
}
