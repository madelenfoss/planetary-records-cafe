import { sanity } from "../sanity.js";

export default async function shopItems() {
	const query = 
	`*[_type == "album"] | order(releaseDate desc) {
		_id,
		"artist": artist->name,
		"genre": genre->musicGenre,
		albumName,
		releaseDate,
		"image": albumCoverImage.asset->url,
		'altText': albumCoverImage.alternative,
		description,
		price,
		"slug": slug.current,
	  	month
	 }`
	
	const vinyls = await sanity.fetch(query);
	
	const shopContainer = document.querySelector('.shop__container');
	const shopContainerItems = document.querySelector('.shop__container-items');
	const monthlyVinylContainer = document.querySelector('.shop__container-monthly-vinyl');
	const filterButtonsContainer = document.querySelector('.shop__container-filter-buttons');// Filter
	
	if (shopContainer) {
		renderVinylOfTheMonth();
		renderHTML();
		createFilterButtons(); // Filter
	}

	function renderVinylOfTheMonth() {
		const vinylOfTheMonth  = vinyls.find(vinyl => vinyl.month === true);

		const monthlyVinylHeader = document.createElement('H2');
		const monthlyVinylImage = document.createElement('img');
		const monthlyVinylArtist = document.createElement('div');
		const monthlyVinylTitle = document.createElement('div');
		const monthlyVinylDescription = document.createElement('div');
		const monthlyVinylReadMore = document.createElement('a');
		const monthlyVinylPriceAndCart = document.createElement('div');
		const monthlyVinylPrice = document.createElement('div');
		const monthlyVinylAddToCartButton = document.createElement('button');
		monthlyVinylHeader.classList.add('shop__container-monthly-vinyl-header');
		monthlyVinylImage.classList.add('shop__container-monthly-vinyl-image');
		monthlyVinylArtist.classList.add('shop__container-monthly-vinyl-artist');
		monthlyVinylTitle.classList.add('shop__container-monthly-vinyl-album');
		monthlyVinylDescription.classList.add('shop__container-monthly-vinyl-description');
		monthlyVinylReadMore.classList.add('shop__container-monthly-vinyl-link');
		monthlyVinylPriceAndCart.classList.add('shop__container-monthly-vinyl-price-cart');
		monthlyVinylPrice.classList.add('shop__container-monthly-vinyl-price');
		monthlyVinylAddToCartButton.classList.add('shop__container-monthly-vinyl-buy');

		monthlyVinylHeader.innerText = "VINYL OF THE MONTH";
		monthlyVinylImage.setAttribute('src', vinylOfTheMonth.image);
		monthlyVinylImage.setAttribute('alt', vinylOfTheMonth.altText);
		monthlyVinylArtist.innerText = `${vinylOfTheMonth.artist}`;
		monthlyVinylTitle.innerText = `${vinylOfTheMonth.albumName}`;
		monthlyVinylDescription.innerText = `${vinylOfTheMonth.description}`;
		monthlyVinylReadMore.innerText = "Read more...";
		monthlyVinylReadMore.setAttribute('href', `/vinyl/?vinyl=${vinylOfTheMonth.slug}`);
		monthlyVinylPrice.innerText = `${vinylOfTheMonth.price} NOK`;
		monthlyVinylAddToCartButton.innerText = "ADD TO CART";

		shopContainer.appendChild(monthlyVinylContainer);

		monthlyVinylPriceAndCart.append(
			monthlyVinylPrice,
			monthlyVinylAddToCartButton
		)

		monthlyVinylContainer.append(
			monthlyVinylHeader,
			monthlyVinylImage,
			monthlyVinylArtist,
			monthlyVinylTitle,
			monthlyVinylDescription,
			monthlyVinylReadMore,
			monthlyVinylPriceAndCart,
		)
	}

	function renderHTML() {
		for (const vinyl of vinyls) {
			const vinylItem = document.createElement('a');
			const vinylImage = document.createElement('img');
			const vinylTitle = document.createElement('div');
			const vinylArtist = document.createElement('div');
			const vinylPriceAndBuyButtonContainer = document.createElement('div');
			const vinylPrice = document.createElement('div');
			const vinylBuyButton = document.createElement('button');

			vinylItem.classList.add('shop__container-item');
			vinylImage.classList.add('shop__container-item-image');
			vinylTitle.classList.add('shop__container-item-album');
			vinylArtist.classList.add('shop__container-item-artist');
			vinylPriceAndBuyButtonContainer.classList.add('shop__container-item-price-buy');
			vinylPrice.classList.add('shop__container-item-price');
			vinylBuyButton.classList.add('shop__container-item-buy');

			vinylItem.setAttribute('href', `/vinyl/?vinyl=${vinyl.slug}`); 
			vinylImage.setAttribute('src', vinyl.image);
			vinylImage.setAttribute('alt', vinyl.altText);
			vinylTitle.innerText = `${vinyl.albumName}`;
			vinylArtist.innerText = `${vinyl.artist}`;
			vinylPrice.innerText = `${vinyl.price} NOK`;
			vinylBuyButton.innerText = "BUY";


			shopContainer.appendChild(shopContainerItems);
			shopContainerItems.appendChild(vinylItem);
			vinylPriceAndBuyButtonContainer.append(vinylPrice, vinylBuyButton);
			vinylItem.append(
				vinylImage,
				vinylArtist,
				vinylTitle,
				vinylPriceAndBuyButtonContainer,
			)

		}
	
	}

	/* Her starter filter buttons-fuksjonen */
	
	function createFilterButtons() {
		/* 
		Using the spread ... operator to create a new array of genres, 
		the Set() function to create a new collection of unique values, 
		and map() to iterate through each element of the vinyls array.
		By doing this, the client can add new genres in Sanity and they will
		be added to the array. 
		*/
		const genres = [...new Set(vinyls.map(vinyl => vinyl.genre))];

		const allGenresButton = document.createElement('button');
		allGenresButton.innerText = 'all';
		allGenresButton.classList.add('shop__container-filter-button');
		filterButtonsContainer.appendChild(allGenresButton);

		allGenresButton.addEventListener('click', () => {
			// Removes filtered vinyls before rendering all vinyls
			shopContainerItems.innerHTML = '';
			renderHTML();
		});

		for (const genre of genres) {
			const filterButton = document.createElement('button');
			filterButton.innerText = genre;
			filterButton.classList.add('shop__container-filter-button');
			filterButtonsContainer.appendChild(filterButton);

			filterButton.addEventListener('click', () => {
				const filteredVinyls = vinyls.filter(vinyl => vinyl.genre === genre);
				renderFilteredHTML(filteredVinyls);
			});
		}
	}

	function renderFilteredHTML(vinyls) {
		shopContainerItems.innerHTML = '';

		for (const vinyl of vinyls) {
			const vinylItem = document.createElement('a');
			const vinylImage = document.createElement('img');
			const vinylTitle = document.createElement('div');
			const vinylArtist = document.createElement('div');
			const vinylPriceAndBuyButtonContainer = document.createElement('div');
			const vinylPrice = document.createElement('div');
			const vinylBuyButton = document.createElement('button');

			vinylItem.classList.add('shop__container-item');
			vinylImage.classList.add('shop__container-item-image');
			vinylTitle.classList.add('shop__container-item-album');
			vinylArtist.classList.add('shop__container-item-artist');
			vinylPriceAndBuyButtonContainer.classList.add('shop__container-item-price-buy');
			vinylPrice.classList.add('shop__container-item-price');
			vinylBuyButton.classList.add('shop__container-item-buy');

			vinylItem.setAttribute('href', `/vinyl/?vinyl=${vinyl.slug}`); 
			vinylImage.setAttribute('src', vinyl.image);
			vinylImage.setAttribute('alt', vinyl.altText);
			vinylTitle.innerText = `${vinyl.albumName}`;
			vinylArtist.innerText = `${vinyl.artist}`;
			vinylPrice.innerText = `${vinyl.price} NOK`;
			vinylBuyButton.innerText = "BUY";

			shopContainer.appendChild(shopContainerItems);
			shopContainerItems.appendChild(vinylItem);
			vinylPriceAndBuyButtonContainer.append(vinylPrice, vinylBuyButton);
			vinylItem.append(
				vinylImage,
				vinylArtist,
				vinylTitle,
				vinylPriceAndBuyButtonContainer,
			)

		}
	}
}