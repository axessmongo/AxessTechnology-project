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
  )
}

export default App