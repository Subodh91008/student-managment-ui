export class SignupRequest {
    firstName: string;
    lastName: string;
    phone: string;
    gender: string;
    email: string;
    password: string;

    constructor(
        firstName: string,
        lastName: string,
        phone: string,
        gender: string,
        email: string,
        password: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.gender = gender;
        this.email = email;
        this.password = password;
    }
}