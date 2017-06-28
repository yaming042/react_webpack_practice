import React,{Component} from 'react';
import render from 'react-dom';

class Timeauthor extends Component{
	render(){
		return (
			<div className="timeauthor" style={{overflow:'hidden'}}>
				<div>{this.props.info.time}</div>
				<div>{this.props.info.author}</div>
			</div>
		);
	} 
}

export default Timeauthor;
