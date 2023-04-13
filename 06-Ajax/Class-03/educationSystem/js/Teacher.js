import Student from "./Student.js";
class Teacher{
    #tid;
    #fname;
    #lname;
    #email;
    #students = new Map();
    constructor(tid,fname,lname,email){
        this.#tid = tid;
        this.#fname = fname;
        this.#lname = lname;
        this.#email = email;
    }
    addStudent(studentObj){
        let newSt = new Student(studentObj.stid,studentObj.first_name,studentObj.last_name,studentObj.email,this.#tid);
        let courses = ["html","css","js1","js2","php","cms"];
        for(let key in studentObj){
            if(courses.indexOf(key)>-1){
                newSt.inputMark(studentObj[key]);
            }
        }
        // save
        this.#students.set(studentObj.stid,newSt);
    }
}
export default Teacher;