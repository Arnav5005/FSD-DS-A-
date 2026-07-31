import { useState } from 'react'
// import Student from './components/Student'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'

function App() {

  return (
      // <div style={{display:'flex'}}>
      //   <h2 style={{padding:'5px' , margin:'10px'}}><Student/></h2>
      //   <h2 style={{padding:'5px' , margin:'10px'}}><Student/></h2>
      //   <h2 style={{padding:'5px' , margin:'10px'}}><Student/></h2>
      // </div>
      <div>
        <Header/>
        <Menu/>
        <Footer/>
      </div>
  )
}

export default App
