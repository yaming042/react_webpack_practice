import React, { Component } from 'react';
import {render} from 'react-dom';

import Worklist from './Worklist';
require("./style.css");

let cardList = [
	{
		id: 1,
		title: 'aaaaaaaaaaaaaaa',
		description: 'aaaaaaaaaaaaaaaaaaaaaaa',
		status: 'to_do',
		tasks: []		
	},
	{
		id: 2,
		title: 'bbbbbbbbbbbbbbbbb',
		description: 'bbbbbbbbbbbbbbbbbbbbbbbb',
		status: 'doing',
		tasks: [
			{
				id: 1,
				name: 'fddfdfdfd',
				done: true
			},
			{
				id: 2,
				name: 'agagagagaga',
				done: false
			},
			{
				id: 3,
				name: 'rererererererer',
				done: false
			},
		]		
	},
];

class App extends Component {
  render(){
    return (
      <ul className="mainbox">
      	<Worklist title="TO DO">list1</Worklist>
      	<Worklist title="DOING">list2</Worklist>
      	<Worklist title="DONE">list3</Worklist>
      </ul>
    );
  }
}

render(<App />, document.getElementById('react'));