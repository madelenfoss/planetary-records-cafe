export default function vinylFilterToggle() {

	const filterMenu = document.querySelector('.shop__container-filter-buttons');
	const filterMenuIcon = document.querySelector('.shop__container-filter-buttons-mobile');

	if (filterMenu) {
		let filterVisible = false;

		filterMenuIcon.addEventListener('click', handleFilterMenuIconClick);

		function handleFilterMenuIconClick(event) {
			toggleFilterMenu();
			renderHTML();
		}

		function toggleFilterMenu() {
			filterVisible = !filterVisible;
		}

		function renderHTML() {
			if (filterVisible === true) {
				filterMenu.classList.add('shop__container-filter-buttons--visible');
			} else {
				filterMenu.classList.remove('shop__container-filter-buttons--visible');
			}
		}

	}

}