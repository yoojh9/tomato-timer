// 1) Import

// 2) Actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECONDS = "ADD_SECONDS"

// 3) Action Createor
function startTimer(){
    return {
        type: START_TIMER
    }
}

function restartTimer(){
    return {
        type: RESTART_TIMER
    }
}

function addSecond(){
    return {
        type: ADD_SECONDS
    }
}


// 4) Reducer
const TIME_DURATION = 1500;

const InitialState = {
    isPlaying: false,
    elapsedTime: 0,
    timeDuration: TIME_DURATION
}
// 액션을 보낼 때마다 리덕스가 자동으로 액션을 리듀서로 보냄.
function reducer(state = InitialState, action){
    switch(action.type){
        case START_TIMER: 
            return applyStartTimer(state);  // state: current state
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECONDS:
            return applyAddSeconds(state);
        default:
            return state;
    }
}

// 5) Reducer Functions
function applyStartTimer(state){
    return {
        ...state,
        isPlaying:true, 
    }
}

function applyRestartTimer(state){
    return {
        ...state,
        isPlaying:false,
        elapsedTime: 0
    }
}

function applyAddSeconds(state){
    if(state.elapsedTime < TIME_DURATION){
        return {
            ...state,
            elapsedTime: state.elapsedTime+ 1
        }
    } else {
        return {
            ...state,
            isPlaying: false
        }
    }
}
// 6) Export Action Creators
const actionCreator = {
    startTimer,
    restartTimer,
    addSecond
}

export {actionCreator};

// 7) Export Reducer
export default reducer;