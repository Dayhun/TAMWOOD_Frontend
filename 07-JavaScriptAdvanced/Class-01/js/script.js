import User from "./user.js";
import Student from "./student.js";
import Teacher from "./teacher.js";

let userList = new Map();
let studentList = new Map();
let teacherList = new Map();
let stCounter = 1;
let thCounter = 1;

function addUser(e) {
    e.preventDefault();
    let inputBoxes = document.getElementsByTagName("input");
    let type = document.getElementById("userType").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (type === "student") {
        studentList.set(name, new Student(stCounter, name, email, 0));
        stCounter++;
        tablePoper(type);
    } else {
        teacherList.set(name, new Teacher(thCounter, name, email, "JS"));
        thCounter++;
        tablePoper(type);
        console.log(teacherList);
    }

    for (let inputEl of inputBoxes) {
        inputEl.value = "";
    }
}

document.getElementById("register").addEventListener("click", addUser);

function tablePoper(id) {
    if (id === "student") {
        let stTbody = document.getElementById(id).children[2];
        stTbody.innerHTML = "";
        for (let st of studentList) {
            let tr = document.createElement("tr");
            for (let i in st[1]) {
                let td = document.createElement("td");
                td.append(st[1][i]);
                tr.append(td);
            }
            stTbody.append(tr);
        }
    } else {
        // way 1.
        let thTbody = document.getElementById(id).children[2];
        thTbody.innerHTML = "";
        for (let th of teacherList) {
            let tr = document.createElement("tr");
            for (let i in th[1]) {
                let td = document.createElement("td");
                td.append(th[1][i]);
                tr.append(td);
            }
            thTbody.append(tr);
        }
        // way 2.
        // let thTbody = document.getElementById(id).children[2];
        // thTbody.innerHTML = "";
        // for (let th of teacherList) {
        //     let tr = "<tr>";
        //     for (let i in th[1]) {
        //         tr += `<td>${th[1][i]}</td>`;
        //     }
        //     tr += "</tr>";
        //     thTbody.innerHTML += tr;
        // }
    }
}
// let counter = 1;
// let userList = new Map();
// function insertUser(e) {
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     userList.set(name, new User(counter, name, email));
//     counter++;
//     console.log(userList);
//     // console.log(name, email);
// }
// document.getElementById("register").addEventListener("click", insertUser);
// let guilherme = new User(1, "Guilherme2", "info@mail.com");
// let studentList = new Map([
//     ["Guilherme", new User(1, "Guilherme", "info@mail.com")],
//     ["Monika", new User(2, "Monika", "info2@mail.com")],
//     ["Guilherme2", guilherme],
// ]);

// console.log(studentList.get("Guilherme").getName()); //'Guilherme'

// for (let student of studentList) {
//     console.log(student);
//     // ['Guilherme', User]
//     // ['Monika', User]
//     // ['Guilherme2', User]
//     console.log(student[0]);
//     // Guilherme
//     // Monike
//     // Guilherme2
//     console.log(student[1]);
//     // User {#id: 1, #name: 'Guilherme', #email: 'info@mail.com'}
//     // User {#id: 2, #name: 'Monika', #email: 'info2@mail.com'}
//     // User {#id: 1, #name: 'Guilherme2', #email: 'info@mail.com'}
//     let h1 = document.createElement("h1");
//     h1.textContent = student[1].getName();
//     document.body.appendChild(h1);
// }

// let studentList2 = new Map([["Pedro", "1|Pedro|pedro@mail.com|male"]]);
// console.log(studentList2.get("Pedro").split("|")); // ['Pedro', 'pedro@mail.com','male']
