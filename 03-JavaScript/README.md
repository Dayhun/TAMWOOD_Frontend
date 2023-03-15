# 1. JavaScript Variables 변수

It is a good praticing initializing your variable.
Variables names should be unique under a context.
Basic and Complex variables.

-   var
-   let
-   const

## Variable Type

1. BOOLEAN
   0 or 1 (False or True)

2. int(Integer) 정수형
   no decimal number
   0-9 numbers

3. float : with point
   4 byte
   It has different representation as decimal.
   Decimal number
   1.5f

4. double : with point
   8 byte
   Bigger than float. There is a limit number. It converts other variable types such as integer our float into double when you work with another variable type compared to double.
   Decimal number
   2.8
   2 = 2.0

5. char
   only one character
   a-z A-Z letters
   'b'

6. string : the most common one
   `String is array of Char.`
   use with `""`, set of chars. It is a complex variable type.
   To represent the string you need double quotation mark. You can include any character including numbers or special characters.
   Strings are able to concatenate. Despite that there is a limit, you can write a full text or essay.
   "Gustavo01"

# 2. Operators 연산자

let `variable name` = `value`;
`variable name` has to be `unique`. Dont use again.
Use Camel Case.

```js
let studentName = "Natt"; //string type
let quiz = 100;
let coding = 239.5; //double

let total = quiz + coding;
console.log(total); //339.5

let total = total + 10; //overwrite
console.log(total); //349.5

console.log(studentName + total); //Natt349.5
console.log(studentName + ": " + total); //Natt: 349.5
```

```js
let num1 = "10"; //string
let num2 = "20"; //string
let num3 = 20; //number
consoel.log(num1 + num2); //1020 String
consoel.log(num1 + num3); //1020 String
let num1 = 10; //overwrite
console.log(num1 + num3); //30 Number
```

# 2. Logical Operators XOR > AND > OR 논리 연산자

## AND - && (Ampersand)

The case of `Both` is true = true

-   true && true = true
-   false && true = false
-   true && false = false
-   false && false = false

## OR - || (Vertical Bar)

If there is true = true

-   true || true = true
-   false || true = true
-   true || false = true
-   false || false = false

## XOR (exclusive OR) - ^ (caret)

Only one is true = true

-   true ^ true = false
-   false ^ true = true
-   true ^ false = true
-   false ^ false = false

## ! (Exclamation mark)

!true = false
!false = true
!= means not equal.

# 3. Array 배열

Complex object variable type that also hold a set of another complex and basic types.
We can have arrays of arrays.
As a complex type, they have default methods/functions such as pop(), push();
Accessing the slot of the array by the index number.
I can use loops to access all the slots one by one uniquly.

`let list = [ ];`

```js
let listName = ["Leticia", "Lucas", "Aya"];
console.log(listName.length); //3
listName[0]; //'Leticia'
listName[3]; //undefined

// Add Element to the last
listName.push("Day"); //4
console.log(listName); //['Leticia', 'Lucas', 'Aya', 'Day']
listName[3]; //'Day'

// Delete the last Element
listName.pop(); //'Day' //delete 1 element in the last
conosle.log(listName); //['Leticia', 'Lucas', 'Aya']
```

# 4. for Loops

repeat sentence
`for () {}`
for (start; end point; increment;){}
for (start; end; how much increased;) {}
i++ means `i=i+1`

If you wanna finish the loop, put `break`;

```js
// two attribute
function checkName(list, name) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == name) {
            console.log("Found!");
            break; //I found it, so I dont need to loop more.
        } else {
            console.log("Not Fount");
        }
    }
}
checkName(studentList, "Day");
```

```js
let studentList = ["Leticia", "Pedro", "Dylan", "Aya", "Day"];
console.log(studentList); //['Leticia', 'Pedro', 'Dylan', 'Aya', 'Day']
console.log(studentList[3]); //Aya

// INCREASED WAY
for (let i = 0; i < studentList.length; i++) {
    console.log(i); //0 //1 //2 //3 //4
    console.log(studentList[i]); //'Leticia' //'Pedro' //'Dylan' //'Aya' //'Day'
}

// DECREASED WAY
for (let i = studentList.length - 1; i >= 0; i--) {
    console.log(i); //4 //3 //2 //1 //0
    console.log(studentList[i]); //'Day' //'Aya' //'Dylan' //'Pedro' //'Leticia'
}

// EVEN
// for (let i = 1; i < studentList.length; i + 2) {
//     console.log(i); //0 //1 //2 //3 //4
//     console.log(studentList[i]); //'Leticia' //'Pedro' //'Dylan' //'Aya' //'Day'
// }

// run every single element
foreach(){
    console.log(studentList)
}
```

### do while VS while

`while` will only run when the condition is true.
But `do while` will run at least once.

## 4. if else if else Conditions

```js
let studentName = "Michael Smith";
let courseWork1 = 40;
let courseWork2 = 35;
let participation = 6.5;
let assignment = 128.5;
let finalProject = 225.55;
let finalExam = 182.3;
let courseWorkTotal = (courseWork1 + courseWork2 + 100) / 10;
let pass = false;

console.log("Student: " + studentName);
console.log("CourseWork:" + courseWorkTotal);
console.log("Assignment: " + assignment / 10);
console.log("Final: " + finalProject / 10);

let total =
    courseWorkTotal +
    participation +
    assignment / 10 +
    finalExam / 10 +
    finalProject / 10;

if (total > 69) {
    pass = true;
} else if ((total < 70 && total > 40) || participation === 10.0) {
    thirdExam = true;
} else {
    pass = false;
    thirdExam = false;
}
```

# 5. Function

```js
// CASE 1 (two attribute)
function checkName(list, name) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == name) {
            console.log("position:" + i + "Found:" + list[i]);
            break;
        } else if (i == list.length - 1 && list[list.length - 1] != name) {
            console.log("Not Found anywhere");
        }
    }
}
checkName(studentList, "Day");
```

```js
// CASE 2 (DEFAULT VALUE of ATTRIBUTE)
function checkName(list, name = "Day") {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == name) {
            console.log("position:" + i + "Found:" + list[i]);
            break;
        } else if (i == list.length - 1 && list[list.length - 1] != name) {
            console.log("Not Found anywhere");
        }
    }
}
checkName(studentList, "Gustavo"); // it will be overwrited.
```

```js
// CASE 3 (while)
function checkName(list, name = "Day") {
    let counter = 0;
    while (counter < list.length) {
        if (list[counter] == name) {
            console.log("position:" + counter + "Found:" + list[counter]);
            break;
        } else if (
            counter == list.length - 1 &&
            list[list.length - 1] != name
        ) {
            console.log("Not Found anywhere");
        }
        counter++;
    }
}
checkName(studentList, "Gustavo"); // it will be overwrited.
```

```js
// CASE 4 (do while)
```

We have two type to print it.

```js
console.log("position:" + i + "Found:" + list[i]);
console.log(`position: ${i} \nFound: ${list[i]}`);
```
