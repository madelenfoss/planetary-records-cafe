export default function vinylFilterToggle() {
	let filterVisible = false;

	const filterMenu = document.querySelector('.shop__container-filter-buttons');
	const filterMenuIcon = document.querySelector('.shop__container-filter-buttons-mobile');

	filterMenuIcon.addEventListener('click', handleFilterMenuIconClick);

	function handleFilterMenuIconClick(event) {
		toggleFilterMenu();
		renderHTML();
	}

	function toggleFilterMenu() {
		menuVisible = !menuVisible;
	}

	function renderHTML() {
		if (menuVisible === true) {
			filterMenu.classList.add('shop__container-filter-buttons--visible');
		} else {
			filterMenu.classList.remove('shop__container-filter-buttons--visible');
		}
	}

}