import { Product } from "./product";

export interface Cart {
	items: Product[],
	nb_items: number,
	total: number
}