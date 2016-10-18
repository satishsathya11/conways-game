import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import {clickNum,equal} from '../actions/index.js'
import NumberButton from '../components/NumberButton.js';

class NumberBlock extends React.Component {
  constructor(props) {
    super(props);
     this.handleValue = this.handleValue.bind(this);
     this.handleresult = this.handleresult.bind(this);
  }

  handleValue(val) {
    this.props.clickNum(val)
  }
  handleresult(){
    this.props.equal()
  }
  render() {
    return (
      <div>
        <NumberButton number="1" handleClick={this.handleValue}/>
        <NumberButton number="2" handleClick={this.handleValue}/>
        <NumberButton number="3" handleClick={this.handleValue}/>
        <NumberButton number="4" handleClick={this.handleValue}/>
        <NumberButton number="5" handleClick={this.handleValue}/>
        <NumberButton number="6" handleClick={this.handleValue}/>
        <NumberButton number="7" handleClick={this.handleValue}/>
        <NumberButton number="8" handleClick={this.handleValue}/>
        <NumberButton number="=" handleClick={this.handleResult}/>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({clickNum: clickNum,equal:equal}, dispatch);
}

export default connect(null, matchDispatchToProps)(NumberBlock);