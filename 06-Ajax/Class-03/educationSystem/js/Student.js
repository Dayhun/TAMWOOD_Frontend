class Student{
    #stid;
    #fname;
    #lname;
    #email;
    #marks = new Array();
    #tid;
    constructor(stid,fname,lname,email,tid){
        this.#stid = stid;
        this.#fname = fname;
        this.#lname = lname;
        this.#email = email;
        this.#tid = tid;
    }
    inputMark(mark){
        this.#marks.push(mark);
    }
    avg(){
        let sum = 0;
        for(let mark of this.#marks){
            sum += mark;
        }
        return sum / this.#marks.length;
    }
};
export default Student;