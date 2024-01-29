import React, { useEffect } from 'react';
import Routing from './Routing';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Routing />
    </div>
  )
}

export default App