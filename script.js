import { useState } from 'react';
import './App.css';
import axios from 'axios'


function App() {
  const [msg, setMsg] = useState({message:''})

  const sendMsgHandler = () => {
    console.log(msg.message);
   
    axios.post(`https://api.telegram.org/bot/sendMessage?chat_id=&`,{
      //need paste token after bot and chat id in url
    text: msg.message
    }).then(function(res){
      console.log(res);
    } ).catch(function(err){
      console.log(err);
    })
  }

  return (
    <div className="App">
      <h1>hello world</h1>
      <input type="text" className="msg" name='msg' 
      value={msg.message} 
      onChange={e=>setMsg(s=>({...s, message: e.target.value}))}/>
      <button onClick={sendMsgHandler}>push</button>
    </div>
  );
}

export default App;
