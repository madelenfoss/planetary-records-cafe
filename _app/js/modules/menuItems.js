import { sanity } from "../sanity.js";

export default async function menuItems() {
	const query = `*[_type == 'menuItem'] {
		name,
		'slug': slug.current,
		description,
		price,
		allergen[]->{allergenName},
		category[]->{foodType} 
	 }
	 `

	const foodItems = await sanity.fetch(query);

	const menu = document.querySelector('.menu');
	const categoriesAsideLinks = document.querySelector('.menu__aside');
	const menuContainerItems = document.querySelector('.menu__container');

	if (menu) {
		renderMenuItems();
		createCategoriesLinks();
	}

	function renderMenuItems() {
		for (const foodItem of foodItems) {
			const menuItemsCategory = document.createElement('section');
			const menuItemsCategoryName = document.createElement('h2');
			const menuItem = document.createElement('div');
			const menuItemImage = document.createElement('img');
			const menuItemInfo = document.createElement('div');
			const menuItemTitle = document.createElement('h3');
			const menutItemDescription = document.createElement('div');
			const menuItemAllergens = document.createElement('div');


		}
	}

	// function createCategoriesLinks() {

	// }

	

}