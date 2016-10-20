import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 3,
};

class OpratorButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<MuiThemeProvider>
			 <RaisedButton onClick={() =>this.props.handleClick(this.props.oprator)} style={style} label={this.props.oprator} secondary={true}/>
			 </MuiThemeProvider>
		);
	}
}

OpratorButton.proptypes = {
	oprator: React.PropTypes.string,
	handleClick: React.PropTypes.func,
}

export default OpratorButton;