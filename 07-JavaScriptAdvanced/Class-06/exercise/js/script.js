jQuery.extend({
    getJsonData: function (urlFilePath) {
        let result = null;
        $.ajax({
            docType: "json",
            async: false,
            type: "GET",
            url: urlFilePath,
            success: function (data) {
                result = data;
            },
            error: function (xhr, status, error) {
                console.error(
                    `You have an error in your file.\n Message : ${status}`
                );
            },
        });
        return result; 
    },
});

const urlStudentFile = "./data/students.json";
let studentsList = $.getJsonData(urlStudentFile);
console.log(studentsList);

function StudentTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Coursework</th>
                    <th>MidTerm</th>
                    <th>Final Exam</th>
                    <th>Final Project</th>
                    <th colSpan="2">Total</th>
                </tr>
            </thead>
            <tbody>
                {studentsList.map((student) => (
                    <StudentTableRow
                        id={student.id}
                        fullName={student.fullName}
                        coursework={student.coursework}
                        midTerm={student.midTerm}
                        finalExam={student.finalExam}
                        finalProject={student.finalProject}
                        key={student.id}
                    />
                ))}
            </tbody>
        </table>
    );
}

function StudentTableRow(props) {
    let total =
        (props.coursework +
            props.midTerm +
            props.finalExam +
            props.finalProject) /
        4;
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.fullName}</td>
            <td>{props.coursework}</td>
            <td>{props.midTerm}</td>
            <td>{props.finalExam}</td>
            <td>{props.finalProject}</td>
            <td>{total}</td>
            <td>
                <button name={props.id}>Edit Student</button>
            </td>
        </tr>
    );
}

function FormEditStudent(props) {
    // const submit = function (event) {
    //     event.preventDefault();
    // };
    return (
        <form className="hidden">
            <input
                type="text"
                name="studentName"
                id="studentName"
                placeholder="Student Name"
            />
            <input
                type="number"
                name="coursework"
                id="coursework"
                placeholder="CourseWork"
            />
            <input
                type="number"
                name="midTerm"
                id="midTerm"
                placeholder="MidTerm"
            />
            <input
                type="number"
                name="finalExam"
                id="finalExam"
                placeholder="Final Exam"
            />
            <input
                type="number"
                name="finalProject"
                id="finalProject"
                placeholder="Final Project"
            />
            <input type="submit" value="Update Student" />
        </form>
    );
}

function App() {
    let studentId = -1;
    $("table").ready(function () {
        $("button").click(function () {
            $("form").show();
            // console.log(studentsList[this.name-1])
            $("#studentName").val(studentsList[this.name - 1].fullName);
            $("#coursework").val(studentsList[this.name - 1].coursework);
            $("#midTerm").val(studentsList[this.name - 1].midTerm);
            $("#finalExam").val(studentsList[this.name - 1].finalExam);
            $("#finalProject").val(studentsList[this.name - 1].finalProject);
            studentId = this.name - 1;
        });
    });

    $("form").ready(function () {
        $('[type = "submit"]').click(function (event) {
            event.preventDefault();
            let name = $("#studentName").val();
            let coursework = $("#coursework").val();
            let midTerm = $("midTerm").val();
            let finalExam = $("finalExam").val();
            let finalProject = $("finalProject").val();
            studentsList[studentId].fullName = name;
            studentsList[studentId].coursework = coursework;
            studentsList[studentId].midTerm = midTerm;
            studentsList[studentId].finalExam = finalExam;
            studentsList[studentId].finalProject = finalProject;
        });
    });

    return (
        <React.Fragment>
            <FormEditStudent />
            <StudentTable />
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
