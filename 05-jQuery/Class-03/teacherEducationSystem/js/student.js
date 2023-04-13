class Student {
    #sid;
    #sfname;
    #slname;
    #score1;
    #score2;
    #score3;
    constructor(sid, sfname, slname, score1, score2, score3) {
        this.#sid = sid;
        this.#sfname = sfname;
        this.#slname = slname;
        this.#score1 = parseFloat(score1);
        this.#score2 = parseFloat(score2);
        this.#score3 = parseFloat(score3);
    }
    personalAverage() {
        let result = (this.#score1 + this.#score2 + this.#score3) / 3;
        return result.toFixed(2);
    }
    toArray() {
        return [
            this.#sid,
            this.#sfname,
            this.#slname,
            this.#score1,
            this.#score2,
            this.#score3,
            this.personalAverage(),
        ];
    }
    toTr() {
        let tr = $("<tr></tr>");
        for (let detail of this.toArray()) {
            let td = $("<td></td>");
            td.append(detail);
            tr.append(td);
        }
        return tr;
    }
    toJson() {
        let sDetails = {
            sid: this.#sid,
            sfname: this.#sfname,
            slname: this.#slname,
            score1: this.#score1,
            score2: this.#score2,
            score3: this.#score3,
        };
        return sDetails;
    }
    get sid() {
        return this.#sid;
    }
    get sfname() {
        return this.#sfname;
    }
    set sfname(newFname) {
        if (newFname == "") {
            alert("First name should has a value.");
        } else {
            this.#sfname = newFname;
        }
    }
    get slname() {
        return this.#slname;
    }
    set slname(newLname) {
        if (newLname == "") {
            alert("Last name should has a value.");
        } else {
            this.#slname = newLname;
        }
    }
    get score1() {
        return this.#score1;
    }
    set score1(newScore1) {
        if (newScore1 == "") {
            alert("HTML Score should has a value.");
        } else {
            this.#score1 = parseFloat(newScore1);
        }
    }
    get score2() {
        return this.#score2;
    }
    set score2(newScore2) {
        if (newScore2 == "") {
            alert("CSS Score should has a value.");
        } else {
            this.#score2 = parseFloat(newScore2);
        }
    }
    get score3() {
        return this.#score3;
    }
    set score3(newScore3) {
        if (newScore3 == "") {
            alert("JavaScript Score should has a value.");
        } else {
            this.#score3 = parseFloat(newScore3);
        }
    }
}
export default Student;
