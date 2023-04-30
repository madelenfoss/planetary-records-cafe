import { sanity } from "../sanity.js";

export default async function shopItems() {
	const query = `
	*[_type == 'album'] {
		_id,
		  'artist': artist->name,
		  'genre': genre->musicGenre,
		albumName,
		'image': albumCoverImage.asset->url,
		description,
		price,
		'slug' : slug.current,
	  month
	 }	 
	`

	const vinyls = await sanity.fetch(query);
	const shopContainer = document.querySelector('.shop__container');
	const vinylOfTheMonthContainer = document.querySelector('.shop__container-monthly-vinyl')
	const shopContainerItems = document.querySelector('.shop__container-items');

	function renderHTML() {
		for (const vinyl of vinyls) {
			// const vinylOfTheMonth = document.createElement('div');
			// const vinylOfTheMonthHeader = document.createElement('H2');

			const vinylItem = document.createElement('a');
			const vinylImage = document.createElement('img');
			const vinylTitle = document.createElement('div');
			const vinylArtist = document.createElement('div');
			const vinylPriceAndBuyButtonContainer = document.createElement('div');
			const vinylPrice = document.createElement('div');
			const vinylBuyButton = document.createElement('button');

			vinylItem.classList.add('shop__container-item');
			vinylImage.classList.add('shop__container-item-image');
			vinylImage.setAttribute('src', vinyl.image);
			vinylImage // add alt text here


		}
	}

}