import { AsyncStorage } from 'react-native'

const initialState = {
    newValue: false
}

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK_UPDATE_VALUE':
            return {
                ...state,
                newValue: action.action
            }
        default:
            return state
    }
}
