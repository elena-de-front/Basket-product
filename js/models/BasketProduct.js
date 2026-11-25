import { Product } from "./Product.js";

export class BasketProduct extends Product {
	constructor(photo, name, quantity, price, id) {
		super(photo, name, quantity, price, id);
	}
	getLayout() {
		const card = super.getLayout();
		card.querySelector(".btn-basket").remove();
		card.querySelector(".btn-remove").classList.add("btn-remove--active");
		return card;
	}
}
