import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';


function App() {
  const [tabs, setTabs] = useState([
  {
    title : "Tab 1",
    content: "This is some content for tab 1",
    selected: true
  },
  {
    title : "Tab 2",
    content: "This is some content for tab 2",
    selected: false
  },
  {
    title : "Tab 3",
    content: "This is some content for tab 3",
    selected: false
  },
  
])
  return (
    <div className="App">
        <Tabs tabs={tabs} setTabs ={setTabs} />
    </div>
  );
}

export default App;
