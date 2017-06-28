import React,{Component} from 'react';
import render from 'react-dom';

import Carddetail from './Carddetail';
import Timeauthor from './Timeauthor';
import Cardadd from './Cardadd';

class Card extends Component{
	render(){
		return (
			<div className="card">
				<h3>{this.props.card.title}</h3>
				<Carddetail card={this.props.card} />
				<Timeauthor info={{time:this.props.card.time,author:this.props.card.author}} />
				<Cardadd status={this.props.card.status} />
			</div>
		);
	} 
}

export default Card;
