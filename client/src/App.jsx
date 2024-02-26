<<<<<<< HEAD
import React from 'react'

function App() {
  return (
    <div>App</div>
=======
import React, { useEffect, useContext } from 'react';
import Routing from './Routing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Store from './store/Store';
import Links from './components/Links';
import ClientProject from './Dashboard/ClientProject';
function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  
  return (
    <div>
      <Store>
        <Routing />
        <Links/>
      </Store>
      
    </div>
>>>>>>> b3ed23232885b24f5b305b27d61bd31bdc99e5bc
  )
}

export default App