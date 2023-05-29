import { sanity } from "../sanity.js";

export default async function menuItems() {
	const itemsQuery = `*[_type == 'menuItem'] | order(orderNumber desc) {
		'name': name,
		'image': image.asset->url,
		'alt': image.alternative,
		'slug': slug.current,
		'description': description,
		'price': price,
		'allergen': allergen[]->allergenName,
		'category': category[]->foodType,
		'number' : category[]->orderNumber,
	 }`
	const foodItems = await sanity.fetch(itemsQuery);

	// const categoryQuery = `*[_type == 'menuCategory'] {
	// 	foodType
	//  }
	//  `

	//  const foodCategories = await sanity.fetch(foodCategories);

	const menu = document.querySelector('.menu');
	const categoriesAsideLinks = document.querySelector('.menu__aside');
	const menuContainerItems = document.querySelector('.menu__container');

	if (menu) {
		createCategoriesLinks();
		renderMenuItems();
	}

	function createCategoriesLinks() {
		const categories = [...new Set(foodItems.map(foodItem => foodItem.category))];
		const categoriesList = document.createElement('ul');
		categoriesList.classList.add('menu__aside-links');

		for (const category of categories) {
			const categoryListItem = document.createElement('li');
			const categoryListItemLink = document.createElement('a');

			categoryListItemLink.innerText = category;
			categoryListItemLink.classList.add('menu__aside-link');
			categoryListItemLink.setAttribute('href', `#${category}`);

			menu.appendChild(categoriesAsideLinks);
			categoriesAsideLinks.appendChild(categoriesList);
			categoriesList.appendChild(categoryListItem);
			categoryListItem.appendChild(categoryListItemLink);
		}
	}


	function renderMenuItems() {
		const menuCategorySectionTitles = [...new Set(foodItems.map(foodItem => foodItem.category))];

		for (const foodItem of foodItems) {
					
			const menuItemsCategory = document.createElement('section'); // Fikse
			const menuItemsCategoryName = document.createElement('h2'); // Fikse
			const menuItem = document.createElement('div');
			const menuItemImage = document.createElement('img');
			const menuItemInfo = document.createElement('div');
			const menuItemTitle = document.createElement('h3');
			const menutItemDescription = document.createElement('div');
			const menuItemAllergens = document.createElement('div');

			menuItemsCategory.classList.add('menu__container-section'); // Fikse
			menuItemsCategoryName.classList.add('menu__container-section-title'); // Fikse
			menuItem.classList.add('menu__container-section-item');
			menuItemImage.classList.add('menu__container-section-item-image');
			menuItemInfo.classList.add('menu__container-section-item-info');
			menuItemTitle.classList.add('menu__container-section-item-title');
			menutItemDescription.classList.add('menu__container-section-item-description');
			menuItemAllergens.classList.add('menu__container-section-item-allergens');


			menuItemsCategory.setAttribute('id', foodItem.category); // Fikse
			menuItemImage.setAttribute('src', foodItem.image);
			menuItemImage.setAttribute('alt', foodItem.alt);

			menuItemsCategoryName.innerText = `${foodItem.category}`; // Fikse
			menuItemTitle.innerText = `${foodItem.name}`;
			menutItemDescription.innerText = `${foodItem.description}`;
			menuItemAllergens.innerText = `Allergens: ${foodItem.allergen}`;

			menu.append(
				categoriesAsideLinks,
				menuContainerItems
			)

			menuContainerItems.appendChild(
				menuItemsCategory
			)

			menuItemsCategory.append(
				menuItemsCategoryName,
				menuItem
			)

			menuItem.append(
				menuItemImage,
				menuItemInfo
			)

			menuItemInfo.append(
				menuItemTitle,
				menutItemDescription,
				menuItemAllergens
			)

		}
	}
}