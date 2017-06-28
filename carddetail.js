import React,{Component} from 'react';
import render from 'react-dom';

class Carddetail extends Component{
	render(){
		var data = ['aaaaaa','bbbbbbb','cccccc','ddddddd','eeeeeeeeeee'];
		var list = data.map((data) => {
			return (
				<tr>
					<td colSpan="2">{data}</td>
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
