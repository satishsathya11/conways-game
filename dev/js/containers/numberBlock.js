import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import {clickNum} from '../actions/index.js'
import NumberButton from '../components/NumberButton.js';

class NumberBlock extends React.Component {
  constructor(props) {
    super(props);
     this.handleValue = this.handleValue.bind(this);
  }

  handleValue(val) {
    this.props.clickNum(val)
  }  
  render() {
    return (
      <div>
        <NumberButton number={1} handleClick={this.handleValue}/>
        <NumberButton number={2} handleClick={this.handleValue}/>
        <NumberButton number={3} handleClick={this.handleValue}/><br/>
        <NumberButton number={4} handleClick={this.handleValue}/>
        <NumberButton number={5} handleClick={this.handleValue}/>
        <NumberButton number={6} handleClick={this.handleValue}/><br/>
        <NumberButton number={7} handleClick={this.handleValue}/>
        <NumberButton number={8} handleClick={this.handleValue}/>
        <NumberButton number={9} handleClick={this.handleValue}/>
        <NumberButton number={0} handleClick={this.handleValue}/>        
       
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({clickNum: clickNum},dispatch);
}

export default connect(null, matchDispatchToProps)(NumberBlock);