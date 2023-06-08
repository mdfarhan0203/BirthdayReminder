import React ,{useState} from 'react'
import './App.css';
import data from './Components/data'
import List from './Components/List'

function App() {
  const [person,setPerson]=useState(data)
  return (
    <div className='main'>
      <div className='container'>
        <h1>{person.length} Birthdays Today</h1>
        <List person={person}/>
        <button className='button' 
        onClick={()=>setPerson([])}>Clear All</button>
      </div>

    </div>
  );
}

export default App;
