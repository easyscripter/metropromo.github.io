let slider = document.getElementById('slider');
let slides = document.querySelectorAll('.slide');
let counter = 0;

let timer = setInterval(slideLeft,3000);

function slideLeft(){
	counter -= slides[0].offsetWidth;

	if (counter < - (slides[0].offsetWidth * (slides.length - 1))) {
		counter = 0;
	}
	slider.style.left =  counter + 'px';
}
