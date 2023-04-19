import User from "./user.js";
// Variables that hold data files
let dataFileTxt = "./data/data.txt";
let dataFileCsv = "./data/data.csv";

// Default jQuery method to create a function
jQuery.extend({
    // getData will be the function name that will be called
    // url will be the required property from the function
    getData: function (url) {
        // Result variable will be returned when get the data from the file/API
        let result = null;
        // call the ajax function and set the values
        $.ajax({
            type: "GET", // Type of HTTP Request (Get/Post/Put/Delete)
            docType: "text", // Data type that will be returned
            async: false, // Not async
            url: url, // The URL provided in getData() function
            success: function (data) {
                // If everything is Okay, will return data
                result = data;
                // console.log(result);
            },
            error: function (xhr, status, error) {
                // If it is not, will return error
                // console.log(error);
                result = xhr.status;
            },
        });
        return result; // Return the data required
    },
});

let doc = $.getData(dataFileCsv);
// try {
//     if (doc == "404") {
//         throw new Exception("File was not Found");
//     } else {
//         console.log(doc);
//     }
// } catch (exc) {
//     console.log(exc.message);
// }

let userList = new Map();
// get each row data
function splitRow(bigString) {
    let row = bigString.split("\n");
    for (let i = 1; i < row.length - 1; i++) {
        //without header i=1, without empty line 12 in data file row.length-1
        splitIntoCols(row[i]);
    }
    console.log(userList);
}

function splitIntoCols(stringCol) {
    let user = stringCol.split(",");
    // create new user
    let objUser = new User(
        user[0],
        user[1],
        user[2],
        user[3],
        user[4],
        user[5]
    );
    userList.set(objUser.getId(), objUser); // set the key and value to the Map.
}

splitRow(doc);
