/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AgentWorkspace from '../screens/AgentWorkspace'
import Login from '../screens/Login'
import Register from '../screens/Register'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>Home</div>}/>
            <Route path="/agent" element= {<AgentWorkspace/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes
