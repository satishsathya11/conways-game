import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import {reset,next,autoState,random} from '../actions/index.js'
import Controler from '../components/Controls.js';

let timer;

class Control extends React.Component {
  constructor(props) {
    super(props);
     this.handleReset = this.handleReset.bind(this);
     this.handleRandom = this.handleRandom.bind(this);
     this.handleNext = this.handleNext.bind(this);
     this.handleAuto = this.handleAuto.bind(this);
  }
  componentWillReceiveProps(nextProps) {
      if(nextProps.auto){
      timer = setTimeout(()=>this.props.next(),200)
    }
    
  }
  handleReset(){
    this.props.reset()
  }
  handleRandom(){
    this.props.random()
  }
  handleNext(){
    this.props.next()
  }
  handleAuto(){
    clearTimeout(timer)
    this.props.autoState()
    
  }
  render() {
    return (
      <div>
        <Controler label="RESET" handleClick={this.handleReset} />
        <Controler label="RANDOM" handleClick={this.handleRandom} />
        <Controler label="NEXT" handleClick={this.handleNext} />
        <Controler label="AUTO" handleClick={this.handleAuto} />
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({reset:reset,
                                next:next,
                                autoState:autoState,
                                random:random},dispatch);
}
function mapStateToProps(state){
    return {
        auto: state.reducerNum.auto,
        count:state.reducerNum.count,
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Control);