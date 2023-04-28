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
                console.error(`error : ${status}`);
            },
        });
        return result;
    },
});

const urlStudentFile = "./data/student.json";
let studentList = $.getJsonData(urlStudentFile);
// console.log(studentList);

function Calendar() {
    return (
        <section>
            <h2>May</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td className="tdHover">1</td>
                        <td className="tdHover">2</td>
                        <td className="tdHover">3</td>
                        <td className="tdHover">4</td>
                        <td className="tdHover">5</td>
                        <td className="tdHover">6</td>
                    </tr>
                    <tr>
                        <td className="tdHover">7</td>
                        <td className="tdHover">8</td>
                        <td className="tdHover">9</td>
                        <td className="tdHover">10</td>
                        <td className="tdHover">11</td>
                        <td className="tdHover">12</td>
                        <td className="tdHover">13</td>
                    </tr>
                    <tr>
                        <td className="tdHover">14</td>
                        <td className="tdHover">15</td>
                        <td className="tdHover">16</td>
                        <td className="tdHover">17</td>
                        <td className="tdHover">18</td>
                        <td className="tdHover">19</td>
                        <td className="tdHover">20</td>
                    </tr>
                    <tr>
                        <td className="tdHover">21</td>
                        <td className="tdHover">22</td>
                        <td className="tdHover">23</td>
                        <td className="tdHover">24</td>
                        <td className="tdHover">25</td>
                        <td className="tdHover">26</td>
                        <td className="tdHover">27</td>
                    </tr>
                    <tr>
                        <td className="tdHover">28</td>
                        <td className="tdHover">29</td>
                        <td className="tdHover">30</td>
                        <td className="tdHover">31</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

function CalendarDate() {
    // let i = null;
    // // let j = null;
    // let tr = $("<tr></tr>");
    // for (i=0; i<5; i++){
    // //     for (j = 1; j < 32; j++) {
    // //         let td = $('<td></td>');
    // //         td.append(j);
    // //         tr.append(td);
    // //         // console.log(`week: ${i}`);
    // //         // $('tbody').append(tr)
    // //         // for (j = 1; j < 32; j++) {
    // //         //     return (
    // //         //         <td>{i}</td>
    // //         //     );
    // //         // }
    // //     }
    // //     return tr;
    // }
    // $('tbody').append(tr)
    // // return (
    // //     <tr>
    // //         <td>{i}</td>
    // //         <td>{i}</td>
    // //         <td>{i}</td>
    // //         <td>{i}</td>
    // //         <td>{i}</td>
    // //         <td>{i}</td>
    // //     </tr>
    // // );
}

let studentNameArray = [];
function AppointmentForm() {
    return (
        <article>
            <h4>Please select a date and book an appointment.</h4>
            <form>
                <input type="date" />
                <label htmlFor="stName">Student Name : </label>
                <select name="stName" id="stName">
                    {studentList.map((student) => (
                        <StudentOption
                            id={student.id}
                            studentName={student.studentName}
                            key={student.id}
                            email={student.email}
                        />
                    ))}
                </select>
                <input type="submit" value="Assign the event" />
            </form>
        </article>
    );
}

function StudentOption(props) {
    return <option value={props.id}>{props.studentName}</option>;
}

function ResultForm(nameInput){
    console.log(`rsult: ${nameInput}`)
    return(
        <article>
            <h4>Student Select: {nameInput}</h4>
        </article>
    )
}

function App() {
    $("form").ready(function () {
        $('[type = "submit"]').click(function (event) {
            event.preventDefault();
            let dateInput = $("[type=date]").val();
            let nameInput = $("select[name=stName] option:selected").text()
            console.log(nameInput)
            let start = dateInput.indexOf("-");
            let end = dateInput.indexOf("-", start + 1);
            let may = dateInput.substring(start + 1, end);
            if (may != "05") {
                alert("Select On May!");
            } else {
                console.log("its may");
                let date = dateInput.slice(-2);
                console.log(date);
                let td = $("td");
                td.each(function (i) {
                    if (td.eq(i).text() == date) {
                        td.eq(i).css({ "background-color": "orange" });
                        // console.log(td.eq(i))
                    }
                });
                <ResultForm nameInput/>
            }
        });
    });
    return (
        <React.Fragment>
            <Calendar />
            <AppointmentForm />
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
