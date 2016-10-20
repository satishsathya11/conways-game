import React from 'react'
import NumberBlock from './containers/numberBlock.js';
import OpratorBlock from './containers/opratorBlock.js';
import Display from './containers/display.js'

class App extends React.Component {
	render() {
      return (
			  <div>	 	 
			  	<Display/>
			    <NumberBlock />
			    <OpratorBlock />			    
			  </div>
	  );
	}
}


export default App

