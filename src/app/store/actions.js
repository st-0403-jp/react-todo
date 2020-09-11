export const actionTypes = {
    SET_TASK: 'SET_TASK',
    ADD_TASK: 'ADD_TASK'
};

export const actionSetTasks = (payload) => ({
    type: actionTypes.SET_TASK,
    payload
});

export const actionAddTasks = (payload) => ({
    type: actionTypes.ADD_TASK,
    payload
});
