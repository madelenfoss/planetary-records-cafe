export default function shoppingCart() {

	// Created by following Kristiania teacher and frontend expert Alejandro Rojas' tutorial
	const cartProducts = [];
	const shoppingCart = document.querySelector('.shop__cart');
	const addToCartButtons = document.querySelectorAll('.shop__container-item-buy');
	const monthlyVinylAddToCartButtons = document.querySelector('.shop__container-monthly-vinyl-buy');

	if (shoppingCart) {
		addToCartButtons.forEach(button => {
			button.addEventListener('click', handleAddToCartButtonClick);
		});

		function handleAddToCartButtonClick(event) {
			const button = event.currentTarget;

			addToCart(button);
			render();
		}

		function addToCart(button) {	
			const clickedButtonDataset = button.parentNode.parentNode.dataset;
			const product = {
				id: clickedButtonDataset.id,
				name: clickedButtonDataset.name,
				price: clickedButtonDataset.price,
				quantity: 1,
			};

			const matchInCart = cartProducts.find(product => product.id === clickedButtonDataset.id);
			
			if (matchInCart) {
				matchInCart.quantity += 1;
			} else {
				cartProducts.push(product);
			}
		};

		function emptyCart() {
			cartProducts = [];
		};

		function render() {
			if (cartProducts.length > 0) {

			} else {
				
			}
		};

	}
}