import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AOS from 'aos';

export default function Loader() {
  let navigate = useNavigate(); // Renamed from `path` to `navigate` for clarity
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false); // Inverted from `setLoad(!load)`
      AOS.refresh();
    }, 1000);
  }, [navigate]); // Changed from [path] to []

  return (
    null
    // <div className={`loading ${load ? '' : 'd-none'}`}>
    //   <div className='loader'></div>
    // </div>
  );
}
