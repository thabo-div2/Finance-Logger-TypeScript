import { HasFormatter } from "../interfaces/HasFormatter.js";
// classes
export class Payment implements HasFormatter {
	uid: number;
	recipient: string;
	details: string;
	amount: number;

	constructor(uid: number, r: string, d: string, a: number) {
		this.uid = uid;
		this.recipient = r;
		this.details = d;
		this.amount = a;
	}

	format() {
		return `ID: ${this.uid}, Name: ${this.recipient}, Paid: ${this.amount}, Details: ${this.details}`;
	}
}
