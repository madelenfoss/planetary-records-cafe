import { sanity } from "../sanity.js";

export default async function slideshow() {
	const query = `*[_type == 'settings'] {
		slideshowImages[] {
		  'image': image.asset->url,
		  'alt': altText,
		  'description': description,
		  'photographer': photographer
		}
	 }`

	const slideElements = await sanity.fetch(query);

	const slideshow = document.querySelector('.main__slideshow');
	const slideSlides = document.querySelector('.main__slideshow-slides');
	const buttonPrevious = document.querySelector('.main__slideshow-previous-button');
	const buttonNext = document.querySelector('.main__slideshow-next-button');
	const buttonDots = document.querySelectorAll('.main__slideshow-dot');

	if (slideshow) {
		renderSlides();
		renderSlideshow();
	}

	function renderSlides() {
		for (const slideElement of slideElements) {
			const slideshowSlide = document.createElement('figure');
			const slideshowSlideImage = document.createElement('img');
			const slideshowSlideCaption = document.createElement('figcaption');

			slideshowSlide.classList.add('main__slideshow-slide');
			slideshowSlideImage.classList.add('main__slideshow-slide-image');
			slideshowSlideCaption.classList.add('main__slideshow-slide-caption');

			slideshowSlideImage.setAttribute('src', slideElement.image);
			slideshowSlideImage.setAttribute('alt', slideElement.alt);

			slideshowSlideCaption.innerText = `${slideElement.description} Photo by: ${slideElement.photographer}`;

			slideshowSlide.append(
				slideshowSlideImage,
				slideshowSlideCaption
			)

			slideSlides.appendChild(
				slideshowSlide
			)
		}
	}


	function renderSlideshow() {
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
			currentSlideIndex = slideshowSlide.length - 1;
		}
	}

	function nextSlide() {
		if(currentSlideIndex < slideshowSlide.length - 1) {
			currentSlideIndex += 1;
		} else {
			currentSlideIndex = 0;
		}
	}

	function updateSlideshowHTML() {
		for (const slide of slideshowSlide) {
			slide.classList.remove('main__slideshow-slide--active');
		}

		for (const dot of buttonDots) {
			dot.classList.remove('main__slideshow-dot--active');
		}


		slideshowSlide[currentSlideIndex].classList.add('main__slideshow-slide--active');
		buttonDots[currentSlideIndex].classList.add('main__slideshow-dot--active');
	}
}


}