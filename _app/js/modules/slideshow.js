export default function slideshow() {
	const slideshowSlides = document.querySelectorAll('.main__slideshow-slide');
	const buttonPrevious = document.querySelector('.main__slideshow-previous');
	const buttonNext = document.querySelector('.main__slideshow-next');
	const buttonDots = document.querySelectorAll('.main__slideshow-dot');

	buttonPrevious.addEventListener('click', handleButtonPreviousClick);
	buttonNext.addEventListener('click', handleButtonNextClick);

	handleButtonNextClick
}