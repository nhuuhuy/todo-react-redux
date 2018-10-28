export default class ListOfUsers {
    constructor(){
        this.list = [];
    }

    // Add user
    addUser = (user) => {
        this.list.push(user);
    }

    // Nhập vào id -- xuất ra user (một phần tử của list)
    findUser = (id) => {
        for(let user of this.list){
            if(user.id === id){
                return user;
            }
        }
        return null;
    }
}