import { sanity } from "../sanity.js";

export default async function staffPersons() {
	const query = 	`*[_type == 'staff'] | order(startDate desc) {
		_id,
		"slug": slug.current,
		"name": name,
		"started": startDate,
		"image": image.asset->url,
		"altText": image.alternative,
		"role": role[]->roleName 
	 }`

}