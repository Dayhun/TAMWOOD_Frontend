# Semantic HTML

create the block for content
focus on the structure of the document, not the visual

### 1. section

: main content

### 2. article

: small content

### 3. main

: only one main tag allowed in HTML.
body tag will be a father tag.

### 4. header

: top of the page

### 5. nav

: navigate

### 6. footer

: bottom of the page

### 7. figure

: wrap the img tag

```html
<figure>
    <img src="/img/rec.png" alt="Circle" />
    <figcaption></figcaption>
</figure>
```

### 8. figcaption

: has to be inside the figure tag

```html
<figure>
    <img src="/img/rec.png" alt="Circle" />
    <figcaption></figcaption>
</figure>
```

### 9. aside

### 10. details and summary

```html
<summary>
    <details></details>
</summary>
```

### 11. Media

```
<video>
<picture>
<img>
<audio>
<source>
```

### 12. form

-   form's action attribute can send or get data.
    -   action="input"
    -   action="hello.html"
-   form's method has GET and POST
    -   method="get" will replace url
    -   method="post" will be hidden
    -   do not set the method = get

```html
<form action="input" method="">
    <!-- type="search" = type="text" -->
    <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        value=""
    />
    <!-- if you wanna send it, you need to put sumbit type https://www.w3schools.com/charsets/ref_utf_symbols.asp -->
    <input type="submit" value="&#128270;" />
</form>
```

```css
/* placeholder color */
::placeholder {
    color: hotpink;
}

/* when you type in the input, text color */
input {
    color: hotpink;
}
```

# +

-   p : paragraph

-   inline tag : wrap only text
-   block tag
-   Braquets
    < > : Angle Braquets
    ( ) : Braquets
    [ ] : Square Braquets
    { } : Curly Braquets
-   option shift down arrow = copy
-   class name has to represent what it means
-   loremN : lorem40 (40 words)
-   option Z : make paragraph separated
-   option click where to change : can change many parts at once
-   bold sentence > strong tag(in HTML5 before was b tag)
-   normally open tag + close tag
-   self closing tag : no closing tag (link tag)
-   nav > ul = nav ul
-   vh : view height (To be flexible. Dont use px.)
-   vw: view width (To be flexible. Dont use px.)
-   check your code at the W3C (to know recommendation)
-   `<hr>` make the line
-   makeshift : a temporary expedient or substitute, sth to fix it temporary to be better = work around (해결책)

# CSS

all elements has margin and padding in default

\* selector : every single tag

```css
* {
    margin: 0;
    padding: 0;
}
```

-   display: none; : hide everything
-   visibility: hidden; : hide visual, it has space

### 1. margin

: space from the border of the element to outside

### 2. padding

: space from the border of the element to inside

### 3. flex box

put `display: flex` to the father! not child!
Then children will be moved.

If you put it in ul or text, every li will replace in a single row.

If you put it in li, dots will be removed.

```css
body {
    display: felx;
}
```

-   justify-content : take the child and place to the center

```css
header {
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
}
/* 
display: flex - two text will be in the same row
flex-direction: column - can make it in column 
row-gap: 3vh - make the gap between*/
```

-   flex-wrap: wrap
    we can use column-gap and row-gap both.

### 4. root

```css
/* setting */
:root {
    --defaultColor: #5e5945;
    --defaultFontSize: 10px;
}
/* Camel Case :
first letter CapitalLetter*/

/* use */
h1 {
    color: var(--defaultColor);
}
```

### 5. How to make space between text

way1. give the padding for each letter (avoid margin- not recommended)

```css
h1 {
    padding-bottom: 1%;
}
```

way2. use the gap
give `display: flex` to use the gap
but texts will placed in a row so we need flex-direction: column

```css
header {
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
}
/* the texts are in the column, so if we wanna make a gap between, we have to use the row-gap. */
```

### 6.img

```html
<figure>
    <img src="/img/rec.png" alt="Circle" />
    <figcaption></figcaption>
</figure>
```

figcaption has to placed in the figure tag.

### 7. background-image

1. gradients
   https://www.w3schools.com/css/css3_gradients.asp

`nav {
    background-image: linear-gradient(
        when to where,
        first color space%,
        second color space%
    );
}`

```css
nav {
    background-image: linear-gradient(
        to bottom,
        rgb(80, 80, 80) 50%,
        black 50%
    );
    border-top: 1px solid whitesmoke;
}
nav a:hover {
    background-image: linear-gradient(to top, crimson 50%, red 50%);
}
```

hover transparent

```css
nav a {
    border-bottom: 5px solid transparent;
}

nav a:hover {
    border-color: hotpink;
}
```

```css
nav a {
    text-decoration: none;
    color: whitesmoke;
    border-bottom: 1px none transparent;
}

nav a:hover {
    border-bottom: 1px dashed whitesmoke;
}
```

2. background image

```css
header {
    background-image: url("../img/bg-grass.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
```

# text

-   text-decoration: none;remove the underline
-   text-transform: uppercase;
    make all letters to Uppercase
-   font-weight: 600;
    bolder font
-   transition: .4s;
    changing time
-   text-align: center; make the text to the center (inline tags)
-   text-transform : capitalize; make first letter Upeprcase
-   small tag : inline tag, not allowed to put inside the block tag
-   word-spacing: 1vw; make the space between words
-   letter-spacing: 4px; make space between letters
-   font-style: italic;

```css
<small>Hi</small>
```

# hover

actions of the pointer

-   cursor: pointer;

# JavaScript

place script tag before the closing body tag

# inline Text Elements

They do not disrupt the flow
`<a>
<abbr>
<br>
<cite>
<code>
<em>
<mark>
<small>
<span>
<strong>
<time>`

# Character Entities

`&nbsp;` Nonbreakable space
`&lt;` <
`&gt;` >
`&copy;` &copy;
`&trade;` &trade;

# CSS selector

weak - strong
(weakest) tag - class - attribute- pseudo - id (strongest)

1. tag selector
   tag selector - name of the tag, lowest priority (weakest selector), easy to replace
2. class selector
   class selector - dot sign before class name (.classname), 2nd lowest priority, tag selector will be changed, overwrite
3. id selector
   id selector - hashtag sign before id name (#idname), highest priority (the most strongest selector), not changeable
4. pseudo selector
   pseudo selector = fake selector - :sign, stronger than class selector, 2nd highest priority
5. attribute selector
   stronger than class selector
   we can create our own attribute selector

```html
<input type="submit" value="&#128270;" data-id="gallery-vancouver" />
```

```css
/* how to use attribute to css */
[type="submit"] {
}

[data-id="gallery-vancouver"] {
}
```

### Fieldset

```html
<fieldset>
    <!-- title -->
    <legend>Information</legend>
</fieldset>
```

-   result

<fieldset>
    <!-- title -->
    <legend>Information</legend>
</fieldset>

# Table

-   table : father tag
    -   tr : rows (should placed inside table tag)
        -   td : columns (should placed inside tr tag)
        -   th : represent header (should placed inside tr tag, bolder font)

```html
<table>
    <tr>
        <td>#ID</td>
        <td>Product Name</td>
        <td>Price</td>
        <td>Discount</td>
        <td>Qty</td>
    </tr>
</table>

<!-- bolder -->
<table>
    <tr>
        <th>#ID</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Qty</th>
    </tr>
</table>
```

### table form

-   basic formn

```html
<table>
    <!-- optional caption -->
    <caption>
        Dessert Menu
    </caption>
    <!-- basic form -->
    <thead></thead>
    <tbody></tbody>
    <tfoot></tfoot>
</table>
```

-   colspan : combined columns

```html
<tr>
    <td>Total</td>
    <!-- colspan means dont make any space table -->
    <!-- 4columns, but only 2 columns used. last column will be 3 added -->
    <td colspan="3">4</td>
</tr>
```

-   rowspan : combined rows

```html
<tr>
    <td>#3</td>
    <td>Pudim</td>
    <td>$8</td>
    <td rowspan="2">10%</td>
</tr>
<tr>
    <td>#4</td>
    <td>Crepe</td>
    <td>$20</td>
    <!-- <td>5%</td> -->
</tr>
```

-   colgroup tag + col tag

```html
<!-- example -->
<table>
    <caption>
        Dessert Menu
    </caption>
    <colgroup>
        <!-- col : self closing tag -->
        <col class="one" />
        <col class="two" />
        <col class="three" span="2" />
        <!-- span="2"means combined third column and forth column -->
        <!-- <col class="four" /> -->
    </colgroup>
    <thead></thead>
    <tbody></tbody>
    <tfoot></tfoot>
</table>
```

```css
.one {
    background-color: red;
}
.two {
    background-color: orange;
}
.three {
    background-color: pink;
}
```

### table css

```css
/* making border */
/* 1. table */
table {
    font-size: 30px;
    border: 1px solid black;
    /* to remove the space */
    border-collapse: collapse;
}

/* nothing happened */
thead,
tbody,
tfoot {
    border: 1px solid black;
}

/* 2. */
/* if you wanna make borders, td and th is the only tags can get border.*/
td,
th {
    border: 1px solid black;
}
/* but it has space between . so we have to add this.
table {
    border-collapse : collapse
}
*/

/* color */
thead > tr {
    background-color: aquamarine;
    color: blue;
}

/* pseudo selector - second strong selector */
tbody > tr:nth-child(odd) {
    background-color: beige;
}

tbody > tr:nth-child(2) {
    background-color: yellow;
}

tbody > tr:first-child {
    background-color: blueviolet;
    color: white;
}

tbody > tr:last-child {
    background-color: red;
    color: white;
}
```

# Forms

input type `submit` must be needed! (ALWAYS)
! Dont forget to put value! (To get Data) !

```html
<form></form>
```

### form tag attributes

-   action = 'hi.html' : form data를 서버로 보낼 때 해당 데이터가 도착할 URL을 명시
-   method = 'post' : default is 'get'
-   enctype = 'multipart/form-data' : if you wanna make the file included, you have to put in the form tag

### type = "text"

```html
<form action="thankyou.html">
    <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        value="write your first name"
    />
</form>
```

-   result

<form action="thankyou.html">
    <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        value="write your first name"
    />
</form>
not recommended to use value.

#### 'label' tag

label's attribute `for` has to get the same value with input's `id` value

```html
<form action="thankyou.html">
    <label for="firstName"> First Name: </label>
    <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        value="winter"
    />
</form>
```

#### 'name' attribute meaning

we can make the only one choice in radio type. NOT IN THE CHECKBOX
for that, we can use the same name value to choose only one choice.

```html
<!-- same name value -->
<form>
    <h4>can choose both</h4>
    <aside>
        <label for="winter">winter</label>
        <input type="checkbox" value="winter" name="winter" id="winter" />
        <label for="summer">Summer</label>
        <input type="checkbox" value="summer" name="summer" id="summer" />
    </aside>
    <aside>
        <h4>can choose only one</h4>
        <label for="timezone-east">East</label>
        <input
            type="radio"
            value="timezone-east"
            name="timezone"
            id="timezone-east"
        />
        <label for="timezone-west">West</label>
        <input
            type="radio"
            value="timezone-west"
            name="timezone"
            id="timezone-west"
        />
    </aside>
</form>
```

-   result

<form>
<h4>can choose both</h4>
            <aside>
                <label for="winter">winter</label>
                <input
                    type="checkbox"
                    value="winter"
                    name="winter"
                    id="winter"
                />
                <label for="summer">Summer</label>
                <input
                    type="checkbox"
                    value="summer"
                    name="summer"
                    id="summer"
                />
            </aside>
            <aside>
            <h4>can choose only one</h4>
    <label for="timezone-east">East</label>
    <input
        type="radio"
        value="timezone-east"
        name="timezone"
        id="timezone-east"
    />
    <label for="timezone-west">West</label>
    <input
        type="radio"
        value="timezone-west"
        name="timezone"
        id="timezone-west"
    />
    </aside>
</form>

-   if the name attribute has same value, it means users can choose only one for select

### type = "file"

```html
<form>
    <!-- file upload  -->
    <aside>
        <label for="file">Submit your work :</label>
        <input type="file" value="Send File" name="file" id="file" />
    </aside>
</form>
```

-   result
<form>
    <!-- file upload  -->
    <aside>
        <label for="file">Submit your work :</label>
        <input type="file" value="Send File" name="file" id="file" />
    </aside>
</form>

### textarea tag

```html
<form>
    <aside>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </aside>
</form>
```

-   result
<form>
    <aside>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </aside>
</form>

### Select tag

```html
<form>
    <!-- select box -->
    <aside>
        <!-- option must be placed inside the select tag -->
        <label for="beverage">Beverages</label>
        <select name="beverage" id="beverage">
            <!-- users will see 'Coke', but in the data we will get 'coke' from the value -->
            <!-- optgroup : group the options -->
            <optgroup label="Cold Beverage">
                <option value="coke">Coke</option>
                <option value="beer">Beer</option>
                <option value="pepsi">Pepsi</option>
                <option value="tea">Tea</option>
                <option value="orange-juice">Orange Juice</option>
            </optgroup>
            <optgroup label="Hot Beverage">
                <option value="coffee">Coffee</option>
                <option value="tea">Tea</option>
                <option value="hot-chocolate">Hot Chocolate</option>
                <option value="french-vanilla">French Vanilla</option>
            </optgroup>
        </select>
    </aside>
</form>
```

-   result
<form>
    <!-- select box -->
    <aside>
        <!-- option must be placed inside the select tag -->
        <label for="beverage">Beverages</label>
        <select name="beverage" id="beverage">
            <!-- users will see 'Coke', but in the data we will get 'coke' from the value -->
            <!-- optgroup : group the options -->
            <optgroup label="Cold Beverage">
                <option value="coke">Coke</option>
                <option value="beer">Beer</option>
                <option value="pepsi">Pepsi</option>
                <option value="tea">Tea</option>
                <option value="orange-juice">Orange Juice</option>
            </optgroup>
            <optgroup label="Hot Beverage">
                <option value="coffee">Coffee</option>
                <option value="tea">Tea</option>
                <option value="hot-chocolate">Hot Chocolate</option>
                <option value="french-vanilla">French Vanilla</option>
            </optgroup>
        </select>
    </aside>
</form>

To make the select box nonselected in placeholder

-   make `<option value="-" disabled selected>Select<option>`

```html
<form>
    <aside>
        <label for="beverage">Beverages</label>
        <select name="beverage" id="beverage">
            <option value="-" disabled selected>Select</option>
            <optgroup label="Cold Beverage">
                <option value="coke">Coke</option>
                <option value="beer">Beer</option>
                <option value="pepsi">Pepsi</option>
                <option value="tea">Tea</option>
                <option value="orange-juice">Orange Juice</option>
            </optgroup>
            <optgroup label="Hot Beverage">
                <option value="coffee">Coffee</option>
                <option value="tea">Tea</option>
                <option value="hot-chocolate">Hot Chocolate</option>
                <option value="french-vanilla">French Vanilla</option>
            </optgroup>
        </select>
    </aside>
</form>
```

<form>
    <aside>
        <!-- option must be placed inside the select tag -->
        <label for="beverage">Beverages</label>
        <select name="beverage" id="beverage">
        <option value="-" disabled selected>Select</option>
            <optgroup label="Cold Beverage">
                <option value="coke">Coke</option>
                <option value="beer">Beer</option>
                <option value="pepsi">Pepsi</option>
                <option value="tea">Tea</option>
                <option value="orange-juice">Orange Juice</option>
            </optgroup>
            <optgroup label="Hot Beverage">
                <option value="coffee">Coffee</option>
                <option value="tea">Tea</option>
                <option value="hot-chocolate">Hot Chocolate</option>
                <option value="french-vanilla">French Vanilla</option>
            </optgroup>
        </select>
    </aside>
</form>

### type="submit" & type="reset"

```html
<form>
    <aside>
        <!-- submit the form -->
        <input type="submit" value="Send" />
        <!-- cleanup your form -->
        <input type="reset" value="Send" />
    </aside>
</form>
```

<form>
    <aside>
        <!-- submit the form -->
        <input type="submit" value="Send" />
        <!-- cleanup your form -->
        <input type="reset" value="Reset" />
    </aside>
</form>

# responsive web site
