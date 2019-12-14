const initialState = {
  newValue: false,
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_UPDATE_VALUE':
      return {
        newValue: action.newValue,
      };
    default:
      return state;
  }
};
