class User {
    #id;
    #fname;
    #lname;
    #email;
    #depid;
    #depName;
    #salary;
    #depNum;
    constructor(id, fname, lname, email, depid, depName, salary, depNum) {
        this.#id = id;
        this.#fname = fname;
        this.#lname = lname;
        this.#email = email;
        this.#depid = depid;
        this.#depName = depName;
        this.#salary = salary;
        this.#depNum = depNum;
    }
    toObject() {
        return {
            "ID:": this.#id,
            "First Name:": this.#fname,
            "Last Name:": this.#lname,
            "Email:": this.#email,
            "Department ID:": this.#depid,
            "Department:": this.#depName,
            "Salary:": this.#salary,
            "Department Number:": this.#depNum,
        };
    }
    toTable() {
        let details = this.toObject();
        let tr = $("<tr></tr>");
        for (let key in details) {
            let td = $("<td></td>");
            td.append(details[key]);
            tr.append(td);
        }
        return tr;
    }
}
export default User;
