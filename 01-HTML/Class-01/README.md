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

1. tag selector
   tag selector - weakest selector, easy to replace
2. class selector
   class selector - tag selector will be changed, overwrite
3. id selector
   id selector - the most strongest selector, not changeable
4. pseudo selector
   pseudo selector = fake selector : stronger than class selector

````

```

```
````

```

```
