import React, {useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider';

function App() {
  // const [user, setUser] = useState("");
  const [{user}, dispatch] = useStateValue();
  
  return (
    <>
    <div className="App">
    {!user ? (
      <Login/>
    ):(
      <div className="app-body">
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          <Route exact path='/' element={<Chat/>} />
          <Route path='/rooms/:roomId' element={<Chat/>} />
        </Routes>
      </BrowserRouter>
      </div>
    )}
    </div>
    </>
  );
}

export default App;
