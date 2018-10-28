import * as types from '../Constants/actionTypes'
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}
export const initalizeTask = () => {
    return {
        type: types.INITIALIZE_TASKS
    }
}

export const addTask = (newTask) => {
    return {
        type: types.ADD_TASK,
        newTask: newTask
    }
}

export const editTask = (taskEdit) => {
    return {
        type: types.EDIT_TASK,
        taskEdit: taskEdit
    }
}

export const selectTask = (task) => {
    return {
        type: types.SELECT_TASK,
        task: task
    }
}

export const filterTasks = (taskProp, value) => {
    return {
        type: types.FILTER_TASKS,
        property: taskProp,
        value: value
    }
}