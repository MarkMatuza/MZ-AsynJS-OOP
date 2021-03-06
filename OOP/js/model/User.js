class User {
    #firstName;
    #lastName;
    #email;

    constructor(firstName, lastName, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
    }

    getFullName()  {
        return this.#firstName + " " + this.#lastName;
    }

    getEmail() {
        return this.#email;
    }
}

export default User
