import React,{Component} from 'react';
import render from 'react-dom';

class Carddetail extends Component{
	render(){
		var list = this.props.card.tasks.map((data) => {
			return (
				<tr>
					<td colSpan="2">{data.id}:{data.name}</td>
				</tr>
			);
		});
		return (
			<table width="100%">
				<tbody>
					{list}
				</tbody>
			</table>
		);
	} 
}

export default Carddetail;
