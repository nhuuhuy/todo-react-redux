import * as types from '../Constants/actionTypes';
import listOfTasks from '../Models/TaskModel/TaskModel'
let jsonTasks = JSON.parse(localStorage.getItem('tasks'))
let initialstate = {
  tasks: jsonTasks
    ? jsonTasks
    : [],
  task: {
    id: '',
    name: '',
    labelArr: [],
    priority: 1,
    memberIDArr: [],
    status: 1,
    description: ''
  },

}
let tasks = (state = initialstate, actions) => {
  switch (actions.type) {
    case types.LIST_ALL:
      return state;
    case types.INITIALIZE_TASKS:
      localStorage.setItem('tasks', JSON.stringify(listOfTasks.list));
      window
        .location
        .reload();
      break;
    case types.ADD_TASK:
      const tasksUpdate = {
        ...state,
        tasks: [
          ...state.tasks,
          actions.newTask
        ]

      }
      localStorage.setItem('tasks', JSON.stringify(tasksUpdate));
      return tasksUpdate
    case types.SELECT_TASK:
      return {
        ...state,
        task: {
          ...actions.task
        },

      }
    case types.EDIT_TASK:
      const tasksEdit = state
        .tasks
        .map(item => item.id === actions.taskEdit.id
          ? Object.assign({}, item, actions.taskEdit)
          : item);
      localStorage.setItem('tasks', JSON.stringify(tasksEdit));
      return {
        ...state,
        tasks: [...tasksEdit],
      }
    case types.FILTER_TASKS:
      let filterTasks = JSON.parse(localStorage.getItem('tasks'))
      if (actions.property) {
        filterTasks = filterTasks
          .filter(task => {
            if(typeof task[actions.property] === 'object'){
              return task[actions.property].some(value => value === actions.value);
            }else{
              if(typeof actions.value === 'number' ){
                return actions.value? +task[actions.property] === actions.value : task;
              }else{
                actions.value = actions.value.trim().toUpperCase()
                return task[actions.property].trim().toUpperCase().search(actions.value) > -1
              }
            }
          });
      }
      return {
        ...state,
        tasks: filterTasks
      }
    default:
      break;
  }
  return state;
}
export default tasks;