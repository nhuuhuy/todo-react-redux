import User from './User';
import ListOfUsers from './ListOfUsers';
import UsersData from './UsersData';

let listOfUsers = new ListOfUsers();

for (let user of UsersData){
    let id = user.id;
    let name = user.name;
    let type = user.type;
    let avatar = user.avatar;

    let newUser = new User(id, name, type, avatar);
    listOfUsers.addUser(newUser);
}

export default listOfUsers;