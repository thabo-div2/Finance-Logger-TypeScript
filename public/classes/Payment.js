// classes
export class Payment {
    constructor(uid, r, d, a) {
        this.uid = uid;
        this.recipient = r;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `ID: ${this.uid}, Name: ${this.recipient}, Paid: ${this.amount}, Details: ${this.details}`;
    }
}
