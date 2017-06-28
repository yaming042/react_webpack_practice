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
		time: '2017.02.02',
		author: 'test1',
		tasks: [
			{
				id: 1,
				name: 'fddfdfdfd',
				done: false
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
	{
		id: 2,
		title: 'aaaaaaaaaaaaaaa',
		description: 'aaaaaaaaaaaaaaaaaaaaaaa',
		status: 'to_do',
		time: '2017.02.02',
		author: 'test2',
		tasks: [
			{
				id: 1,
				name: 'fddfdfdfd',
				done: false
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
	{
		id: 3,
		title: 'bbbbbbbbbbbbbbbbb',
		description: 'bbbbbbbbbbbbbbbbbbbbbbbb',
		status: 'doing',
		time: '2017.02.02',
		author: 'test3',
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
      	<Worklist title="TO DO" card={cardList.filter((card)=>card.status === 'to_do')} />
      	<Worklist title="DOING" card={cardList.filter((card)=>card.status === 'doing')} />
      	<Worklist title="DONE" card={cardList.filter((card)=>card.status === 'done')} />
      </ul>
    );
  }
}

render(<App />, document.getElementById('react'));