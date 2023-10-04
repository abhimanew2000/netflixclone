import { useState } from 'react'

import './App.css'
import NavBar from './components/Navbar/NavBar'
import Banner from './components/Banner/Banner'
import './components/Banner/Banner.css'
import RowPost from './components/RowPost/RowPost'
import axios from 'axios'
import {originals,action, comedy ,horror ,romance , documentaries} from './urls'
function App() {

  return (
    <>
      <div>
        <NavBar />
        <Banner />
        <RowPost url={originals }  title='Netflix Originals' />
        <RowPost url={ action } title='Action Movies' isSmall   />
        <RowPost url={comedy} title='Comedy Movies' isSmall   />
        <RowPost url={horror} title='Horror Movies' isSmall   />
        <RowPost url={romance} title='Romantic Movies' isSmall   />
        <RowPost url={ documentaries } title='Documentaries' isSmall   />

      </div>
      
    </>
  )
}

export default App
