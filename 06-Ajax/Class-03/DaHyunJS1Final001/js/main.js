import User from "./User.js";
let users = null;
let deps = null;
let employees = new Map();
$.getJSON("http://127.0.0.1:5500/DaHyunJS1Final001/data/dep.json", (data) => {
    deps = data;
});
$.getJSON("http://127.0.0.1:5500/DaHyunJS1Final001/data/emp.json", (data) => {
    // console.log(deps);
    users = data;
    users.forEach((user) => {
        let selectedDep = null;
        for (let i = 0; i < 10; i++) {
            if (user.dep_id == deps[i].dep_id) {
                selectedDep = deps[i];
                // console.log(selectedDep)
            }
        }
        let emp = new User(
            user.id,
            user.first_name,
            user.last_name,
            user.email,
            user.dep_id,
            selectedDep.dep_name,
            selectedDep.base_salary,
            selectedDep.dep_number
        );
        employees.set(user.id, emp);
    });
    let thead = $("<thead></thead>");
    let titles = [
        "ID",
        "First Name",
        "Last Name",
        "Email",
        "Department ID",
        "Department",
        "Salary",
        "Department Number",
    ];
    let tr = $("<tr></tr>");
    for (let val of titles) {
        let td = $("<td></td>");
        td.append(val);
        tr.append(td);
    }
    thead.append(tr);
    let tbody = $("<tbody></tbody>");
    $("table").append(thead, tbody);
    tablePoper();
});
let tablePoper = () => {
    $("tbody").empty();
    for (let emp of employees.values()) {
        // console.log(emp);
        let tr = emp.toTable();
        let td = $("<td></td>");
        let btEdit = $("<button>Edit</button>");
        let btDel = $("<button>Delete</button>");
        td.append(btEdit, btDel);
        tr.append(td);
        $("tbody").append(tr);
        btEdit.click(edit);
        btDel.click(deleteHandler);
    }
};
let edit = (e) => {
    console.log($(e.target).parent().parent().children().eq(3).text());
    let inputBoxes = $("#editModal .modal-body").children();
    inputBoxes
        .eq(0)
        .text($(e.target).parent().parent().children().eq(0).text());
    inputBoxes.eq(1).val($(e.target).parent().parent().children().eq(3).text());
    inputBoxes.eq(2).val($(e.target).parent().parent().children().eq(6).text());
    $("#editModal").show();
};
let closeEdit = () => {
    $("#editModal").hide();
};
let save = () => {
    let inputBoxes = $("#editModal .modal-body").children();
    let uid = parseInt(inputBoxes.eq(0).text());
    let selectedEmployee = employees.get(uid);
    selectedEmployee.email = inputBoxes.eq(1).val();
    selectedEmployee.base_salary = inputBoxes.eq(2).val();
    tablePoper();
    closeEdit();
};
let deleteHandler = (e) => {
    let dId = $(e.target).parent().parent().children().eq(0).text()
    employees.delete(dId);
    tablePoper();
};
$("#editModal .close").click(closeEdit);
$("#editModal .modal-footer").children().eq(1).click(closeEdit);
$("#editModal .modal-footer").children().eq(0).click(save);
