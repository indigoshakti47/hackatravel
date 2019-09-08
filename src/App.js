import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/header/Header'
import Index from './pages/Index'
import Estimar from './pages/Estimar'
import Reserva from './pages/Reservar'


import './App.css'

const App = () => (
  <Router>
        <Header />
        <Route path="/" exact component={Reserva} />
        <Route path="/estimar" component={Estimar} />
        <Route path="/reservar" component={Reserva} />
  </Router>
)

export default App