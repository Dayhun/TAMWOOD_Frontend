# AJAX

Use Live Server for the result.

## 1. Call Back

ex. `forEach`
First get data that we need, and call the function later.

```js
let display = (data, idx) => {
    console.log(`${idx}=>${data}`);
};
let grades = [85, 97, 80, 57];
grades.forEach(display);
// 0=>85
// 1=>97
// 2=>80
// 3=>57
// first do FOREACH to get data and index, and then call the display function.
// if you use display(), it will have a error.
```

+) if you use CONST, the value could not be changed!

### How We Have To Do

1. create xmlhttp request
2. create the call back function
    - ex. `onreadystatechange`
      : whenever the state is changing, call this function.
        > at least 4 times. > we need readyState==4 cuz it means all complete.
    - ex. `onload`
        > they run 1time of the state.
3. create a connection
   `.open(method, url)`
   method > 'GET' or "POST'
4. send the xhttp request
   `.send();`

#### status

status : 200 > everything is fine
status : 403 > forbidden
status : 404 > Not Found
status : 500 > server problem(backend)

### GET JSON!

#### WAY 1. BASIC of Ajax

```js
let loadText = () => {
    // 1. create xmlhttp request
    const xhttp = new XMLHttpRequest();
    // 2. create the call back function
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            // GET JSON
            console.log(JSON.parse(xhttp.responseText));
        }
    };
    // 3. create a connection
    xhttp.open(
        "GET",
        "http://127.0.0.1:5500/06-Ajax/Class-01/data/products.json"
    );
    // 4. send the xhttp request
    xhttp.send();
};
```

#### WAY 2. getJSON()

without using any method, we can get json file in txt.

```js
let loadJson = () => {
    $.getJSON(
        "http://127.0.0.1:5500/06-Ajax/Class-01/data/products.json",
        (data, txtSt, jqxhr) => {
            console.log(data); // get all data from json file
            console.log(txtSt); // success
            console.log(jqxhr); // {readyState: 4, getResponseHeader: ƒ, getAllResponseHeaders: ƒ, setRequestHeader: ƒ, overrideMimeType: ƒ, …}
        }
    );
};
```

Same result with way 1 and way 2.

#### BOOTSTRAP CDN

> CDN via jsDelivr > first one copy and paste
> https://getbootstrap.com/docs/5.3/getting-started/download/
> extension download 'Bootstrap 5 Quick Snippets'

```html
<!-- bootstrap 5 extension -->
<!-- bs5-grid-container -->
<div class="container-fluid">
    <!-- bs5-grid-row -->
    <div class="row justify-content-center align-items-start g-2">
        <div class="col">
            <!-- bs5-table-special -->
            <div class="table-responsive">
                <table
                    class="table table-striped-columns table-hover table-borderless table-success align-middle"
                >
                    <thead class="table-light">
                        <caption>
                            Table Name
                        </caption>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Total</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr class="table-success">
                            <td>Item</td>
                            <td>Item</td>
                            <td>Item</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
        <div class="col"></div>
    </div>
</div>
```
