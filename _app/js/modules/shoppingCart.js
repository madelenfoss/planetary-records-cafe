export default function shoppingCart() {
	
	// Created by following Kristiania teacher and frontend expert Alejandro Rojas' tutorial

	const shoppingCart = document.querySelector('.shop__cart');
	const addToCartButtons = document.querySelectorAll('.shop__container-item-buy');
	const monthlyVinylAddToCartButtons = document.querySelector('.shop__container-monthly-vinyl-buy');

	if (shoppingCart) {
		addToCartButtons.forEach(button => {
			button.addEventListener('click', handleAddToCartButtonClick);
		});

		function handleAddToCartButtonClick(event) {
			const button = event.currentTarget;

			addToCart(button)
		}

		function addToCart(button) {	
			const { id, name, price } = button.parentNode.parentNode.dataset;
			console.log({ id, name, price });
		}

	}
}