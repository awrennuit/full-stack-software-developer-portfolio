const setTimerReducer = (state={}, action) => action.type === `SET_TIME` ? action.payload : state;

export default setTimerReducer;