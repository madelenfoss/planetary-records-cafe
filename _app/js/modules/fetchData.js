// import { sanity } from "../sanity.js";

// export default async function fetchData() {
// 	const query = 
// 	`*[_type == "album"] | order(releaseDate desc) {
// 		_id,
// 		"artist": artist->name,
// 		"genre": genre->musicGenre,
// 		albumName,
// 		releaseDate,
// 		"image": albumCoverImage.asset->url,
// 		'altText': albumCoverImage.alternative,
// 		description,
// 		price,
// 		"slug": slug.current,
// 	  	month
// 	 }`
	
// 	const vinyls = await sanity.fetch(query);

// 	return vinyls
// }