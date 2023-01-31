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

# CSS

all elements has margin and padding in default

\* selector : every single tag

```css
* {
    margin: 0;
    padding: 0;
}
```

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

```css
nav a {
    border-bottom: 5px solid transparent;
}

nav a:hover {
    border-color: hotpink;
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

```css
<small>Hi</small>
```

# hover

actions of the pointer

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
