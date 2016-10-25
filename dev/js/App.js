import React from 'react'
import Control from './containers/control-container.js';
import Grids from './containers/grid.js';



class App extends React.Component {
	render() {
      return (
			  <div>
			    <Control />
			    <Grids />			    
			  </div>
	  );
	}
}


export default App

