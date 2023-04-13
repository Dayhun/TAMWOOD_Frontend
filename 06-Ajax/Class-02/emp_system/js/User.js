class User {
    #id;
    #fname;
    #lname;
    #email;
    #depid;
    #salary;
    #depName;
    #depNum;
    constructor(id, fname, lname, email, depid, salary, depName, depNum) {
        this.#id = id;
        this.#fname = fname;
        this.#lname = lname;
        this.#email = email;
        this.#depid = depid;
        this.#depName = depName;
        this.#depNum = depNum;
        this.#salary = salary;
    }
    toObject() {
        return {
            "ID:": this.#id,
            "Full name:": `${this.#fname}${this.#lname}`,
            "Email:": this.#email,
            "Department:": this.#depName,
            "Salary:": this.#salary,
            "Department Phone:": this.#depNum,
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
    toDisplay() {
        let details = {
            "ID:": this.#id,
            "Full name:": `${this.#fname}${this.#lname}`,
            "Email:": this.#email,
            "Department:": this.#depName,
            "Salary:": this.#salary,
            "Department Phone:": this.#depNum,
        };
        let tbody = $("<tbody></tbody>");
        for (let det in details) {
            let tr = $("<tr></tr>");
            let tdTitle = $("<td></td>");
            let tdVal = $("<td></td>");
            tdTitle.append(det);
            tdVal.append(details[det]);
            tr.append(tdTitle, tdVal);
            tbody.append(tr);
        }
        return tbody;
    }
}
export default User;
