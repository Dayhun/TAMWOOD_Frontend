class Teacher {
    #teacherid;
    #teacherName;
    constructor(teacherid, teacherName) {
        this.#teacherid = teacherid;
        this.#teacherName = teacherName;
    }
    saveInfo(students) {
        let teacherDetails = {
            tid: this.#teacherid,
            tname: this.#teacherName,
            sList: students,
        };
        localStorage.setItem(this.#teacherid, JSON.stringify(teacherDetails));
    }
}
export default Teacher;
