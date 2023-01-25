# Semantic HTML

create the block for content

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
-   bold sentence > strong tag(in HTML5 before was b tag)
-   normally open tag + close tag
-   self closing tag : no closing tag (link tag)
-   nav > ul = nav ul
-   vh : view height (To be flexible. Dont use px.)
-   vw: view width (To be flexible. Dont use px.)
-   check your code at the W3C (to know recommendation)

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

# text

-   text-decoration: none;remove the underline
-   text-transform: uppercase;
    make all letters to Uppercase
-   font-weight: 600;
    bolder font
-   transition: .4s;
    changing time
-   text-align: center; make the text to the center (inline tags)

# hover

actions of the pointer
