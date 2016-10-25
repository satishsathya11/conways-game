const initialState = {
  lifeState:{},
  next: {},
  auto:false,
  count:0
}


const reducerNum = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
        const newLifeState = Object.assign({}, state.lifeState);
        newLifeState[action.payload] = !newLifeState[action.payload]
      return Object.assign({}, state, {
       lifeState: newLifeState
      });
    case 'RESET':
      return Object.assign({}, state, {
        lifeState:{},
        count:0,
        next:{}      
      });
    case 'NEXTSTATE':
    const savedState = Object.assign({}, state.lifeState);
    for(var i=1;i<=100;i++){
    const nextState = Object.assign({}, state.lifeState);
     var neighbours=0;
    if(nextState[i-1]) neighbours++;
    if(nextState[i+1]) neighbours++;
    if(nextState[i+9]) neighbours++;
    if(nextState[i+10]) neighbours++;
    if(nextState[i+11]) neighbours++;
    if(nextState[i-9]) neighbours++;
    if(nextState[i-10]) neighbours++;
    if(nextState[i-11]) neighbours++;
    
    if(nextState[i]){
      if(neighbours < 2)savedState[i]=false
      if(neighbours > 3)savedState[i]=!savedState[i];
    }
    else {
          if( neighbours == 3) savedState[i]=true
        }
    }
      return Object.assign({}, state, {
      lifeState: savedState,
      count:state.count+1
      });
 
    case 'AUTO':
      return Object.assign({}, state, {
         auto:!state.auto
      });
      
  
      default:
        return state
  }
}

export default reducerNum