// npm init -y
// npm i
// node fileManager.js
const filePath = "./data/data.json";
const fileManager = require("fs");
const { stringify } = require("querystring");

let studentList = null;
fileManager.readFile(filePath, "utf-8", function (error, data) {
    if (error) {
        console.log("I couldn't read the file");
    }
    // } else {
    //     console.log(JSON.parse(data));
    // }
    let newStudent = {
        'name':'Aya',
        'position':'CEO',
        'email':'aya@gmail.com'

    };
    studentList=JSON.parse(data);
    studentList.push(newStudent);
    fileManager.writeFileSync(filePath,JSON.stringify(studentList))
    console.log(studentList)
});

