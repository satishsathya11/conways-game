import React from 'react';

class OpratorButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button onClick={() =>this.props.handleClick(this.props.oprator)}>{this.props.oprator}</button>
		);
	}
}

OpratorButton.proptypes = {
	oprator: React.PropTypes.string,
	handleClick: React.PropTypes.func,
}

export default OpratorButton;