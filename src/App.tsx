import React from 'react';
import './css/App.css';
import Form from './ui/Form';
import {AutomateWindowBlindsAST} from './testdata/Tasks';

function App() {
  return (<div>
    <h1>Home automation</h1>
      <Form task={AutomateWindowBlindsAST} />
  </div>);
}

export default App;
