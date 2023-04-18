# JavaScript Advanced

## Map

example 1)

```JavaScript
//script.js
import User from "./user.js";

let guilherme = new User(1, "Guilherme2", "info@mail.com");
let studentList = new Map([
    ["Guilherme", new User(1, "Guilherme", "info@mail.com")],
    ["Monika", new User(2, "Monika", "info2@mail.com")],
    ["Guilherme2", guilherme],
]);

for (let student of studentList) {
    console.log(student); // key, value
    // ['Guilherme', User]
    // ['Monika', User]
    // ['Guilherme2', User]
    console.log(student[0]); // key
    // Guilherme
    // Monike
    // Guilherme2
    console.log(student[1]); // value
    // User {#id: 1, #name: 'Guilherme', #email: 'info@mail.com'}
    // User {#id: 2, #name: 'Monika', #email: 'info2@mail.com'}
    // User {#id: 1, #name: 'Guilherme2', #email: 'info@mail.com'}
    let h1 = document.createElement("h1");
    h1.textContent = student[1].getName();
    document.body.appendChild(h1);
}
```

```js
// user.js
// Object
class User {
    #id;
    #name;
    #email;

    constructor(id, name, email) {
        this.#id = id; // get #id from class, and get new element named id
        this.#name = name;
        this.#email = email;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }
}

export default User;
```

example 2)

```js
// script.js
let studentList2 = new Map([["Pedro", "1|Pedro|pedro@mail.com|male"]]);
console.log(studentList2.get("Pedro").split("|")); // ['1','Pedro', 'pedro@mail.com','male']
```

## Capsulation

1. public

```js
// Object
//user.js
class User {
    id;
    name;
    marks;

    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
}

export default User;
```

2. private

```js
// Object
// user.js
class User {
    #id;
    #name;
    #marks;

    constructor(id, name, marks) {
        this.#id = id; // get #id from class, and get new element named id
        this.#name = name;
        this.#marks = marks;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }
}

export default User;
```

```js
//script.js
import User from "./user.js";

let studentList = new Map([
    ["Guilherme", new User(1, "Guilherme", "info@mail.com")],
    ["Monika", new User(2, "Monika", "info2@mail.com")],
]);

console.log(studentList.get("Guilherme").getName()); //'Guilherme'
```

3. protected

```js
class User {
    _id;
    _name;
    _email;

    constructor(id, name, email) {
        this._id = id;
        this._name = name;
        this._email = email;
    }
}
export default User;
```

```js
import User from "./user.js";

let studentList = new Map([
    ["Guilherme", new User(1, "Guilherme", "info@mail.com")],
    ["Monika", new User(2, "Monika", "info2@mail.com")],
]);

console.log(studentList.get("Guilherme")); //User {#id: 1, #name: 'Guilherme', #marks: 'info@mail.com'}
```

## Way

way 1.

```js
import User from "./user.js";

let studentList = new Map([
    ["Guilherme", new User(1, "Guilherme", "info@mail.com")],
    ["Monika", new User(2, "Monika", "info2@mail.com")],
]);
```

way 2.

```js
import User from "./user.js";

let guilherme = new User(1, "Guilherme", "info@mail.com");
let studentList = new Map([
    ["Monika", new User(2, "Monika", "info2@mail.com")],
    ["Guilherme2", guilherme],
]);
```
