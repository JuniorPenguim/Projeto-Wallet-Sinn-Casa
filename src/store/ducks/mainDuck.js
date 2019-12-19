// Action types
export const Types = {
    SET_SWITCH: 'set_switch'
}

const initialState = {
    switchValue: false
}

// Reducers
export default function reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case Types.SET_SWITCH:
            return {
                switchValue: action.switchValue
            }
        default:
            return state
    }
}
////

// Actions
const setSwitch = value => {
    return (dispatch, getState) => {
        dispatch({
            type: Types.SET_SWITCH,
            switchValue: value
        })
    }
}

export const actions = { setSwitch }
////
