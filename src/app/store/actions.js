import jsonNewTask from '../../assets/mock.task.new.json';

export const actionTypes = {
    SET_TASK: 'SET_TASK',
    ADD_TASK: 'ADD_TASK'
};

export const actionSetTasks = (payload) => ({
    type: actionTypes.SET_TASK,
    payload
});

export const actionAddTasks = () => {
    const addTask = JSON.parse(JSON.stringify(jsonNewTask));
    return ({
        type: actionTypes.ADD_TASK,
        payload: addTask
    })
};
