import { sanity } from "../sanity.js";

export default async function productDetails() {
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

	const previewContainer = document.querySelector('.preview');

	const urlParams = new URLSearchParams(window.location.search);
	const slug = urlParams.get('vinyl');

	if (previewContainer) {
		renderHTML()
	} 

	function renderHTML() {
		const currentVinyl = vinyls.find(vinyl => vinyl.slug === slug);
	}

	renderHTML();
}