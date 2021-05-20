import './App.css';
import React, {useEffect, useState} from 'react';
import { ReactTable } from "./Components/ReactTable";
//? ---Effect Hook---, let you use state and other React features without writing a class 
//? and lets you perform side effects in function components:.
//?  ---State Hook---, https://reactjs.org/docs/hooks-state.html


function App() {
  // const [initialState, setState] = useState([])
  const url =  '/api';
  const [tabledata, setTabledata] = useState([])
  
  useEffect(()=> {
    fetch(url).then(response => 
      response.json().then(data => {
        setTabledata(data.r)
      })
    );
  }, []);

  console.log(tabledata)

  return <div className="App">
           <ReactTable table_data={tabledata} />
         </div>

}

export default App;
