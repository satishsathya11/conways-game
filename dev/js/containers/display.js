import React from 'react';
import { connect } from 'react-redux';


const style = {
	height: '60px',
  width: '270px',
  margin: '5px 5px 5px -10px',
  fontSize:'35px',
};
class Display extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
	}
	render() {
		return (
			<div>
			
				
				<h2 style={style}>{this.props.result}</h2>
			
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		result: state.reducerNum.result,
	}
}
export default connect(mapStateToProps, null)(Display);
