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
		altText,
		description,
		price,
		"slug": slug.current,
	  	month
	 }`
	
	const vinyls = await sanity.fetch(query);
	
	const shopContainer = document.querySelector('.shop__container');
	const shopContainerItems = document.querySelector('.shop__container-items');
	const monthlyVinylContainer = document.querySelector('.shop__container-monthly-vinyl');
	
	function renderVinylOfTheMonth() {
		const vinylOfTheMonth  = vinyls.find(vinyl => vinyl.month === true);
		console.log(vinylOfTheMonth.genre);

		const monthlyVinylImage = document.createElement('img');
		const monthlyVinylTitle = document.createElement('div');
		const monthlyVinylArtist = document.createElement('div');
		const monthlyVinylDesription = document.createElement('div');
		const monthlyVinylReadMore = document.createElement('a');
		const monthlyVinylPriceAndCart = document.createElement('div');
		const monthlyVinylPrice = document.createElement('div');
		const monthlyVinylAddToCart = document.createElement('button');

		monthlyVinylImage.classList.add();
		monthlyVinylTitle.classList.add();
		monthlyVinylArtist.classList.add();
		monthlyVinylDesription.classList.add();
		monthlyVinylReadMore.classList.add();
		monthlyVinylPriceAndCart.classList.add();
		monthlyVinylPrice.classList.add();
		monthlyVinylAddToCart.classList.add();

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

			// vinylImage.setAttribute('src', vinyl.image);  + alt text. Set multiple attributes with object here.
			// Source: https://bobbyhadz.com/blog/javascript-set-multiple-attributes-to-element
			
			// function setMultipleAttributes(element, imageAttributes) {
			// 	Object.keys(imageAttributes).forEach(attr => {
			// 		element.setMultipleAttributes(attr, imageAttributes[attr]);
			// 	});
			// }

			// const imageAttributes = {
			// 	src: `${vinyl.image}`,
			// 	alt: `${vinyl.altText}`,
			// };

			// const image = document.getElementsByClassName('shop__container-item-image');
			// setMultipleAttributes(image, imageAttributes);

			vinylItem.setAttribute('href', vinyl.slug); 
			vinylImage.setAttribute('src', vinyl.image); // Multiple attributes object
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

	renderVinylOfTheMonth()
	renderHTML();

}