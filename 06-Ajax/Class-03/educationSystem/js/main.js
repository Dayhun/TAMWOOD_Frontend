import Student from "./Student.js";
import Teacher from "./Teacher.js";
let loginStudent;
let loginTeacher;
let students = null;
let teachers = null;
$.getJSON("http://127.0.0.1:5500/06-Ajax/Class-03/educationSystem/data/student.json",(data)=>{
    students = data;
});
$.getJSON("http://127.0.0.1:5500/06-Ajax/Class-03/educationSystem/data/teacher.json",(data)=>{
    teachers = data;
});

$("form").submit((e)=>{
    e.preventDefault();
    let inputBoxes = $(e.target).find("input");
    if($("form select").val() == "0"){
        teachers.forEach((teacher)=>{
            if(teacher.email == inputBoxes.eq(0).val() && teacher.pass == inputBoxes.eq(1).val()){
                loginTeacher = new Teacher(teacher.teacherid,teacher.first_name,teacher.last_name,teacher.email);
                students.forEach((st)=>{
                    if(st.teacherid == teacher.teacherid){
                        loginTeacher.addStudent(st);
                    }
                })
                console.log(loginTeacher);
                return false;
            }
        })
    }else{
        students.forEach((st)=>{
            if(st.email == inputBoxes.eq(0).val() && st.pass == inputBoxes.eq(1).val()){
                // from json
                loginStudent = new Student(st.stid,st.first_name,st.last_name,st.email,st.teacherid);
                let courses = ["html","css","js1","js2","php","cms"];
                for(let key in st){
                    if(courses.indexOf(key)>-1){
                        loginStudent.inputMark(st[key]);
                    }
                }
                console.log(loginStudent);
                return false;
            }
        })
    }
})