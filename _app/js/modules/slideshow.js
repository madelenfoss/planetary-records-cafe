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

	const slideElementsSanity = await sanity.fetch(query);

	const slideElements = slideElementsSanity[1].slideshowImages;

	console.log(slideElements)
	
	const slideshow = document.querySelector('.main__slideshow');
	const slideSlides = document.querySelector('.main__slideshow-slides');
	const buttonPrevious = document.querySelector('.main__slideshow-previous-button');
	const buttonNext = document.querySelector('.main__slideshow-next-button');
	const buttonDotsContainer = document.querySelector('.main__slideshow-dots');

	if (slideshow) {
		renderSanitySlides();
	}

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
			currentSlideIndex = slideElements.length - 1;
		}
	}

	function nextSlide() {
		if(currentSlideIndex < slideElements.length - 1) {
			currentSlideIndex += 1;
		} else {
			currentSlideIndex = 0;
		}
	}

	function updateSlideshowHTML() {
		for (const slide of slideElements) {
			slide.classList.remove('main__slideshow-slide--active');
		}

		for (const dot of buttonDots) {
			dot.classList.remove('main__slideshow-dot--active');
		}

		slideElements[currentSlideIndex].classList.add('main__slideshow-slide--active');
		buttonDots[currentSlideIndex].classList.add('main__slideshow-dot--active');
	}

	function renderSanitySlides() {
		for (const slideElement of slideElements) {
			// const image = document.createElement('img');
			
			// image.setAttribute('src', slideElement.image);

			// slideSlides.appendChild(image);
			console.log(slideElement.image)
			const slideshowSlides = document.createElement('figure');
			const slideshowSlideImage = document.createElement('img');
			const slideshowSlideCaption = document.createElement('figcaption');
			const buttonDots = document.createElement('button');

			slideshowSlides.classList.add('main__slideshow-slide');
			slideshowSlideImage.classList.add('main__slideshow-slide-image');
			slideshowSlideCaption.classList.add('main__slideshow-slide-caption');
			buttonDots.classList.add('main__slideshow-dot');

			slideshowSlideImage.setAttribute('src', slideElement.image);
			slideshowSlideImage.setAttribute('alt', slideElement.alt);
			buttonDots.setAttribute('aria-label', `Bilde ${slideElement.currentSlideIndex} av ${slideElement.length}`);

			slideshowSlideCaption.innerText = `${slideElement.description} Photo by: ${slideElement.photographer}`;

			slideSlides.appendChild(
				slideshowSlides
			)

			slideshowSlides.append(
				slideshowSlideImage,
				slideshowSlideCaption
			)

			buttonDotsContainer.appendChild(buttonDots);

			buttonPrevious.addEventListener('click', handleButtonPreviousClick);
			buttonNext.addEventListener('click', handleButtonNextClick);
			}

		}
	}

