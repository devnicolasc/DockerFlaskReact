import './App.css';
import React, {useEffect} from 'react';
//? ---Effect Hook---, let you use state and other React features without writing a class 
//? and lets you perform side effects in function components:.
//?  ---State Hook---, https://reactjs.org/docs/hooks-state.html


function App() {
  // const [initialState, setState] = useState([])
  const url =  '/api';

  useEffect(()=> {
    fetch(url).then(response => 
      response.json().then(data => {
        console.log(data)
      })
    );
  }, []);

  return <div className="App"/>
}

export default App;
