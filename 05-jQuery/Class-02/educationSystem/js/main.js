import Student from "./student.js";
let studentList = new Map();
let sid = 1;
$("form")
    .eq(0)
    .submit((e) => {
        e.preventDefault();
        let children = $(e.target).children();
        let sfname = children.eq(0).val();
        let slname = children.eq(1).val();
        let score1 = children.eq(2).val();
        let score2 = children.eq(3).val();
        let score3 = children.eq(4).val();
        $("form input").val("");
        if (
            sfname == "" ||
            slname == "" ||
            score1 == "" ||
            score2 == "" ||
            score3 == ""
        ) {
            alert("Please fill the blank!");
        } else {
            sid += studentList.size;
            let newStudent = new Student(
                sid,
                sfname,
                slname,
                score1,
                score2,
                score3
            );
            studentList.set(sid, newStudent);
            tablePoper();
        }
    });

let tablePoper = () => {
    $("tbody").empty();
    $("tfoot td").empty();
    for (let i of studentList.values()) {
        $("tbody").append(i.toTr());
    }
    $("tfoot td")[0].append(average(3));
    $("tfoot td")[1].append(average(4));
    $("tfoot td")[2].append(average(5));
};

let average = (idx) => {
    let scores = 0;
    for (let i of studentList.values()) {
        scores += i.toArray()[idx];
    }
    let result = scores / studentList.size;
    return result.toFixed(2);
};
