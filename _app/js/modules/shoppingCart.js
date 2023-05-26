export default function shoppingCart() {

	// Created by following Kristiania teacher and frontend expert Alejandro Rojas' tutorial
	let cartProducts = [];
	const shoppingCart = document.querySelector('.shop__cart');
	const shopCartContentProducts = document.querySelector('.shop__cart-products');
	const shopCartCheckoutButton = document.querySelector('.shop__cart-checkout-button');
	const shopCartEmptyButton = document.querySelector('.shop__cart-empty-button');
	const shoppingCartTotal = document.querySelector('.shop__cart-total');
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

		function createProductItemDOM() {
			for (const cartProduct of cartProducts) {
				const shopCartProduct = document.createElement('div');
				const shopCartItemQuantity = document.createElement('div');
				const shopCartItemTitle = document.createElement('div');
				const shopCartItemPrice = document.createElement('div');
	
				shopCartProduct.classList.add('shop__cart-product');
				shopCartItemQuantity.classList.add('shop__cart-product-quantity');
				shopCartItemTitle.classList.add('shop__cart-product-title');
				shopCartItemPrice.classList.add('shop__cart-product-price');
	
				shopCartItemQuantity.innerText = `${cartProduct.quantity}`;
				shopCartItemTitle.innerText = `${cartProduct.name}`;
				shopCartItemPrice.innerText = `${cartProduct.price} NOK`;
	
	
				shopCartContentProducts.append(
					shopCartProduct,
					shopCartCheckoutButton,
					shopCartEmptyButton 
					)
	
				shopCartProduct.append(
					shopCartItemQuantity,
					shopCartItemTitle,
					shopCartItemPrice
					)
			}
		}

		function emptyCart() {
			cartProducts = [];
		};

		function render() {
			if (cartProducts.length > 0) {
				const totalItems = cartProducts.reduce((total, currentProduct) => {
					return total + currentProduct.quantity;
				}, 0);

				shoppingCart.classList.remove('shop__cart--empty');
				shoppingCartTotal.textContent = `${totalItems} items in cart`;

				shopCartContentProducts.innerHTML = '';

				for (const cartProduct of cartProducts) {
					shopCartContentProducts += createProductItemDOM(cartProduct);
				}

			} else {

			}
		};
	}

}