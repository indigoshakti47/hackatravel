import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/header/Header'
import Index from './pages/Index'
import Estimar from './pages/Estimar'
import Reserva from './pages/Reservar'
import CssBaseline from '@material-ui/core/CssBaseline'

import './App.css'

const App = () => (
  <CssBaseline>
    <Router>
      <Header />
      <Route path="/" exact component={Index} />
      <Route path="/estimar" component={Estimar} />
      <Route path="/reservar" component={Reserva} />
    </Router>
  </CssBaseline>
)

export default App;