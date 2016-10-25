import React, { createElement } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {toggle} from '../actions/index.js'
import Grid from '../components/grid-component.js'


 const arr = [];
   for (var i = 0; i < 10; ++i){
      var columns = [];
      for (var j = 0; j < 10; ++j){
         columns[j] = ' ';
      }
      arr[i] = columns;
    }


class Grids extends React.Component {
	constructor(props) {
		super(props);
		this.handleCellClick = this.handleCellClick.bind(this)
	}
	handleCellClick(val){
		this.props.toggle(val)
	}
   
	
	render() {    
    const renderTile = (y) => (alive, x) =>
      <Grid id={(y*10)+x+1} key={x} data={this.props.lifeState} handleClick={this.handleCellClick} />
    const renderRow = () => (row, y) =>
      <tr key={y}>
        {row.map(renderTile(y))}
      </tr>
    return (
      <table>
      <tbody>
                 {arr.map(renderRow())}
        </tbody>
          </table>
    );
  }
}



function matchDispatchToProps(dispatch){
    return bindActionCreators({toggle:toggle }, dispatch);
}

function mapStateToProps(state){
    return {
        lifeState: state.reducerNum.lifeState,
    }
}



export default connect(mapStateToProps, matchDispatchToProps)(Grids);
