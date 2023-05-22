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

	const slideElements = slideElementsSanity[1].slideshowImages; // Ghost-data? 

	console.log(slideElementsSanity);
	
	const slideshow = document.querySelector('.main__slideshow');
	const slideSlides = document.querySelector('.main__slideshow-slides');
	const buttonsContainer = document.querySelector('.main__slideshow-controls');
	const buttonDotsContainer = document.querySelector('.main__slideshow-dots');

	if (window.innerWidth > 768) {
		renderSanitySlides();
		showFirstSlide();
	} else {
		renderMobileImage();
	}

	/**
	 * variabler
	 * queryselector
	 * eventlisteners
	 * handlers
	 * resten
	 * 
	 * renderHTML
	 */

		/* event handlers */
		function handleButtonPreviousClick(event) {
			previousSlide();
			updateSlideshowHTML();
			}
	
		function handleButtonNextClick(event) {
			nextSlide();
			updateSlideshowHTML();
		}

	function renderMobileImage() {
		for (const image of slideElements) {
		const mobileImageFigure = createMobileFigureDOM(image); 

		slideSlides.appendChild(mobileImageFigure);

		}
	}

	function createMobileFigureDOM(image) {
		const mobileImageFigure = document.createElement('figure');
		const mobileImage = document.createElement('img');
		const mobileImageFigCaption = document.createElement('figcaption');

		mobileImageFigure.className = 'main__slideshow-slide';
		mobileImage.className = 'main__slideshow-slide-image';
		mobileImageFigCaption.className = 'main__slideshow-slide-caption';

		mobileImage.src = image.image;
		mobileImageFigCaption.innerText = image.description;

		mobileImageFigure.append(
			mobileImage,
			mobileImageFigCaption
		)

		return mobileImageFigure
	}

	function showFirstSlide() {
		const slideshowSlides = document.querySelectorAll('.main__slideshow-slide');
		const buttonDots = document.querySelectorAll('.main__slideshow-dot');

		slideshowSlides[0].classList.add('main__slideshow-slide--active');
		buttonDots[0].classList.add('main__slideshow-dot--active');
	}

	function renderSanitySlides() {
		const previousButton = document.createElement('button');
		const previousButtonImage = document.createElement('img');
		const nextButton = document.createElement('button');
		const nextButtonImage = document.createElement('img');

		previousButton.className = 'main__slideshow-previous-button';
		nextButton.className = 'main__slideshow-next-button';

		previousButtonImage.src = './_app/assets/icons/icons8-arrow-left.png';
		nextButtonImage.src = './_app/assets/icons/icons8-arrow-right.png';

		for (const slideElement of slideElements) {
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

			buttonDotsContainer.appendChild(buttonDots);

			slideshowSlides.append(
				slideshowSlideImage,
				slideshowSlideCaption
			)

			slideSlides.append(
				buttonDotsContainer,
				slideshowSlides
			)
		}

			previousButton.addEventListener('click', handleButtonPreviousClick);
			nextButton.addEventListener('click', handleButtonNextClick);

			previousButton.appendChild(previousButtonImage);

			nextButton.appendChild(nextButtonImage);

			buttonsContainer.append(
				previousButton,
				nextButton
			);
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
		const slideshowSlides = document.querySelectorAll('.main__slideshow-slide');
		const buttonDots = document.querySelectorAll('.main__slideshow-dot');
		for (const slide of slideshowSlides) {
			slide.classList.remove('main__slideshow-slide--active');
		}

		for (const dot of buttonDots) {
			dot.classList.remove('main__slideshow-dot--active');
		}

		slideshowSlides[currentSlideIndex].classList.add('main__slideshow-slide--active');
		buttonDots[currentSlideIndex].classList.add('main__slideshow-dot--active');
	}
}

