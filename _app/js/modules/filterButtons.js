import { sanity } from "../sanity.js";
import shopItems from "./shopItems.js";

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

	// const shopContainer = document.querySelector('.shop__container');
	// const shopContainerItems = document.querySelector('.shop__container-items');
	// const monthlyVinylContainer = document.querySelector('.shop__container-monthly-vinyl');
	// const filterButtonsContainer = document.querySelector('.shop__container-filter-buttons');

	// if (shopContainer) {
	// 	renderHTML();
	// 	createFilterButtons(); /////////////////
	// }


	// 	/// Her starter filter buttons-fuksjonen ///
	
	// 	function createFilterButtons() {
	// 		// Using the spread operator to create a new array of genres, 
	// 		// the Set() function to create a new collection of unique values, 
	// 		// and map() to iterate through each elements of the vinyls array.
	// 		// By doing this, the client can add new genres in Sanity and they will
	// 		// be added to the array.
	// 		const genres = [...new Set(vinyls.map(vinyl => vinyl.genre))];
	
	// 		const allGenresButton = document.createElement('button');
	// 		allGenresButton.innerText = 'all';
	// 		allGenresButton.classList.add('shop__container-filter-button');
	// 		filterButtonsContainer.appendChild(allGenresButton);
	
	// 		allGenresButton.addEventListener('click', () => {
	// 			// Removes filtered vinyls before rendering all vinyls
	// 			shopContainerItems.innerHTML = '';
	// 			renderHTML();
	// 		});
	
	// 		for (const genre of genres) {
	// 			const filterButton = document.createElement('button');
	// 			filterButton.innerText = genre;
	// 			filterButton.classList.add('shop__container-filter-button');
	// 			filterButtonsContainer.appendChild(filterButton);
	
	// 			filterButton.addEventListener('click', () => {
	// 				const filteredVinyls = vinyls.filter(vinyl => vinyl.genre === genre);
	// 				renderFilteredHTML(filteredVinyls);
	// 			});
	// 		}
	// 	}
	
	// 	function renderFilteredHTML(vinyls) {
	// 		shopContainerItems.innerHTML = '';
	
	// 		for (const vinyl of vinyls) {
	// 			const vinylItem = document.createElement('a');
	// 			const vinylImage = document.createElement('img');
	// 			const vinylTitle = document.createElement('div');
	// 			const vinylArtist = document.createElement('div');
	// 			const vinylPriceAndBuyButtonContainer = document.createElement('div');
	// 			const vinylPrice = document.createElement('div');
	// 			const vinylBuyButton = document.createElement('button');
	
	// 			vinylItem.classList.add('shop__container-item');
	// 			vinylImage.classList.add('shop__container-item-image');
	// 			vinylTitle.classList.add('shop__container-item-album');
	// 			vinylArtist.classList.add('shop__container-item-artist');
	// 			vinylPriceAndBuyButtonContainer.classList.add('shop__container-item-price-buy');
	// 			vinylPrice.classList.add('shop__container-item-price');
	// 			vinylBuyButton.classList.add('shop__container-item-buy');
	
	// 			vinylItem.setAttribute('href', `/vinyl/?vinyl=${vinyl.slug}`); 
	// 			vinylImage.setAttribute('src', vinyl.image);
	// 			vinylImage.setAttribute('alt', vinyl.altText);
	// 			vinylTitle.innerText = `${vinyl.albumName}`;
	// 			vinylArtist.innerText = `${vinyl.artist}`;
	// 			vinylPrice.innerText = `${vinyl.price} NOK`;
	// 			vinylBuyButton.innerText = "BUY";
	
	// 			shopContainer.appendChild(shopContainerItems);
	// 			shopContainerItems.appendChild(vinylItem);
	// 			vinylPriceAndBuyButtonContainer.append(vinylPrice, vinylBuyButton);
	// 			vinylItem.append(
	// 				vinylImage,
	// 				vinylArtist,
	// 				vinylTitle,
	// 				vinylPriceAndBuyButtonContainer,
	// 			)
	
	// 		}
	// 	}
}