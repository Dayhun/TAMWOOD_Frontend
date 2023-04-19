class User {
    #id;
    #first_name;
    #last_name;
    #email;
    #gender;
    #country;

    constructor(id, firstName, lastName, email, gender, country) {
        this.#id = id;
        this.#first_name = firstName;
        this.#last_name = lastName;
        this.#email = email;
        this.#gender = gender;
        this.#country = country;
    }

    getId() {
        return this.#id;
    }

    getFirstName() {
        return this.#first_name;
    }

    setFirstName(fName) {
        this.#first_name = fName;
    }

    getLastName() {
        return this.#last_name;
    }

    setLastName(lName) {
        this.#last_name = lName;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(email) {
        this.#email = email;
    }

    getCountry() {
        return this.#country;
    }

    setCountry(country) {
        this.#country = country;
    }
}

export default User;
