import React, { useEffect, useContext } from 'react';
import Routing from './Routing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Store from './store/Store';
function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  
  return (
    <div>
      <Store>
        <Routing />
      </Store>
    </div>
  )
}

export default App