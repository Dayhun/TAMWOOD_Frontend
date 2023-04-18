// Inheritance
import User from "./user.js";
class Student extends User {
    // Student is child of User
    marks;

    constructor(id, name, email, marks) {
        super(id, name, email);
        // == this.#id; this.#name; this.#email
        this.marks = marks;
    }

    getMarks() {
        return this.marks;
    }

    setMarks(marks) {
        this.marks = marks;
    }
}

export default Student;
