import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 3,
};
class NumberButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			
				<MuiThemeProvider>
			 <RaisedButton onClick={() =>this.props.handleClick(this.props.number)} style={style} label={this.props.number} primary={true}/>
			 </MuiThemeProvider>
		);
	}
}

NumberButton.proptypes = {
	number: React.PropTypes.number,
	handleClick: React.PropTypes.func,
}

export default NumberButton;