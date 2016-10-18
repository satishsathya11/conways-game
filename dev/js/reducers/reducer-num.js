const initialState = {
  num: '0',
  oprator: null,
  result:'0'
}

const reducerNum = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDITION':
      return Object.assign({}, state, {
        oprator: action.payload
      });
    case 'SUBSTRACTION':
      return Object.assign({}, state, {
        oprator: action.payload
      });
    case 'MULTIPLICATION':
      return Object.assign({}, state, {
        oprator: action.payload
      });
    case 'DIVIDE':
      return Object.assign({}, state, {
        oprator: action.payload
      });
    case 'EQUAL':
      return Object.assign({}, state, {
        result: action.payload
      });
     case 'CLICK_NUM':
      return Object.assign({}, state, {
        num: action.payload,
        result: state.result + action.payload
      });
  
      default:
        return state
  }
}

export default reducerNum