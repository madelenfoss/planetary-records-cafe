export default function shoppingCart() {

	// Created by following Kristiania teacher Alejandro Rojas' shopping cart tutorial

	/*
	* Works with vinyls on main page, vinyl of the month and vinyl details page buttons, 
	* needs to be fixed so that it also works with filtered vinyls buttons.
	*
	* TODO: 
	* Make cart clickable for mobile instead of using :hover
	* Make cart accessible using tabs.
	* Add local storage to keep items in cart.
	*
	*/

	let cartProducts = [];

	const addToCartButtons = document.querySelectorAll('.shop__container-item-buy');
	const shoppingCart = document.querySelector('.shop__cart');
	const shopCartContentProducts = document.querySelector('.shop__cart-products');
	const shopCartCheckoutButton = document.querySelector('.shop__cart-checkout-button');
	const shopCartEmptyButton = document.querySelector('.shop__cart-empty-button');
	const shoppingCartTotal = document.querySelector('.shop__cart-total');
	const checkoutElement = document.querySelector('.checkout');

	if (checkoutElement) {
		redirectToHomeAfter30Seconds()
	}

	if (shoppingCart) {

		addToCartButtons.forEach(button => {
			button.addEventListener('click', handleAddToCartButtonClick);
		});

		shopCartEmptyButton.addEventListener('click', handleShopCartEmptyButtonClick);
		shopCartCheckoutButton.addEventListener('click', handleShopCartCheckoutButtonClick);
	}
		function handleAddToCartButtonClick(event) {
			const button = event.currentTarget;

			// To make the buttons work on their own inside link tags:
			event.preventDefault();

			addToCart(button);
			render();
		}

		function handleShopCartEmptyButtonClick() {
			emptyCart();
			render();
		}

		function handleShopCartCheckoutButtonClick() {
			checkout();
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

			console.log(clickedButtonDataset);
			// Checks if there is a match in cart. If no match: push whole product, if match: change quantity
			const matchInCart = cartProducts.find(product => product.id === clickedButtonDataset.id);
			
			if (matchInCart) {
				matchInCart.quantity += 1;
			} else {
				cartProducts.push(product);
			}
		}

		function emptyCart() {
			cartProducts = [];
		}

		// Checkout function with redirection to shop page after checkout complete
		function checkout() {
			window.location.href = '../checkout/'; 
		}

		function redirectToHomeAfter30Seconds() {
			setTimeout(() => {
				window.location.href = '../shop/';
			}, 10000)
		}

		function createProductItemDOM() {
			shopCartContentProducts.innerText = '';

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
				shopCartItemPrice.innerText = `${cartProduct.price * cartProduct.quantity} NOK`;
	
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

		function render() {
			if (cartProducts.length > 0) {
				const totalItems = cartProducts.reduce((total, currentProduct) => {
					return total + currentProduct.quantity;
				}, 0);

				const totalSum = cartProducts.reduce((total, currentProduct) => {
					return total + (currentProduct.price * currentProduct.quantity);
				}, 0);

				shoppingCart.classList.remove('shop__cart--empty');
				shoppingCartTotal.textContent = `${totalItems} items in cart (${totalSum} NOK)`;

			} else {
				shoppingCart.classList.add('shop__cart--empty');
			}

			createProductItemDOM();

		}
	}
