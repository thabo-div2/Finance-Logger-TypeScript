// classes
export class Invoice {
    constructor(uid, c, d, a) {
        this.uid = uid;
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `ID: ${this.uid},Name: ${this.client}, Owes: ${this.amount}, Details: ${this.details}`;
    }
}
