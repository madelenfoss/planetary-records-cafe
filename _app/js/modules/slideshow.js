export default async function slideshow() {

	const slideshowSlides = document.querySelectorAll('.main__slideshow-slide');
	const buttonPrevious = document.querySelector('.main__slideshow-previous');
	const buttonNext = document.querySelector('.main__slideshow-next');
	const buttonDots = document.querySelectorAll('.main__slideshow-dot');

	/* event listeners */
	buttonPrevious.addEventListener('click', handleButtonPreviousClick);
	buttonNext.addEventListener('click', handleButtonNextClick);

	/* event handlers */
	function handleButtonPreviousClick(event) {
		previousSlide()
	}
	function handleButtonNextClick(event) {
		nextSlide()
	}

	/* variables */
	let currentSlideIndex = 0;

	/* methods */
	function previousSlide() {
		if(currentSlideIndex > 0) {
			currentSlideIndex -= 1;
		} else {
			currentSlideIndex = slideshowSlides.length -1;
		}

		// console.log(`gå til slide index: ${currentSlideIndex}`)

	}

	function nextSlide() {
		if(currentSlideIndex < slideshowSlides.length -1) {
			currentSlideIndex += 1;
		} else {
			currentSlideIndex = 0;
		}

		// console.log(`gå til slide index: ${currentSlideIndex}`)
	}

	function updateSlideshowHTML() {
		slideshowSlides
	}

}