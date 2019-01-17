import React, { Component } from 'react';
import propTypes from 'prop-types';

class Record extends Component {


	
  render() {
	const date = new Date(this.props.date).toISOString();
    return (
		<tr>
			<td>{date}</td>
			<td>{this.props.title}</td>
			<td>{this.props.amount}</td>
		</tr>	
    );
  }
}

export default Record;

Record.propTypes ={
	id:propTypes.string,
	date:propTypes.number,
	title:propTypes.string,
	amount:propTypes.number
}