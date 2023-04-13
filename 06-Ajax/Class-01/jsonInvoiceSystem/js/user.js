class User{
    #userid;
    #userName;
    constructor(userid,userName){
        this.#userid = userid;
        this.#userName = userName;
    }
    saveInfo(products){
        let userDetails = {
            uid:this.#userid,
            uname:this.#userName,
            pList:products
        }
        localStorage.setItem(this.#userid,JSON.stringify(userDetails));
    }
}
export default User;