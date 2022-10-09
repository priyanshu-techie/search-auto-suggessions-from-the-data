import './App.css';
import data from './demo.json'
import { useState } from 'react';

function App() {
  const [curr,setVal]=useState('');
  return (
    <div className="App">
      <div className='search-area'>
        <input className='inp' placeholder='Search...' onChange={(event)=>{setVal(event.target.value)}}/>
        <button>Search</button>
      </div>
      <div className='data_container'>
        {data.filter((val)=>{
            if(curr=="")
              return false;
            else if (val.first_name.toLowerCase().includes(curr.toLowerCase()))
              return true;
        }).slice(0,4)    // so that at once it only shows few suggessions
        .map((val) => {
          return (<div className='sugges'>{val.first_name}</div>);
        })}
      </div>
    </div>
  );
}

export default App;
