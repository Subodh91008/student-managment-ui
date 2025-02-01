export class Student {
    sid: number;
    name: string;
    rollnumber: string;
    subject: string;
    address: string;
    phone: string;
    email: string;

    constructor(
        sid: number,
        name: string,
        rollnumber: string,
        subject: string,
        address: string,
        phone: string,
        email: string
    ) {
        this.sid = sid;
        this.name = name;
        this.rollnumber = rollnumber;
        this.subject = subject;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
}