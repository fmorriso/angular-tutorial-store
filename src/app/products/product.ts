export class Product {
	constructor(private _name: string, private _price: number, private _description: string) {}
	public get name(): string {
		return this._name;
	}

	public set name(name: string) {
		this._name = name;
	}

	public get price(): number {
		return this._price;
	}
	public set price(price: number) {
		this._price = price;
	}

	public get description(): string {
		return this._description;
	}
	public set description(description: string) {
		this._description = description;
	}
}
