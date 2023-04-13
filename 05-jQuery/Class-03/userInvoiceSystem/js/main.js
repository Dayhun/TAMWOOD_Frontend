import Product from "./products.js";
import User from "./user.js";
let productList = new Map();
let user = null;
let pid = 1000;
$("form").eq(1).children().prop("disabled",true);
let closeEdit = ()=>{
    $("#editModal").hide();
};
let save = ()=>{
    let inputBoxes = $("#editModal .modal-body").children();
    let pid = parseInt(inputBoxes.eq(0).text());
    let selectedProduct = productList.get(pid);
    selectedProduct.pname = inputBoxes.eq(1).val();
    selectedProduct.price = inputBoxes.eq(2).val();
    selectedProduct.amount = inputBoxes.eq(3).val();
    tablePoper();
    closeEdit();
};
let saveInvoice = ()=>{
    if(productList.size==0){
        alert("No information to save!!!!");
    }else{
        let productArray = new Array();
        for(let pro of productList.values()){
            productArray.push(pro.toJson());
        }
        user.saveInfo(productArray);
        reset();
    }
}
let reset = ()=>{
    $('form input').val("");
    productList.clear();
    tablePoper();
    user = null;
    $("form").children().prop("disabled",true);
    $("form").eq(0).find("input").prop("disabled",false);
    $("form").eq(0).find("button").eq(0).prop("disabled",false);

}
$('#editModal .close').click(closeEdit);
$('#editModal .modal-footer').children().eq(1).click(closeEdit);
$('#editModal .modal-footer').children().eq(0).click(save);
$('form').eq(0).find("button").eq(1).click(saveInvoice);
$('form').eq(0).find("input").eq(0).change((e)=>{
    let details = localStorage.getItem($(e.target).val());
    if(details!=null){
        details = JSON.parse(details);
        user = new User(details.uid,details.uname);
        for(let item of details.pList){
            let product = new Product(item.pid,item.pname,item.price,item.amount);
            productList.set(item.pid,product);
        }
        $(e.target).next().val(details.uname);
    }
})
$('form').eq(0).submit((e)=>{
    e.preventDefault();
    if(user!=null){
        tablePoper();
    }else{
        let children = $(e.target).children();
        let uid = children.eq(0).val();
        let uname = children.eq(1).val();
        user = new User(uid,uname);
    }
    $(e.target).children().prop("disabled",true);
    $(e.target).find("button").eq(1).prop("disabled",false);
    $('form').eq(1).children().prop("disabled",false);
})
$('form').eq(1).submit((e)=>{
    e.preventDefault();
    let children = $(e.target).children();
    let pname = children.eq(0).val();
    let price = children.eq(1).val();
    let amount = children.eq(2).val();
    pid += productList.size;
    $(e.target).find("input").val("");
    let newProduct = new Product(pid,pname,price,amount);
    productList.set(pid,newProduct);
    tablePoper();
});

let tablePoper = ()=>{
    $("table tbody").empty();
    let sum = 0;
    for(let pro of productList.values()){
        let tr = pro.toTr();
        let editBtn = $("<button>Edit</button>");
        editBtn.click(()=>edit(pro.pid));
        let deleteBtn = $("<button>Delete</button>");
        deleteBtn.click(()=>deleteHandler(pro.pid));
        tr.append(editBtn,deleteBtn);
        $("tbody").append(tr);
        sum += pro.total();
    }
    $("tfoot tr").children().eq(1).text(sum);
}
let deleteHandler = (pid)=>{
    productList.delete(pid);
    tablePoper();
}
let edit = (pid)=>{
    let inputBoxes = $("#editModal .modal-body").children();
    let selectedPro = productList.get(pid);
    inputBoxes.eq(0).text(selectedPro.pid);
    inputBoxes.eq(1).val(selectedPro.pname);
    inputBoxes.eq(2).val(selectedPro.price);
    inputBoxes.eq(3).val(selectedPro.amount);
    $("#editModal").show();
}