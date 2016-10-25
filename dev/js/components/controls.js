import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 3,
};
class Controler extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (	
				<MuiThemeProvider>
			 		<RaisedButton onClick={() =>this.props.handleClick()} style={style} label={this.props.label} primary={true}/>
				</MuiThemeProvider>
		);
	}
}

Controler.proptypes = {
	label: React.PropTypes.string,
	handleClick: React.PropTypes.func,
}

export default Controler;