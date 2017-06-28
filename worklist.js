import React,{Component} from 'react';
import render from 'react-dom';

import Card from './Card';

class Worklist extends Component{
	render(){
		var htmlO = this.props.card.map((card) => {return <Card card={card} />});
		return (
			<li className="list">
				<h2>{this.props.title}</h2>
				{htmlO}
			</li>
		);
	}
}

export default Worklist;
