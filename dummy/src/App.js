
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [text, setText] = useState("");
  //variation four th, to handle unmounting of a componet 
  useEffect(() => {
    console.log("Listener add ") // pahle remove hoga uske baad add hoga 
    return () => {
      console.log("Listener removed")
    }
  }, [text])

  const changeHandler = (events) => {
    setText(events.target.value);
    console.log(text)
  }
  return (
    <div className="App">
      <input type="text" value={text} onChange={changeHandler} />
    </div>
  );
}

export default App;
