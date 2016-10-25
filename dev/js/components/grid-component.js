import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import {toggle} from '../actions/index.js'


class Grid extends React.Component {
	constructor(props) {
		super(props);
	}

     
	render() {     
        return (
	         <td className={this.props.data[this.props.id]?"cell active":"cell"} id={this.props.id} onClick={() => this.props.handleClick(this.props.id)}></td>
        );
    }
}
Grid.proptypes = {
    id: React.PropTypes.number,
    handleClick:React.PropTypes.func,
    data:React.PropTypes.bool,

}

export default Grid

