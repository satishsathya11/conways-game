import React from 'react';

class NumberButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button onClick={() => this.props.handleClick(this.props.number)}>{this.props.number}</button>
		);
	}
}

NumberButton.proptypes = {
	number: React.PropTypes.number,
	handleClick: React.PropTypes.func,
}

export default NumberButton;