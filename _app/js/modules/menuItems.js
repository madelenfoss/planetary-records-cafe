import { sanity } from "../sanity.js";

export default async function menuItems() {
	const query = `*[_type == 'menuItem'] {
		name,
		'slug': slug.current,
		'description': description,
		'price': price,
		'allergen': allergen[]->allergenName,
		'category': category[]->foodType 
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

			menuItemsCategory.classList.add('menu__container-section');
			menuItemsCategoryName.classList.add('menu__container-section-title');
			menuItem.classList.add('menu__container-section-item');
			menuItemImage.classList.add('menu__container-section-item-image');
			menuItemInfo.classList.add('menu__container-section-item-info');
			menuItemTitle.classList.add('menu__container-section-item-title');
			menutItemDescription.classList.add('menu__container-section-item-description');
			menuItemAllergens.classList.add('menu__container-section-item-allergens');

			menuItemsCategory.setAttribute('id', `${foodItem.}`)
		}
	}

	// function createCategoriesLinks() {

	// }

	

}