import { Product } from "../models/Product.js";
export class APIProducts {
	static async load() {
		const response = await fetch("https://dummyjson.com/products?limit=5");
		const data = await response.json();
		const arrDataProducts = data.products;
		const newArrProducts = [];

		for (const item of arrDataProducts) {
			const product = new Product(
				item.images[0],
				item.title,
				item.stock,
				item.price,
				item.id,
			);

			newArrProducts.push(product);
		}

		return newArrProducts;
	}
}
