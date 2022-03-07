import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// type casting
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

//  inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

// UID
const uid = Math.floor(Math.random() * 100000);

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();

	let doc: HasFormatter;

	if (type.value === "invoice") {
		doc = new Invoice(uid, toFrom.value, details.value, amount.valueAsNumber);
	} else {
		doc = new Payment(uid, toFrom.value, details.value, amount.valueAsNumber);
	}
	console.log(doc);
	list.render(doc, type.value, "end");
});
