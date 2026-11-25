export class Product {
	#photo;
	#name;
	#quantity;
	#price;
	#id;

	constructor(photo, name, quantity, price, id) {
		this.#photo = photo;
		this.#name = name;
		this.#quantity = quantity;
		this.#price = price;
		this.#id = id;
	}

	get name() {
		return this.#name;
	}

	set price(newPrice) {
		this.#price = newPrice;
	}

	get id() {
		return this.#id;
	}

	get quantity() {
		return this.#quantity;
	}

	get photo() {
		return this.#photo;
	}

	get price() {
		return this.#price;
	}

	getLayout() {
		const divProduct = document.createElement("div");
		divProduct.classList.add("card-product");

		const imgProduct = document.createElement("img");
		imgProduct.classList.add("card-product__img");
		imgProduct.src = this.#photo;

		const pNameProduct = document.createElement("p");
		pNameProduct.classList.add("card-product__name");
		pNameProduct.textContent = this.#name;

		const spanQuantity = document.createElement("span");
		spanQuantity.classList.add("card-product__quantity");
		spanQuantity.textContent = this.#quantity;

		const spanPrice = document.createElement("span");
		spanPrice.classList.add("card-product__price");
		spanPrice.textContent = this.#price;

		const btnBasket = document.createElement("button");
		btnBasket.textContent = "♡";
		btnBasket.classList.add("btn-basket");

		const btnRemoveCard = document.createElement("button");
		btnRemoveCard.textContent = "удалить";
		btnRemoveCard.classList.add("btn-remove");

		divProduct.dataset.cardId = this.#id;

		divProduct.append(
			imgProduct,
			pNameProduct,
			spanQuantity,
			spanPrice,
			btnBasket,
			btnRemoveCard,
		);

		return divProduct;
	}

	json() {
		return `{"photo":"${this.#photo}","name":"${this.#name}","quantity":${this.#quantity},"price":${this.#price}, "id":${this.#id}}`;
	}

	upQuantity() {
		this.#quantity += 1;
	}

	downQuantity() {
		this.#quantity -= 1;
	}
}
