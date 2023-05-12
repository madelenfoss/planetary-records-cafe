export default async function slideshow() {

	const slideshow = document.querySelector('.main__slideshow');
	const slideshowSlides = document.querySelectorAll('.main__slideshow-slide');
	const buttonPrevious = document.querySelector('.main__slideshow-previous-button');
	const buttonNext = document.querySelector('.main__slideshow-next-button');
	const buttonDots = document.querySelectorAll('.main__slideshow-dot');

	/* event listeners */
	buttonPrevious.addEventListener('click', handleButtonPreviousClick);
	buttonNext.addEventListener('click', handleButtonNextClick);

	/* event handlers */
	function handleButtonPreviousClick(event) {
		previousSlide();
		updateSlideshowHTML();
	}
	function handleButtonNextClick(event) {
		nextSlide();
		updateSlideshowHTML();
	}

	/* variables */
	let currentSlideIndex = 0;

	/* methods */
	function previousSlide() {
		if(currentSlideIndex > 0) {
			currentSlideIndex -= 1;
		} else {
			currentSlideIndex = slideshowSlides.length - 1;
		}
	}

	function nextSlide() {
		if(currentSlideIndex < slideshowSlides.length - 1) {
			currentSlideIndex += 1;
		} else {
			currentSlideIndex = 0;
		}
	}

	function updateSlideshowHTML() {
		for (const slide of slideshowSlides) {
			slide.classList.remove('main__slideshow-slide--active');
		}

		slideshowSlides[currentSlideIndex].classList.add('main__slideshow-slide--active');
	}


}