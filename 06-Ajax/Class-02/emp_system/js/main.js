import User from "./User.js";
let users = null;
let loginUser = null;
let deps = null;
let employees = new Map();
$.getJSON(
    "http://127.0.0.1:5500/06-Ajax/Class-02/emp_system/data/emp.json",
    (data) => {
        users = data;
    }
);
$.getJSON(
    "http://127.0.0.1:5500/06-Ajax/Class-02/emp_system/data/dep.json",
    (data) => {
        deps = data;
    }
);
let edit = (e) => {
    let parentTr = $(e.target).parent().parent();
    for (let i = 1; i < 3; i++) {
        let txt = parentTr.children().eq(i).text();
        parentTr.children().eq(i).empty();
        let input = $("<input/>");
        input.val(txt);
        parentTr.children().eq(i).append(input);
    }
    parentTr.children().eq(6).children().eq(0).remove();
    let saveBtn = $("<button>Save</button>");
    let cancelBtn = $("<button>Cancel</button>");
    parentTr.children().eq(6).prepend(saveBtn, cancelBtn);
};
let adminHandler = () => {
    users.forEach((user) => {
        let selectedDep = null;
        deps.forEach((dep) => {
            if (user.dep_id == dep.dep_id) {
                selectedDep = dep;
                return false;
            }
        });
        let emp = new User(
            user.id,
            user.first_name,
            user.last_name,
            user.email,
            user.dep_id,
            selectedDep.base_salary,
            selectedDep.dep_name,
            selectedDep.dep_number
        );
        employees.set(user.id, emp);
    });
    // make table header
    let thead = $("<thead></thead>");
    let titles = [
        "ID",
        "Full Name",
        "Email",
        "Department",
        "Salary",
        "Department Phone",
    ];
    let tr = $("<tr></tr>");
    for (let val of titles) {
        let td = $("<td></td>");
        td.append(val);
        tr.append(td);
    }
    thead.append(tr);
    let tbody = $("<tbody></tbody>");
    for (let emp of employees.values()) {
        let tr = emp.toTable();
        let td = $("<td></td>");
        let btEdit = $("<button>Edit</button>");
        let btDel = $("<button>Delete</button>");
        td.append(btEdit, btDel);
        tr.append(td);
        tbody.append(tr);
        btEdit.click(edit);
    }

    $("#loginForm").hide();
    $("#detailsTable").show();
    $("table").append(thead, tbody);
};
let filterHandler = () => {
    let key = $("#detailsTable input").val().toLowerCase();
    let idx = parseInt($("#detailsTable select").val());
    $("tbody tr").filter(function () {
        // console.log($(this).children().eq(3).text());
        // console.log($(this).children().eq(3).text().toLowerCase()); // to search all case
        // console.log($(this).children().eq(3).text().toLowerCase().indexOf('books')); // -1 > not exist, 0> exist
        $(this).toggle(
            $(this).children().eq(idx).text().toLowerCase().indexOf(key) > -1
        );
    });
};
$("#detailsTable select").change(filterHandler);
$("#detailsTable input").keyup(filterHandler);
let loginHandler = (e) => {
    e.preventDefault();
    let inputBoxes = $(e.target).children().find("input");
    if (
        inputBoxes.eq(0).val() == "admin@mail.com" &&
        inputBoxes.eq(1).val() == "admin"
    ) {
        adminHandler();
        console.log("admin");
    } else {
        users.forEach((user) => {
            if (
                user.email == inputBoxes.eq(0).val() &&
                user.pass == inputBoxes.eq(1).val()
            ) {
                let selectedDep = null;
                deps.forEach((dep) => {
                    if (dep.dep_id == user.dep_id) {
                        selectedDep = dep;
                        return false;
                    }
                });
                loginUser = new User(
                    user.id,
                    user.first_name,
                    user.last_name,
                    user.email,
                    user.dep_id,
                    selectedDep.base_salary,
                    selectedDep.dep_name,
                    selectedDep.dep_number
                );
                $("#loginForm").hide();
                $("#detailsTable").show();
                $("table").append(loginUser.toDisplay());
                return false;
            }
        });
    }
};
$("form").eq(0).submit(loginHandler);
