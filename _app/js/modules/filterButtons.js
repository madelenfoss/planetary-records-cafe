import { sanity } from "../sanity.js";
import shopItems from "./shopItems.js";
// import fetchData her

export default async function filterButtons(items) {
	const query = 	`*[_type == "album"] {
		_id,
		"artist": artist->name,
		"genre": genre->musicGenre,
		albumName,
		releaseDate,
		"image": albumCoverImage.asset->url,
		'altText': albumCoverImage.alternative,
		description,
		stock,
		price,
		"slug": slug.current,
	  	month
	 }`
	
	const vinyls = await sanity.fetch(query);

	const filterButtonSection = document.querySelector('.filter__buttons');
	const vinylItemsContainer = document.querySelector('.shop__container-items');

	const filterButtons = [
		{
			category: 'all'
		},
		{
			category: 'space disco'
		},
		{
			category: 'space rock'
		},
		{
			category: 'space metal'
		},
		{
			category: 'space'
		},
		{
			category: 'space folk'
		},
		{
			category: 'instrumental'
		},
	];


	if (filterButtonSection) {
		renderFilterButtons(vinyls)
	}

	function buttonDOMElement(button) {
		const genreButton = document.createElement('button');
		genreButton.classList.add('filter__button');
		genreButton.textContent = button.category;
		genreButton.dataset.filterCategory = button.category;

		genreButton.addEventListener('click', handleGenreButtonClick);
		return genreButton;
	}

	function handleGenreButtonClick(event) {
		let currentVinyl = event.target.innerText;
		const clickedButton = event.target;
		const allGenreButtons = event.target.parentElement.querySelectorAll('button');

		filterVinyls(currentVinyl);

		

	}

	function filterVinyls(currentVinyl) {

		// Finne ut av denne - hente inn alt men ikke Vinyl of the month
		// const filterVinylsButNotVinylOfTheMonth  = vinyls.find(vinyl => vinyl.month === false);


		let filteredVinyls = [];

		switch (currentVinyl) {
			case 'all':
				filteredVinyls = vinyls;
					break;

			case 'space disco':
				filteredVinyls = vinyls.filter(vinyl => vinyl.genre === 'space disco');
					break;
			
			case 'space rock':
				filteredVinyls = vinyls.filter(vinyl => vinyl.genre === 'space rock');
					break;
			
			case 'space metal':
				filteredVinyls = vinyls.filter(vinyl => vinyl.genre === 'space metal');
					break;

			case 'space folk':
				filteredVinyls = vinyls.filter(vinyl => vinyl.genre === 'space folk');
					break;

			case 'space':
				filteredVinyls = vinyls.filter(vinyl => vinyl.genre === 'space');
					break;

			case 'instrumental':
				filteredVinyls = vinyls.filter(vinyl => vinyl.genre === 'instrumental');
					break;		
		}

		vinylItemsContainer.innerHTML = '';
		shopItems(filteredVinyls);
	}

	function renderFilterButtons() {
		for (let i = 0; i < filterButtons.length; i++) {
			const buttonElement = buttonDOMElement(filterButtons[i]);
			filterButtonSection.appendChild(buttonElement);
		}
	}

}