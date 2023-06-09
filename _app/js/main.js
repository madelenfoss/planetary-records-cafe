import menuToggle from "./modules/menuToggle.js";
import toTopButton from "./modules/toTopButton.js";
import shopItems from "./modules/shopItems.js"; 
import productDetails from "./modules/productDetails.js";
import staffPersons from "./modules/staff.js";
import slideshow from "./modules/slideshow.js";
import vinylFilterToggle from "./modules/vinylFilterToggle.js";
import shoppingCart from "./modules/shoppingCart.js";

menuToggle();
toTopButton();
slideshow();
// await to fetch the products from sanity before shoppingCart runs:
await shopItems(); 
await productDetails(); 
staffPersons();
vinylFilterToggle();
shoppingCart();


