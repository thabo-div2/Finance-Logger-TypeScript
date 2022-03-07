import { HasFormatter } from "../interfaces/HasFormatter.js";
// classes
export class Invoice implements HasFormatter {
	uid: number;
	client: string;
	details: string;
	amount: number;

	constructor(uid: number, c: string, d: string, a: number) {
		this.uid = uid;
		this.client = c;
		this.details = d;
		this.amount = a;
	}

	format() {
		return `ID: ${this.uid},Name: ${this.client}, Owes: ${this.amount}, Details: ${this.details}`;
	}
}
