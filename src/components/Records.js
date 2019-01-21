import React, { Component } from 'react';
import Record from './Record';
//import $ from 'jquery';

import * as RecordsApi from '../utils/RecordsApi';
import RecordForm from './RecordForm';

class Records extends Component {
	constructor(){
		super();
		this.state = {
			records: [],
			error:null,
			isLoaded:false
		}
	}

	componentDidMount(){
		RecordsApi.getAll().then(
			res => this.setState({
				records:res,
				isLoaded:true
			}),
			err => this.setState({
				isLoaded:true,
				error:err
			})
		)
	}

  render() {
	const {error,isLoaded,records} = this.state;

	let result;
	if(error){
		result = <div>Error:{error.responseText}</div>
	}
	if(!isLoaded){
		result = <div>Loading</div>
	}
    result = (
        <table className="table table-borderd">
			<thead>
			<tr>
				<th>Date</th>
				<th>Title</th>
				<th>Amount</th>
			</tr>
			</thead>
			<tbody>
				{records.map((record) => <Record {...record} key={record.id}/>)}
			</tbody>
		</table>
    );

	return (
	 <div>
		<h2>Records</h2>
		<RecordForm />
	    {result}
     </div>
	);
  }
}

export default Records;
