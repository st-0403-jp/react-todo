import { actionTypes } from './actions';

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.SET_TASK:
            return {
                ...state,
                tasks: action.payload.concat()
            }
        case actionTypes.ADD_TASK:
            const prevState = {
                ...state
            };
            prevState.tasks.push({...action.payload});
            const nextState = {...prevState};
            return nextState;
        default:
            return state
    }
}

export default reducer
