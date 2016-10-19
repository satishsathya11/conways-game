import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {equal,clearDisplay,opratorFun} from '../actions/index.js'
import OpratorButton from '../components/OpratorButton.js';

class OpratorBlock extends React.Component {
	constructor(props) {
		super(props);
		 this.handleResult = this.handleResult.bind(this);
		 this.handleClear = this.handleClear.bind(this);
		 this.handleFun = this.handleFun.bind(this);
	}
	handleResult(){
	    console.log('calculate');
	    this.props.equal();
	}
	handleClear(val){
	    this.props.clearDisplay(0)
	}
	handleFun(val){
		this.props.opratorFun(val)
	}
	render() {
		return (
			<div>
				<OpratorButton oprator="+" handleClick={this.handleFun}/>
				<OpratorButton oprator="-" handleClick={this.handleFun}/>
				<OpratorButton oprator="*" handleClick={this.handleFun}/><br/>
				<OpratorButton oprator="/" handleClick={this.handleFun}/>
				<OpratorButton oprator="=" handleClick={this.handleResult}/>
				<OpratorButton oprator="AC" handleClick={this.handleClear}/>
				
			</div>
		);
	}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({ equal:equal,
    							clearDisplay:clearDisplay,
    							opratorFun:opratorFun}, dispatch);
}
export default connect(null, matchDispatchToProps)(OpratorBlock);
