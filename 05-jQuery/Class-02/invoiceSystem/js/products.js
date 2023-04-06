class Product {
    #pid;
    #pname;
    #price;
    #amount;
    constructor(pid, pname, price, amount = 1) {
        this.#pid = pid;
        this.#pname = pname;
        this.#price = parseFloat(price);
        this.#amount = parseInt(amount);
    }
    total() {
        return this.#price * this.#amount;
    }
    #toArray() {
        return [
            this.#pid,
            this.#pname,
            this.#price,
            this.#amount,
            this.total(),
        ];
    }
    toTr() {
        let tr = $("<tr></tr>");
        for (let detail of this.#toArray()) {
            let td = $("<td></td>");
            td.append(detail);
            tr.append(td);
        }
        return tr;
    }

    // Getter & Setter
    get pid() {
        return this.#pid;
    }
    get pname() {
        return this.#pname;
    }
    set pname(newName) {
        if ((newName = "")) {
            alert("Product Name should has a value");
        } else {
            this.#pname = newName;
        }
    }
    get price() {
        return this.#price;
    }
    set price(newPrice) {
        if (newPrice == "") {
            alert("Product Price should has a value");
        } else {
            this.#price = parseFloat(newPrice);
        }
    }
    get amount() {
        return this.#amount;
    }
    set amount(newAmount) {
        if (newAmount == "") {
            alert("Product Amount should has a value");
        } else {
            this.#amount = parseInt(newAmount);
        }
    }
}
export default Product;
