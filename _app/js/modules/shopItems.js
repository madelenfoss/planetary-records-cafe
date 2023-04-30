import { sanity } from "../sanity.js";

export default async function shopItems() {
	const query = 
	`*[_type == "album"] {
		_id,
		"artist": artist->name,
		"genre": genre->musicGenre,
		albumName,
		"image": albumCoverImage.asset->url,
		altText,
		description,
		price,
		"slug": slug.current,
	  	month
	 }`

	 console.log(query);
	
	const vinyls = await sanity.fetch(query);
	const shopContainer = document.querySelector('.shop__container');
	const shopContainerItems = document.querySelector('.shop__container-items');

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

			// vinylImage.getElementsByClassName('shop__container-item-image');
			// setMultipleAttributes(vinylImage, imageAttributes);

			vinylImage.setAttribute('src', vinyl.image);
			vinylTitle.innerText = `${vinyl.albumName}`;
			vinylArtist.innerText = `${vinyl.artist}`;
			vinylPrice.innerText = `${vinyl.price} NOK`;
			vinylBuyButton.innerText = "BUY";


			shopContainer.appendChild(shopContainerItems);
			shopContainerItems.appendChild(vinylItem);
			vinylPriceAndBuyButtonContainer.append(vinylPrice, vinylBuyButton);
			vinylItem.append(
				vinylImage,
				vinylTitle,
				vinylArtist,
				vinylPriceAndBuyButtonContainer,
			)

		}
	}

	renderHTML();

}