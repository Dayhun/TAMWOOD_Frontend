import Student from "./student.js";
import Teacher from "./teacher.js";
let studentList = new Map();
let teacher = null;
let sid = 1;

// STUDENT FORM INPUT DISABLED
$("form").eq(1).children().prop("disabled", true);

// CLOSE MODAL FUNCTION
let closeEdit = () => {
    $("#editModal").hide();
};

// SAVE MODAL FUNCTION
let save = () => {
    let inputBoxes = $("#editModal .modal-body").children();
    // STUDENT ID IN H4 TAG
    let sid = parseInt(inputBoxes.eq(0).text());
    // GET STUDENT INFO BY STUDENT ID
    let selectedStudent = studentList.get(sid);
    selectedStudent.sfname = inputBoxes.eq(1).val();
    selectedStudent.slname = inputBoxes.eq(2).val();
    selectedStudent.score1 = inputBoxes.eq(3).val();
    selectedStudent.score2 = inputBoxes.eq(4).val();
    selectedStudent.score3 = inputBoxes.eq(5).val();
    // RESET & MAKE TABLE AGAIN
    tablePoper();
    // CLOSE THE MODAL AFTER SAVE
    closeEdit();
};

// SAVE INVOICE
let saveInvoice = () => {
    if (studentList.size == 0) {
        alert("No information");
    } else {
        let studentArray = new Array();
        for (let i of studentList.values()) {
            studentArray.push(i.toJson());
        }
        teacher.saveInfo(studentArray);
        reset();
    }
};

// MAKE IT TO INITIAL PAGE
let reset = () => {
    $("form input").val("");
    studentList.clear();
    tablePoper();
    teacher = null;
    $("form").children().prop("disabled", true);
    $("form").eq(0).find("input").prop("disabled", false);
    $("form").eq(0).find("button").eq(0).prop("disabled", false);
};

// MODAL
$("#editModal .close").click(closeEdit);
$("#editModal .modal-footer").children().eq(1).click(closeEdit);
$("#editModal .modal-footer").children().eq(0).click(save);

// TEACHER FORM > SAVE BTN
$("form").eq(0).find("button").eq(1).click(saveInvoice);

// TEACHER FORM > TEACHER ID INPUT
$("form")
    .eq(0)
    .find("input")
    .eq(0)
    .change((e) => {
        // GET DATA FROM LOCAL STORAGE
        let details = localStorage.getItem($(e.target).val());
        // IF THERE IS SOME DATA,
        if (details != null) {
            details = JSON.parse(details);
            teacher = new Teacher(details.tid, details.tname);
            for (let item of details.sList) {
                let student = new Student(
                    item.sid,
                    item.slname,
                    item.sfname,
                    item.score1,
                    item.score2,
                    item.score3
                );
                studentList.set(item.sid, student);
            }
            // GET TEACHER NAME AUTOMATICALLY
            $(e.target).next().val(details.tname);
        }
    });

// TEACHER FORM SUBMIT
$("form")
    .eq(0)
    .submit((e) => {
        // BLOCK TO REFRESH THE PAGE
        e.preventDefault();
        if (teacher != null) {
            tablePoper();
        } else {
            let children = $(e.target).children();
            let tid = children.eq(0).val();
            let tname = children.eq(1).val();
            teacher = new Teacher(tid, tname);
        }
        $(e.target).children().prop("disabled", true);
        // ONLY SAVE BTN AVAILABLE IN TEACHER FORM
        $(e.target).find("button").eq(1).prop("disabled", false);
        // STUDENT FORM CHILDREN AVAILABLE
        $("form").eq(1).children().prop("disabled", false);
    });

// STUDENT FORM SUBMIT
$("form")
    .eq(1)
    .submit((e) => {
        // BLOCK TO REFRESH THE PAGE
        e.preventDefault();
        let children = $(e.target).children();
        let sfname = children.eq(0).val();
        let slname = children.eq(1).val();
        let score1 = children.eq(2).val();
        let score2 = children.eq(3).val();
        let score3 = children.eq(4).val();
        // MAKE INPUT TEXT EMPTY
        $("form input").val("");
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
    });

// TABLE MAKER
let tablePoper = () => {
    $("tbody").empty();
    $("tfoot td").empty();
    for (let i of studentList.values()) {
        let tr = i.toTr();
        let editBtn = $("<button>Edit</button>");
        editBtn.click(() => edit(i.sid));
        let deleteBtn = $("<button>Delete</button>");
        deleteBtn.click(() => deleteHandler(i.sid));
        tr.append(editBtn, deleteBtn);
        $("tbody").append(tr);
    }
    $("tfoot td")[0].append(average(3));
    $("tfoot td")[1].append(average(4));
    $("tfoot td")[2].append(average(5));
};

// SCORE AVERAGE FUNCTION
let average = (idx) => {
    let scores = 0;
    for (let i of studentList.values()) {
        scores += i.toArray()[idx];
    }
    let result = scores / studentList.size;
    return result.toFixed(2);
};

// DELETE STUDENT INFO
let deleteHandler = (sid) => {
    studentList.delete(sid);
    tablePoper();
};

// EDIT STUDENT INFO
let edit = (sid) => {
    let inputBoxes = $("#editModal .modal-body").children();
    let selectedStu = studentList.get(sid);
    inputBoxes.eq(0).text(selectedStu.sid);
    inputBoxes.eq(1).val(selectedStu.slname);
    inputBoxes.eq(2).val(selectedStu.sfname);
    inputBoxes.eq(3).val(selectedStu.score1);
    inputBoxes.eq(4).val(selectedStu.score2);
    inputBoxes.eq(5).val(selectedStu.score3);
    $("#editModal").show();
};
