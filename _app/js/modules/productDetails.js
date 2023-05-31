import { sanity } from "../sanity.js";

export default async function productDetails() {
	const query = 
	`*[_type == "album"] {
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
	 }`;

	try {
	const vinyls = await sanity.fetch(query);

	const productDetailsContainer = document.querySelector('.product-details__container');

	const urlParams = new URLSearchParams(window.location.search);
	const slug = urlParams.get('vinyl');

	if (productDetailsContainer) {
		renderHTML()
	} 

	function renderHTML() {
		// Finds the slug of the current vinyl
		const currentVinyl = vinyls.find(vinyl => vinyl.slug === slug);

		const vinylDetailsCard = document.createElement('div');
		const vinylDetailsArtist = document.createElement('H2');
		const vinylDetailsImage = document.createElement('img');
		const vinylDetailsTitle = document.createElement('h3');
		const vinylDetailsDescription = document.createElement('div');
		const vinylDetailsInfo = document.createElement('div');
		const vinylDetailsGenre = document.createElement('div');
		const vinylDetailsReleaseDate = document.createElement('div');
		const vinylDetailsEdition = document.createElement('div');
		const vinylDetailsPriceAndCart = document.createElement('div');
		const vinylDetailsPrice = document.createElement('div');
		const vinylDetailsAddToCartButton = document.createElement('button');

		vinylDetailsCard.classList.add('vinyl__details-card');
		vinylDetailsArtist.classList.add('vinyl__details-artist');
		vinylDetailsImage.classList.add('vinyl__details-image');
		vinylDetailsTitle.classList.add('vinyl__details-title');
		vinylDetailsDescription.classList.add('vinyl__details-description');
		vinylDetailsInfo.classList.add('vinyl__details-info');
		vinylDetailsGenre.classList.add('vinyl__details-genre');
		vinylDetailsReleaseDate.classList.add('vinyl__details-release-date');
		vinylDetailsEdition.classList.add('vinyl__details-edition');
		vinylDetailsPriceAndCart.classList.add('vinyl__details-price-cart-wrapper');
		vinylDetailsPrice.classList.add('vinyl__details-price');
		vinylDetailsAddToCartButton.classList.add('vinyl__details-cart-button','shop__container-item-buy');

		vinylDetailsCard.setAttribute('data-id', currentVinyl._id);
		vinylDetailsCard.setAttribute('data-name', currentVinyl.albumName);
		vinylDetailsCard.setAttribute('data-price', currentVinyl.price);
		vinylDetailsArtist.innerText = `${currentVinyl.artist}`;
		vinylDetailsImage.setAttribute('src', currentVinyl.image);
		vinylDetailsImage.setAttribute('alt', currentVinyl.altText);
		vinylDetailsTitle.innerText = `${currentVinyl.albumName}`;
		vinylDetailsDescription.innerText = `${currentVinyl.description}`;
		vinylDetailsGenre.innerText = `Genre: ${currentVinyl.genre}`;
		vinylDetailsReleaseDate.innerText = `Released: ${currentVinyl.releaseDate}`;
		vinylDetailsEdition.innerText = `Edition of: ${currentVinyl.stock}`;
		vinylDetailsPrice.innerText = `${currentVinyl.price} NOK`;
		vinylDetailsAddToCartButton.innerText = "ADD TO CART";

		productDetailsContainer.appendChild(vinylDetailsCard);

		vinylDetailsPriceAndCart.append(
			vinylDetailsPrice,
			vinylDetailsAddToCartButton
		)

		vinylDetailsInfo.append(
			vinylDetailsGenre,
			vinylDetailsReleaseDate,
			vinylDetailsEdition,
		)

		vinylDetailsCard.append(
			vinylDetailsArtist,
			vinylDetailsImage,
			vinylDetailsTitle,
			vinylDetailsDescription,
			vinylDetailsInfo,
			vinylDetailsPriceAndCart
		)
	}
	} catch (error) {
		const errorContainer = document.querySelectorAll('.error-message');
		
		errorContainer.forEach(element => {
			element.innerText = error.message;
			element.style.display = 'block';
		})
	}

}