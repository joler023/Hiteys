import React from 'react'
import Inicio from '../pages/Inicio'
import { Route, Routes } from "react-router-dom";

const routes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
      </Routes>
    </div>
  )
}

export default routes
