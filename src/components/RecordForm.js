import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class RecordForm extends Component {
	constructor(){
		super();
		this.state = {
			date:"",
			title:"",
			amount:""
		}
	}

	handleChange(event){
		
		let name = event.target.name;
		let val = event.target.value;
		let obj;
		console.log(name)
		this.setState((
			obj = {},
			obj[name] = val,
			obj
		));
	}

	valid(){
		return this.state.date && this.state.title && this.state.amount
	}
	
  render() {
    return (
		<form className = "form-inline">
			<div className = "form-group">
				<input type="text" className="form-control" placeholder="Date" onChange={this.handleChange.bind(this)} name="date" />
			</div>
			<div className = "form-group">
				<input type="text" className="form-control" placeholder="Title" onChange={this.handleChange.bind(this)} name="title"/>
			</div>
			<div className = "form-group">
				<input type="text" className="form-control" placeholder="Amount" onChange={this.handleChange.bind(this)} name="amount"/>
			</div>
			<button type="submit" className="btn btn-primary" disabled={!this.valid()}>Create Record</button>
		</form>
    );
  }
}
