import React,{Component} from 'react';
import render from 'react-dom';

import Carddetail from './Carddetail';
import Timeauthor from './Timeauthor';
import Cardadd from './Cardadd';

class Card extends Component{
	render(){
		return (
			<div className="card">
				<h3>test</h3>
				<Carddetail>test</Carddetail>
				<Timeauthor></Timeauthor>
				<Cardadd>add</Cardadd>
			</div>
		);
	} 
}

export default Card;
