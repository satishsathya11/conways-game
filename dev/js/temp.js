import React from 'react'


class Temp extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        var rows = this.props.columns.map(function (item, i){
            var entry = item.map(function (element, j) {
                return ( 
                    <td className="cell" key={j} id={(i*10)+j+1}> {element} </td>
                    );
            });
            return (
                <tr key={i}>{entry}</tr>
             );
        });
        return (
           <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

<Grids id={(y*10)+x+1} key={x} data={this.props.lifeState} handleClick={this.handleCellClick} />

createElement(Grids, {
    alive,
    key: x,
    id:(y*10)+x+1
  })
createElement(Grids, {
    key: x,
    id:(y*10)+x+1,
    data:this.props.lifeState,
    handleClick:this.handleCellClick,

  })
Temp.proptypes = {
    columns: React.PropTypes.array,
    satish:React.PropTypes.string
}

export default Temp

function mapStateToProps(state){
    return {
        selected: state.reducerNum.selected,
    }

className={this.props.selected?"cell active":"cell"}

Grids.proptypes = {
    columns: React.PropTypes.array,
    handleClick:React.PropTypes.func,
    selected:React.PropTypes.bool
}

<Grids handleClick={this.handleCellClick} key={x} id={(y*10)+x+1}>

/*
import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import {toggle} from '../actions/index.js'


class Grids extends React.Component {
    constructor(props) {
        super(props);
        
      console.log(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(val){
        console.log(val);
         
         this.props.toggle(val)
    }
    render() {     
        return (
             <td className={this.props.lifeState[this.props.id]?"cell active":"cell"} id={this.props.id} onClick={() => this.handleClick(this.props.id)}></td>
        );
    }
}


Grids.proptypes = {
    id: React.PropTypes.number,
    handleClick:React.PropTypes.func
}

function mapStateToProps(state){
    return {
        lifeState: state.reducerNum.lifeState,
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({toggle:toggle }, dispatch);

}

export default connect(mapStateToProps, matchDispatchToProps)(Grids);
*/


/*import React, { createElement } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {toggle} from '../actions/index.js'
import Grids from '../components/grid-component.js'


 const arr = [];
   for (var i = 0; i < 10; ++i){
      var columns = [];
      for (var j = 0; j < 10; ++j){
         columns[j] = ' ';
      }
      arr[i] = columns;
    }



class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.handleCellClick = this.handleCellClick.bind(this)
    }
    handleCellClick(){
        console.log("satish");
        this.props.toggle()
    }
    
    render() {
        return (
          <table>
          <tbody>
                   {arr.map(renderRow())}
          </tbody>
            </table>
        );
      }
}
const renderRow = () => (row, y) =>
  <tr key={y}>
    {row.map(renderTile(y))}
  </tr>
const renderTile = (y) => (alive, x) =>
<Grids id={(y*10)+x+1} key={x} className={} />


function matchDispatchToProps(dispatch){
    return bindActionCreators({toggle:toggle }, dispatch);

}



export default connect(null, matchDispatchToProps)(Grid);
*/