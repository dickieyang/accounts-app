import React, { Component } from 'react';
import Record from './Record';
//import $ from 'jquery';

import * as RecordsApi from '../utils/RecordsApi';

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
	if(error){
		return <div>Error:{error.responseText}</div>
	}
	if(!isLoaded){
		return <div>Loading</div>
	}
    return (
      <div>
		<h2>Records</h2>
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
      </div>
    );
  }
}

export default Records;
