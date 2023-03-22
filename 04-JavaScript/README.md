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
