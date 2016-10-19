const initialState = {
  num1:0,
  num2:0,
  oprator: null,
  result:0
}

const calculated = (n1, n2, op) => {
  return eval(n1 + op + n2);
}

const reducerNum = (state = initialState, action) => {
  switch (action.type) {
    case 'OPRATORFUN':
      return Object.assign({}, state, {
        oprator:action.payload,
      });
    case 'EQUAL':
      return Object.assign({}, state, {
        result: calculated(state.num1, state.num2, state.oprator),
        num1:calculated(state.num1, state.num2, state.oprator),
        num2:0,
        oprator:null,
      });
    case 'CLICK_NUM':
     if(state.oprator){
      return Object.assign({}, state, {
        num2:state.num2*10 + action.payload,
        result:state.num2*10 + action.payload
      });
     }
      return Object.assign({}, state, {
          num1:state.num1*10 + action.payload,
          result:state.num1*10 + action.payload
      });
    case 'CLEAR':
      return Object.assign({}, state, {
        num1: action.payload,
        num2: action.payload,
        result:action.payload,
        oprator:null,
      });
      
  
      default:
        return state
  }
}

export default reducerNum