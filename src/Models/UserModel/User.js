export default class User{
    constructor(id, name, type, avatar){
        this.id = id;
        this.name = name;
        this.type = type; // Loại user: leader, member
        this.avatar = avatar;
    }
}