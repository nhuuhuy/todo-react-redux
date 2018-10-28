export default class ListOfTasks {
    constructor(){
        this.list = [];
    }

    addTask = (task) => {
        // this.list.push(task);
        this.list = [...this.list, task];
    }

    // Input: idTask
    // Output: trả về Task object có ID tương ứng
    findTask = (id) => {
        for(let task of this.list){
            if(task.id === id){
                return task
            }
        }
        return null;
    }

    // Input: idTask
    // Output: trẩ về index của task có ID tương ứng
    findTaskIndex = (id) => {
        for(let index in this.list){
            if(this.list[index].id === id){
                return index;
            }
        }
        return null;
    }
}