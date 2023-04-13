# jQuery

## 1. Class

## 2. Get & Set

To access private property we use getter and setter.

### getter

```js
get pname(){
    return this.#pname;
}
```

### setter

```js
set pname(newName){
    this.#pname = newName;
}
pname = 'coffee'
```

## 3. Local Storage

even refresh the page or close the tab, the data is still exist.
Saved in local.
`JSON.stringify` : make the data to string Text Value.

```js
let saveInfo(){
    let userDetails = {
        uid: this.#userid;
    }
    localStorage.setItem(this.#userid, JSON.stringify(userDetails))
}
```

when we wanna get the json data, we already made it to string, so we have to change using with 'parse'
`JSON.parse`

```js
let details = JSON.parse(localStorage.getItem($(e.target).val()));
```

### VS Session Storage

Refresh the page, still exist.
when we close the tab, data is gone. Not permanent.
Temporary.

# JSON

helps the backend and communicate with frontend.
text of information

```js
let json = '{'name':'value","name":"value"}'
```
