import { actionTypes } from './actions';

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.SET_TASK:
            return {
                ...state,
                tasks: action.payload.concat()
            }
        case actionTypes.ADD_TASK:
            state.tasks.push(action.payload);
            const nextState = JSON.parse(JSON.stringify(state));
            return nextState;
        default:
            return state
    }
}

export default reducer
