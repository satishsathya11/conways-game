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
        auto:false,
        next:{}      
      });
    case 'NEXTSTATE':
    var emptycell=false;
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
      emptycell=true;
      if(neighbours < 2)savedState[i]=false
      if(neighbours > 3)savedState[i]=!savedState[i];
    }
    else {
          if( neighbours == 3) savedState[i]=true
        }
    }
      return Object.assign({}, state, {
      lifeState: savedState,
      auto:emptycell,
      count:state.count+1
      });
 
    case 'AUTO':
      return Object.assign({}, state, {
         auto:!state.auto
      });
    case 'RANDOM':
    const tempState = Object.assign({}, state.lifeState);
    for(var i=1;i<=15;i++){
       tempState[Math.floor(Math.random()*(100)+1)]=true
    }
      return Object.assign({}, state, {
         lifeState: tempState
    });
      
  
      default:
        return state
  }
}

export default reducerNum