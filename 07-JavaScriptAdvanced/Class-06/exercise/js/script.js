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
                    <th>Total</th>
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
        </tr>
    );
}

function App() {
    return (
        <React.Fragment>
            <StudentTable />
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
