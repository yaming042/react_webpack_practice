import React,{Component} from 'react';
import render from 'react-dom';

import Card from './Card';

class Worklist extends Component{
	render(){
		return (
			<li className="list">
				<h2>{this.props.title}</h2>
				<Card></Card>
			</li>
		);
	}
}

export default Worklist;
