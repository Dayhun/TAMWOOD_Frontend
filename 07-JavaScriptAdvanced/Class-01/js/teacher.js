import User from "./user.js";
class Teacher extends User {
    #studentList = [];
    course;
    constructor(id, name, email, course) {
        super(id, name, email);
        this.course = course;
    }
}
export default Teacher;
