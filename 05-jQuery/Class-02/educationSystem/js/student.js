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
}
export default Student;
