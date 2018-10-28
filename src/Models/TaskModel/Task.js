export default class Task {
    constructor(id, name, labelArr, priority, memberIDArr, status, description){
        this.id = id;
        this.name = name;
        this.labelArr = labelArr;
        this.priority = priority;
        this.memberIDArr = memberIDArr;
        this.status = status;
        this.description = description;
    }
}