import Product from "./products.js";
let productList = new Map();
let pid = 1000;
let closeEdit = () => {
    $("#editModal").hide();
};
let save = () => {
    let inputBoxes = $("#editModal .modal-body").children();
    let pid = parseInt(inputBoxes.eq(0).text());
    let selectedProduct = productList.get(pid);
    selectedProduct.pname = inputBoxes.eq(1).val();
    selectedProduct.price = inputBoxes.eq(2).val();
    selectedProduct.amount = inputBoxes.eq(3).val();
    tablePoper();
    closeEdit();
};
$("#editModal .close").click(closeEdit);
$("#editModal .modal-footer").children().eq(1).click(closeEdit);
$("#editModal .modal-footer").children().eq(0).click(save);
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
        editBtn.click(() => edit(pro.pid));
        let deleteBtn = $("<button>Delete</button>");
        deleteBtn.click(() => del(pro.pid));
        tr.append(editBtn, deleteBtn);
        $("tbody").append(tr);
        sum += pro.total();
    }
    $("tfoot tr").children().eq(1).text(sum);
};

let edit = (pid) => {
    let inputBoxes = $("#editModal .modal-body").children();
    let selectedPro = productList.get(pid);
    inputBoxes.eq(0).text(selectedPro.pid);
    inputBoxes.eq(1).val(selectedPro.pname);
    inputBoxes.eq(2).val(selectedPro.price);
    inputBoxes.eq(3).val(selectedPro.amount);
    $("#editModal").show();
};

let del = (pid) => {
    productList.delete(pid);
    tablePoper();
};
