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

If you put it in ul, every li will replace in a single row.

If you put it in li, dots will be removed.

```css
body {
    display: felx;
}
```

-   justify-content : take the child and place to the center

# text

-   text-decoration: none;remove the underline
-   text-transform: uppercase;
    make all letters to Uppercase
-   font-weight: 600;
    bolder font
-   transition: .4s;
    changing time

# hover

actions of the pointer
