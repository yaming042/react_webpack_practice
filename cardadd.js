import React,{Component} from 'react';
import render from 'react-dom';

class Cardadd extends Component{
	render(){
		return (
			<button className="additem" style={{display:(this.props.status == "doing" || this.props.status == "done") ? "none":""}}>Add more detials</button>
		);
	} 
}

export default Cardadd;
