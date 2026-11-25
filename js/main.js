import { Basket } from "./models/Basket.js";
import { APIProducts } from "./api/APIProducts.js";

document.addEventListener("DOMContentLoaded", async () => {
	const layoutHome = document.createElement("div");
	const hProduct = document.createElement("h1");
	const divCardsProcucts = document.querySelector(".products");

	const newArrProducts = await APIProducts.load();

	const basket = new Basket();

	for (const product of newArrProducts) {
		const card = product.getLayout();
		const btnBasket = card.querySelector(".btn-basket");

		btnBasket.addEventListener("click", () => {
			const isProductInBasket = basket.products.some(
				(product) => product.id === Number(card.dataset.cardId),
			);

			if (!isProductInBasket) {
				basket.addProduct(product);
			}
			btnBasket.textContent = "♥";
		});

		divCardsProcucts.append(card);
	}

	hProduct.textContent = "Products";
	layoutHome.append(hProduct, divCardsProcucts);
	document.body.append(layoutHome);

	const layoutBasket = document.createElement("div");
	layoutBasket.classList.add("products");

	const hBasket = document.createElement("h1");
	hBasket.textContent = "Basket";

	layoutBasket.append(hBasket);

	const linkHome = document.querySelector(".home_link");

	linkHome.onclick = async () => {
		const cardLayuot = layoutHome.querySelectorAll(".card-product");
		for (const card of cardLayuot) {
			const isProductInBasket = basket.products.some(
				(product) => product.id === Number(card.dataset.cardId),
			);
			const btnBasket = card.querySelector(".btn-basket");
			if (isProductInBasket) {
				btnBasket.textContent = "♥";
			} else {
				btnBasket.textContent = "♡";
			}
		}
		layoutBasket.remove();
		document.body.append(layoutHome);
		layoutBasket.replaceChildren(hBasket);

		
	};

	const linkBasket = document.querySelector(".basket_link");

	linkBasket.onclick = async () => {
		layoutHome.remove();
		layoutBasket.replaceChildren(hBasket);

		for (const product of basket.products) {
			const card = product.getLayout();
			const btnRemove = card.querySelector(".btn-remove");

			layoutBasket.append(card);

			btnRemove.addEventListener("click", (e) => {
				basket.deleteProduct(product);
				e.target.closest(".card-product").remove();
			});
		}

		document.body.append(layoutBasket);

		
	};
});
