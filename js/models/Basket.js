import { BasketProduct } from "./BasketProduct.js";

export class Basket {
	#products;

	constructor() {
		this.#products = [];
		console.log(localStorage.getItem("basket"));
		const arrProducts = JSON.parse(localStorage.getItem("basket")) || [];

		for (const product of arrProducts) {
			const newProduct = new BasketProduct(
				product.photo,
				product.name,
				product.quantity,
				product.price,
				product.id,
			);

			this.#products.push(newProduct);
		}
	}

	get products() {
		return this.#products;
	}

	json() {
		let s = "[";

		if (this.#products.length === 0) {
			return "[]";
		}

		for (let i = 0; i < this.#products.length; i++) {
			const product = this.#products[i];

			if (i < this.#products.length - 1) {
				s += `${product.json()},`;
			} else {
				s += `${product.json()}]`;
			}
		}

		return s;
	}

	addProduct(product) {
		const newProduct = new BasketProduct(
			product.photo,
			product.name,
			product.quantity,
			product.price,
			product.id,
		);
		this.#products.push(newProduct);
		localStorage.setItem("basket", this.json());
	}

	deleteProduct(product) {
		const index = this.#products.indexOf(product);

		if (index !== -1) {
			this.#products.splice(index, 1);
			localStorage.setItem("basket", this.json());
		}
	}
}
