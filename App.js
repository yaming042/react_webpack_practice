import React, { Component } from 'react';
import {render} from 'react-dom';

import Worklist from './Worklist';
require("./style.css");

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