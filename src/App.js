import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Schedule from './components/Schedule';

function App() {
  const [data, setData] = useState([])
  return (
    <div className='container'>
      <div className='todo-app'>
        <div className='title'>
          <h1>To Do What?</h1>
        </div>
          <Schedule old_data={data} update={setData}/>
          <Display reset={setData} data={data}/>
      </div>
    </div>
  );
}

export default App;
