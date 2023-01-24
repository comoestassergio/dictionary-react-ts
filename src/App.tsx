import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Searchbar from './components/Searchbar/Searchbar'

function App() {

  return (
    <div className="App">
      <Header />
      <Searchbar />
    </div>
  )
}

export default App
