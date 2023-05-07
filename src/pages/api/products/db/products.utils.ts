export interface ProductsConfig {
	_id?: string;
	reference: string;
	name: string;
	description: string;
	price: number;
	taxes: string;
	createdAt?: Date;
	updatedAt?: Date;
}


export function productHasAllKeys(product: any): product is ProductsConfig {
	const requiredKeys: (keyof ProductsConfig)[] = [
		"reference",
		"name",
		"description",
		"price",
		"taxes"
	];

	return requiredKeys.every(key => key in product);
}