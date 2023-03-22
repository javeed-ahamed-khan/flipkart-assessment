
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Login } from './Pages/Login/login';
import { Home } from './Pages/Home/Home';
import { Profile } from './Pages/Profile/Profile';
import { useEffect, useState } from 'react';
import React from 'react'

export const context  = React.createContext()

function App() {
const [store,setStore]=useState({
})

  useEffect(()=>{
    fetch("https://dummyjson.com/users")
    .then(res=>res.json())
    .then(data=>console.log(data.users))
  },[])
  return (
    <context.Provider value={{
      store,setStore
    }}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    </context.Provider>

  );
}

export default App;

