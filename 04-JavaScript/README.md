# JavaScript

## 1. What is JavaScript?

JS is the Dynamically Typed Language.
Javascript let frontend make the website to be Dynamic.
Populate html element.
Send the request to the backend. (AJAX)
The lastest version of JavaScript is ES6.

In the HTML, it's better to place the script tag under the body tag.

-   Inline JavaScript

```js
<input type="button" onClick="alert('Are you sure?');" />
```

-   Embedded JavaScript

```js
<script type="text/javascript">alert("Hello World!");</script>
```

-   External JavaScript

```js
<head>
    <script type="text/javascript" src="greeting.js"></script>
</head>
```

cf )
Computer Language - Binary (0 and 1)
Assembly Language (Low Level) - close to machine language.

## 2. Variables and Data Types

### - Variables

Make it easy to access.
To store sth and label it.
Help you to store sth and access it with its label.
One single value.

-   var : oldest, make the variables globally. No limitation. Can do overwrite.
-   let : more private. Most commonly use. Cant overwrite. After variable declaration and initialization, it can be reassigned repeatedly.
-   const : Cant overwrite and reassign.

```js
var def = 0;
// Name of Variable : def
// initialized to : 0

var abc;
// Undefined.

let fname = null;
// Initialized to null. Null Type.
// null is not undefined. It's Null.
```

### - Data Types

What is the type of the data variable.
Two basic data types (Reference Types / Primitive Types)

```js
var foo = [1,2,3]; //Reference Types - array
var bar = f00; // Not copy. Get the same location of memory.

// If you wanna copy
var copyFoo = ...foo;
```

cf )
DOM (Document Object Model)
HTML is Document.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <h1 id="fname">hi</h1>
        <h2 id="fname2">hello</h2>
    </body>
    <script>
        let fullName = " Tom";
        let fullNameItalic = " <i>Tom</i>";
        document.getElementById("fname").innerText += fullName;
        document.getElementById("fname2").innerHTML += fullNameItalic;
    </script>
</html>
```

### What is Console log?

-   if there is error in js, we can see at the console screen.
-   if we want to see the value, we can use console.log to check it.
-   Best way for debugging.

## 3. Conditionals

### if, else if , else

```js
function divi() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (num1 == "" || num2 == "") {
        alert("Please put numbers");
    } else if (num2 == 0) {
        document.getElementById(
            "result"
        ).innerText = `Result : Put Correct Number`;
    } else {
        document.getElementById("result").innerText = `Result : ${
            parseInt(num1) / parseInt(num2)
        }`;
    }
}
```

x=(y==4) ? "y is 4" : "y is not 4";
condition ? True : False;

### switch

break is important.
Reduce the code.(with if-else if-else)

```js
let grade = "A";
let output;

switch (grade) {
    case "A+":
    case "A": // if (grade=="A" || grade=="A+")
        output = "very good";
        break;
    case "B": // else if (grade=="B")
        output = "good";
        break;
    case "C":
        output = "pass";
        break;
    case "F":
        output = "Faild";
        break;
    default: // else
        output = "NA";
}

console.log(output); // very good
```

## 4. Arrays

collections of values.

```js
let names = [];
// Empty Arrays.
```

```js
let names = ["Aya", "Day", "Monika", "Pedro", "Lucas"];
console.log(names[1]); // Day
console.log(names[names.length - 1]); // Lucas > last item
console.log(names[parseInt(names.length / 2)]); // Monika > middle item
console.log(names[4]); // undefined

// overwrite index2
names[2] = "Tom";
console.log(names); // ['Aya', 'Day', 'Tom', 'Pedro', 'Lucas']

// put new items at the last
names[names.length] = "Last";
console.log(names); // ['Aya', 'Day', 'Tom', 'Pedro', 'Lucas', 'Last']
```

#### - push : + end

new elements to add end of the array

```js
// push (add to the end)
let num = names.push("A", "B");
console.log(names, num); // ['Aya', 'Day', 'Tom', 'Pedro', 'Lucas', 'Last','A','B'] 8
```

#### - unshift : + beginning

new elements to add beginning of the array

```js
// unshift (add to the beginning)
names.unshift("ken", "sara");
console.log(names); // ['ken, 'sara', 'Aya', 'Day', 'Tom', 'Pedro', 'Lucas', 'Last','A','B']
```

#### - pop : - 1 end

remove at the last `one` element of the array

```js
// pop (remove the last one element of the array)
names.pop(); // will delete one item from the end of the array
console.log(names); // ['ken, 'sara', 'Aya', 'Day', 'Tom', 'Pedro', 'Lucas', 'Last','A']
```

#### - shift : - 1 beginning

remove at the beginning `one` element of the array

```js
// shift (remove the beginning one element of the array)
let tmp = names.shift(); // will remove an item fron the beginning of the array
console.log(names, tmp);
```

#### - splice : start index number, delete element number, add element

```js
// splice (delete or add elements at the index)
let tmp2 = names.splice(2, 0, "hi"); // put hi in index2 and nothing delete.
console.log(names, tmp2);
```

## 5. Loops

### while ... do Loops

```js
while (condition) {
    // if the condition is true, run here.
    // if its false, run out.
}
```

```js
// at least one time printed.
do {
    // do sth
} while (condition);
```

### For Loops

```js
for (initalization; condition; post loop operation) {
    // do sth
}
```

#### - for of

get each elements

```js
let names = ["Aya", "Day", "Pedro", "Miguel", "Monika", "Lucas"];
for (let i of names) {
    console.log(i); // Aya Day Pedro Miguel Monika Lucas
}
```

#### - for in

get each elements' index

```js
let names = ["Aya", "Day", "Pedro", "Miguel", "Monika", "Lucas"];
for (let i in names) {
    console.log(i); // 0 1 2 3 4 5
    console.log(names[i]); // Aya Day Pedro Miguel Monika Lucas
}
```

## ++

DO First or Later.

```js
for (let count = 0; count < 10; count++) {
    console.log(++count); // 1 3 5 7 9
    // ++ is first. ++0 = 1 console.log is 1.
    // After post-loop operation count = 2
}

for (let count = 0; count < 10; count++) {
    console.log(count++); // 0 2 4 6 8
    // variable is first. 0++ console.log is 0.
    // After console.log count = 1.
    // After post-loop operation count = 2.
}
```

## 6. Object

-   How to define

```js
let nameObject = {
    propertyName1 : value1;
    propertyName2 : value2;
    propertyName3 : value3;
}
```

-   How to access

```js
console.log(nameObject.propertyName1); // value1
console.log(nameObject["propertyName1"]); // value1
```

Cant use for-of > Error `Object is not iterable.`
Can use for-in > `Object property name` is returned.

```js
for (let i in nameObject) {
    console.log(i); // propertyName1, propertyName2, propertyName3
    console.log(nameObject[i]); // value1, value2, value3
}
```

-   example

```js
let student = {
    studentID: 1000,
    fname: "Dahyun",
    lname: "Lim",
    country: "Korea",
    grades: [89, 87, 95, 55, 87, 75],
    courses: ["HTML", "CSS", "JS1", "JS2", "PHP", "CMS"],
};

console.log(student); // {studentID: 1000, fname:"Dahyun", lname:"Lim", country:"Korea"}
console.log(student.fname); //Dahyun
console.log(student["fname"]); //Dahyun
```

-   How to add

```js
function student(id, fname, lname, country) {
    // this.propertyName = parameter
    this.idNumber = id;
    this.fName = fname;
    this.lName = lname;
    this.countryName = country;
    this.displayDetails = function () {
        return [this.idNumber, this.fName, this.lName, this.countryName];
    };
}
// Make new object with student form
let student1 = new student(1000, "Dahyun", "Lim", "Korea");
let student2 = new student(1001, "Pedro", "Garcia", "Brazil");
console.log(student1); // {idNumber:1000,fName:'Dahyun',lName:'Lim',countryName:'Korea'}
```

## 7. Function

call the function after define the function

-   Example

```js
function addFunction(num1, num2) {
    return num1 + num2;
}

addFunction(1, 2); //3
```

```js
// 2 parameters > fname, lname
function showName(fname, lname) {
    alert(`My name is ${fname} ${lname}`);
}

showName("Dahyun"); // My name is Dahyun undefined
// We have to put 2 parameters
showName("Dahyun", "Lim"); // My name is Dahyun Lim
```

-   optional parameter Example

```js
// 2 parameters > fname, lname
// lname is optional
// Always put the optional parameter at the end!! Not the front!
function showName(fname, lname = "") {
    alert(`My name is ${fname} ${lname}`);
}

showName("Dahyun"); // My name is Dahyun
showName("Dahyun", "Lim"); // My name is Dahyun Lim
```

-   Make object Form Example

```js
function student(id, fname, lname, country) {
    // Define `this.propertyName = parameter`
    this.idNumber = id;
    this.fName = fname;
    this.lName = lname;
    this.countryName = country;
    // we can put function to the property
    this.displayDetails = function () {
        return [this.idNumber, this.fName, this.lName, this.countryName];
    };
}

function tablePoper() {
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    for (let st of students) {
        let tr = "<tr>";
        // When we wanna use function property, we have to put `porpertyName()`
        for (let detail of st.displayDetails()) {
            tr += `<td>${detail}</td>`;
        }
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}
```
