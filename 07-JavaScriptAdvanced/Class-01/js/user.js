// Object
class User {
    // should have to be protected to be use inheritance
    _id;
    _name;
    _email;

    constructor(id, name, email) {
        this._id = id; // get #id from class, and get new element named id
        this._name = name;
        this._email = email;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }
    getEmail() {
        return this._email;
    }

    setEmail(email) {
        this._email = email;
    }
}

export default User;
