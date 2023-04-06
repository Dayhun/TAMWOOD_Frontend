import Product from "./products.js";
let productList = new Map();
let pid = 1000;
$("form")
    .eq(0)
    .submit((e) => {
        e.preventDefault();
        let children = $(e.target).children();
        let pname = children.eq(0).val();
        let price = children.eq(1).val();
        let amount = children.eq(2).val();
        pid += productList.size;
        let newProduct = new Product(pid, pname, price, amount);
        productList.set(pid, newProduct);
        $("form input").val("");
        tablePoper();
    });

let tablePoper = () => {
    $("table tbody").empty();
    let sum = 0;
    for (let pro of productList.values()) {
        let tr = pro.toTr();
        let editBtn = $("<button>Edit</button>");
        // We need event Object, so We have to call (e)=>method()
        editBtn.click((e) => edit(e, pro.pid));
        let deleteBtn = $("<button>Delete</button>");
        tr.append(editBtn, deleteBtn);
        $("tbody").append(tr);
        sum += pro.total();
    }
    $("tfoot tr").children().eq(1).text(sum);
};
let edit = (e, pid) => {
    
};
