# JavaScript

1. BOOLEAN
   0 or 1 (False or True)

2. int
   0-9 numbers

3. float
   1.5f

4. double : with point
   2.8
   2 = 2.0

5. char
   a-z A-Z letters
   'b'

6. string : the most common one
   `String is array of Char.`
   use with `""`, set of char
   "Gustavo01"

## Example

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

# 1. Array

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

# 2. XOR > AND > OR

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

# 3. for

repeat sentence
`for () {}`
for (start; end; how much increased;) {}
i++ means `i=i+1`

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

`while` will only run when the condition is true.
But `do while` will run at least once.
