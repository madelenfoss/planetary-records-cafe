import { sanity } from "../sanity.js";

export default async function staffPersons() {
	const query = 	`*[_type == 'staff'] | order(startDate asc) {
		_id,
		"slug": slug.current,
		"name": name,
		"started": startDate,
		"image": image.asset->url,
		"altText": image.alternative,
		"role": role[]->roleName,
		"credits": image.credits 
	 }`

	const persons = await sanity.fetch(query);

	const staffContainer = document.querySelector('.about__us-staff-container');

	if (staffContainer) {
		renderStaff();
	}

	function renderStaff() {
		for (const person of persons) {
			const staffCard = document.createElement('div');
			const staffImage = document.createElement('img');
			const staffName = document.createElement('div');
			const staffRole = document.createElement('div');
			const photoCredits = document.createElement('div');
			const photoCreditsStyle = document.createElement('em');

			staffCard.classList.add('about__us-staff-container-person');
			staffImage.classList.add('about__us-staff-container-person-img');
			staffName.classList.add('about__us-staff-container-person-name');
			staffRole.classList.add('about__us-staff-container-person-role');
			photoCredits.classList.add('about__us-staff-container-person-credits');

			staffImage.setAttribute('src', person.image);
			staffImage.setAttribute('alt', person.altText);

			staffName.innerText = `${person.name}`;
			staffRole.innerText = `${person.role}`;
			photoCreditsStyle.innerText = `${person.credits}`;

			staffContainer.appendChild(staffCard);

			photoCredits.appendChild(photoCreditsStyle);

			staffCard.append(
				staffImage,
				staffName,
				staffRole,
				photoCredits
			)

		}
	}

}