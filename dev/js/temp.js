import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Temp extends React.Component {
	render() {
		return (
			<div>
			<MuiThemeProvider>
			 <RaisedButton label="Default" />
			 </MuiThemeProvider>
			 </div>
 		);
	}
}

export default Temp;
/*<button onClick={() => this.props.handleClick(this.props.number)}>{this.props.number}</button>*/