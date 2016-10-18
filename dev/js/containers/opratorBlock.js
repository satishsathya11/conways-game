import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {clickNum} from '../actions/index.js'
import OpratorButton from '../components/OpratorButton.js';

class OpratorBlock extends React.Component {
	constructor(props) {
		super(props);
		 this.handleValue = this.handleValue.bind(this);
	}
	handleValue(val){
		this.props.clickNum(val)
	}

	render() {
		return (
			<div>
				<OpratorButton oprator="+" handleClick={this.handleValue}/>
				<OpratorButton oprator="-" handleClick={this.handleValue}/>
				<OpratorButton oprator="x" handleClick={this.handleValue}/>
				<OpratorButton oprator="÷" handleClick={this.handleValue}/>
				
			</div>
		);
	}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({clickNum: clickNum}, dispatch);
}
export default connect(null, matchDispatchToProps)(OpratorBlock);
